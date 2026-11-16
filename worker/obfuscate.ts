// ============================================================================
// Polymorphic per-deployment obfuscator (worker/obfuscate.ts)
// ============================================================================
// Every deployment gets its own string table, decoder identifiers and script
// hash. The transform is intentionally dependency-free: this file runs inside a
// Cloudflare Worker, so it cannot use Babel or Node APIs.
//
// Inputs can be:
//   • raw CFnew / NEXUS / edgetunnel sources (plain `解码64(...)` calls),
//   • MiliOS builds (`解码64_<hex>(...)` with an XOR key),
//   • already-sanitized local bundles (`_d64(...)`, sentinel-prefixed base64),
//   • a previous deployment's `_d_<hex>(...)` table.
//
// All of them are rewritten to one ASCII decoder (`_d_<tag>`) whose key and
// cache are unique per deployment.
// ============================================================================

let deploySequence = 0

/** Compute a deterministic 32-bit FNV-1a hash from any seed string. */
function fnv1a32(input: string, basis = 0x811c9dc5): number {
  let h = basis >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

/** Generate a unique per-deployment seed when none is explicitly provided. */
export function generateUniqueDeploymentSeed(hint = ''): string {
  deploySequence = (deploySequence + 1) >>> 0
  let randUuid = ''
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      randUuid = crypto.randomUUID()
    }
  } catch {}
  const r1 = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0')
  const r2 = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0')
  return `${hint}:${Date.now()}:${deploySequence}:${randUuid}:${r1}${r2}`
}

/** UTF-8 string -> Uint8Array */
function utf8ToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str)
}

/** Uint8Array -> UTF-8 string */
function bytesToUtf8(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes)
}

/** Standard Base64 -> Uint8Array */
function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

/** Uint8Array -> Standard Base64 */
function bytesToBase64(bytes: Uint8Array): string {
  let bin = ''
  const chunk = 0x8000
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode(...bytes.subarray(i, i + chunk))
  }
  return btoa(bin)
}

// Keywords that Cloudflare's static scanners look for, plus every CJK range the
// upstream bundles use for identifiers and UI strings.
const SENSITIVE_LITERAL_RE =
  /[\u4e00-\u9fff]|vless|vmess|trojan|shadowsocks|wireguard|hysteria|tuic|socks5|proxyip|cmliu|edgetunnel|cfnew|byjoey|090227|clash|sing-?box|v2ray|xray|nekobox|shadowrocket|quantumult|hiddify|mihomo|amnezia|masque|epeius|night_city|uuidinput|welcome to nginx/i

const IDENTIFIER_RE =
  /[\w$\u4e00-\u9fff]*[\u4e00-\u9fff][\w$\u4e00-\u9fff]*/g

/**
 * Base64 of `sentinel + plainText`, trying a few sentinel bytes so the encoded
 * text never contains a sensitive keyword by coincidence. The decoder strips
 * any leading control character (0x01..0x1f), so the call site does not need to
 * carry the sentinel.
 */
function encodeSentinel(plainText: string): string {
  for (let code = 1; code <= 31; code++) {
    const encoded = bytesToBase64(utf8ToBytes(String.fromCharCode(code) + plainText))
    SENSITIVE_LITERAL_RE.lastIndex = 0
    if (!SENSITIVE_LITERAL_RE.test(encoded)) return encoded
  }
  return bytesToBase64(utf8ToBytes(plainText))
}

function decodeSentinel(encoded: string): string {
  const raw = bytesToUtf8(base64ToBytes(encoded))
  const code = raw.charCodeAt(0)
  return code > 0 && code < 32 ? raw.slice(1) : raw
}

/** XOR+Base64 encoding kept for callers that manage their own key pair. */
export function encodeEdgetunnelPolymorphic(plainText: string, k1: number, k2: number): string {
  const utf8 = utf8ToBytes(plainText)
  const out = new Uint8Array(utf8.length)
  for (let i = 0; i < utf8.length; i++) out[i] = utf8[i] ^ ((k1 + i * k2) & 0xff)
  return bytesToBase64(out)
}

/** Inverse of {@link encodeEdgetunnelPolymorphic}. */
export function decodeEdgetunnelPolymorphic(encodedB64: string, k1: number, k2: number): string {
  return decodeLegacy(encodedB64, k1, k2)
}

function decodeLegacy(encoded: string, k1: number, k2: number): string {
  const raw = base64ToBytes(encoded)
  if (k1 === 0 && k2 === 0) return bytesToUtf8(raw)
  const out = new Uint8Array(raw.length)
  for (let i = 0; i < raw.length; i++) out[i] = raw[i] ^ ((k1 + i * k2) & 0xff)
  return bytesToUtf8(out)
}

// ── comment removal ─────────────────────────────────────────────────────────

function skipQuoted(code: string, start: number, quote: string): number {
  let i = start + 1
  while (i < code.length) {
    if (code[i] === '\\') {
      i += 2
      continue
    }
    if (code[i] === quote) return i + 1
    i++
  }
  return i
}

function skipTemplate(code: string, start: number): number {
  let i = start + 1
  while (i < code.length) {
    const ch = code[i]
    if (ch === '\\') {
      i += 2
      continue
    }
    if (ch === '`') return i + 1
    if (ch === '$' && code[i + 1] === '{') {
      i += 2
      let depth = 1
      while (i < code.length && depth > 0) {
        const c = code[i]
        if (c === '\\') {
          i += 2
          continue
        }
        if (c === '"' || c === "'") {
          i = skipQuoted(code, i, c)
          continue
        }
        if (c === '`') {
          i = skipTemplate(code, i)
          continue
        }
        if (c === '{') depth++
        else if (c === '}') depth--
        i++
      }
      continue
    }
    i++
  }
  return i
}

function regexCanStartAfter(previous: string): boolean {
  const trimmed = previous.replace(/\s+$/, '')
  if (!trimmed) return true
  const ch = trimmed[trimmed.length - 1]
  if ('(,=:[!&|?{};+-*%^~<>'.includes(ch)) return true
  return /(?:return|case|typeof|instanceof|in|of|delete|void|throw|new|do|else|yield|await)$/.test(trimmed)
}

/** Strip every JS comment while leaving strings, templates and regexes intact. */
function stripComments(code: string): string {
  let i = 0
  let out = ''
  const len = code.length
  while (i < len) {
    const ch = code[i]
    const next = code[i + 1]

    if (ch === '"' || ch === "'") {
      const end = skipQuoted(code, i, ch)
      out += code.slice(i, end)
      i = end
      continue
    }

    if (ch === '`') {
      const end = skipTemplate(code, i)
      out += code.slice(i, end)
      i = end
      continue
    }

    if (ch === '/' && next === '/') {
      i += 2
      while (i < len && code[i] !== '\n') i++
      continue
    }
    if (ch === '/' && next === '*') {
      i += 2
      while (i + 1 < len && !(code[i] === '*' && code[i + 1] === '/')) i++
      i += 2
      continue
    }

    if (ch === '/' && regexCanStartAfter(out)) {
      out += ch
      i++
      let inClass = false
      while (i < len) {
        const c = code[i]
        out += c
        if (c === '\\') {
          if (i + 1 < len) out += code[i + 1]
          i += 2
          continue
        }
        if (c === '[') inClass = true
        else if (c === ']') inClass = false
        else if (c === '/' && !inClass) {
          i++
          while (i < len && /[a-z]/i.test(code[i])) {
            out += code[i]
            i++
          }
          break
        } else if (c === '\n') {
          break
        }
        i++
      }
      continue
    }

    out += ch
    i++
  }
  return out
}

// ── sensitive literal encryption ────────────────────────────────────────────

/**
 * Replace every single/double-quoted string that contains a sensitive keyword
 * or Chinese text with `_d64("…")` (sentinel-prefixed base64). Object keys are
 * emitted as computed keys so the object shape is preserved.
 */
function encryptPlainSensitiveLiterals(code: string, decoder: string): string {
  const len = code.length
  let i = 0
  let out = ''
  let lastPos = 0

  while (i < len) {
    const ch = code[i]
    if (ch === '`') {
      i = skipTemplate(code, i)
      continue
    }
    if (ch === '/' && regexCanStartAfter(out + code.slice(lastPos, i))) {
      i++
      let inClass = false
      while (i < len) {
        const c = code[i]
        if (c === '\\') {
          i += 2
          continue
        }
        if (c === '[') inClass = true
        else if (c === ']') inClass = false
        else if (c === '/' && !inClass) {
          i++
          while (i < len && /[a-z]/i.test(code[i])) i++
          break
        } else if (c === '\n') break
        i++
      }
      continue
    }
    if (ch !== "'" && ch !== '"') {
      i++
      continue
    }
    const quote = ch
    const start = i
    i++
    let rawContent = ''
    let hasComplexEscape = false
    while (i < len && code[i] !== quote) {
      if (code[i] === '\\') {
        const esc = code[i + 1] || ''
        if (esc === 'n') rawContent += '\n'
        else if (esc === 'r') rawContent += '\r'
        else if (esc === 't') rawContent += '\t'
        else if (esc === '\\' || esc === "'" || esc === '"') rawContent += esc
        else {
          hasComplexEscape = true
          rawContent += esc
        }
        i += 2
        continue
      }
      if (code[i] === '\n' || code[i] === '\r') {
        hasComplexEscape = true
        break
      }
      rawContent += code[i]
      i++
    }
    if (i < len && code[i] === quote) i++
    const end = i

    SENSITIVE_LITERAL_RE.lastIndex = 0
    if (!hasComplexEscape && rawContent.length >= 3 && rawContent.length <= 8192 && SENSITIVE_LITERAL_RE.test(rawContent)) {
      const before = code.slice(Math.max(0, start - 48), start).trimEnd()
      const after = code.slice(end, Math.min(len, end + 20)).trimStart()
      const isFromImport = /\bfrom\s*$/.test(before) || /\bimport\s*\(\s*$/.test(before)
      const isAlreadyDecoded = new RegExp(`${decoder}\\s*\\(\\s*$`).test(before) || /解码64(?:_[0-9a-f]+)?\s*\(\s*$/.test(before)
      const isObjectKey = after.startsWith(':') && /[{,]\s*$/.test(before)
      const isMemberKey = /\.\s*$/.test(before)

      if (!isFromImport && !isAlreadyDecoded && !isMemberKey) {
        const encoded = encodeSentinel(rawContent)
        const call = `${decoder}(${JSON.stringify(encoded)})`
        out += code.slice(lastPos, start) + (isObjectKey ? `[${call}]` : call)
        lastPos = end
      }
    }
  }

  if (lastPos === 0) return code
  return out + code.slice(lastPos)
}

// ── decoder discovery / removal ─────────────────────────────────────────────

interface DecoderInfo {
  start: number
  end: number
  name: string
  body: string
}

function findFunction(code: string, namePattern: RegExp): DecoderInfo | null {
  const source = namePattern.source
  const re = new RegExp(`function\\s+(${source})\\s*\\([^)]*\\)\\s*\\{`)
  const match = re.exec(code)
  if (!match || match.index === undefined) return null
  const open = match.index + match[0].length - 1
  let depth = 1
  let i = open + 1
  while (i < code.length && depth > 0) {
    const ch = code[i]
    if (ch === '{') depth++
    else if (ch === '}') depth--
    i++
  }
  if (depth !== 0) return null
  return { start: match.index, end: i, name: match[1], body: code.slice(open, i) }
}

function xorKeys(body: string): { k1: number; k2: number } | null {
  const match = /\^\s*(\d+)\s*\+\s*(\d+)\s*\*/.exec(body)
  if (!match) return null
  return { k1: Number(match[1]), k2: Number(match[2]) }
}

function replaceEncodedCalls(
  code: string,
  name: string,
  decode: (b64: string) => string,
  decoder: string,
): { code: string; count: number; remaining: number } {
  let count = 0
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`(?<![\\w$\\u4e00-\\u9fff])${escaped}\\s*\\(\\s*(['"])([A-Za-z0-9+/=]+)\\1\\s*\\)`, 'g')
  const replaced = code.replace(re, (full, _q, b64: string) => {
    try {
      const plain = decode(b64)
      if (plain.includes('\ufffd')) return full
      count++
      return `${decoder}(${JSON.stringify(encodeSentinel(plain))})`
    } catch {
      return full
    }
  })
  const remaining = (replaced.match(new RegExp(`(?<![\\w$\\u4e00-\\u9fff])${escaped}\\s*\\(`, 'g')) || []).length
  return { code: replaced, count, remaining }
}

/** Remove an existing decoder definition, including its leading helper consts. */
function removeDecoder(code: string, info: DecoderInfo): string {
  return code.slice(0, info.start) + code.slice(info.end)
}

function decoderRuntime(tag: string): string {
  const td = `_t_${tag}`
  const cache = `_c_${tag}`
  const fn = `_d_${tag}`
  return (
    `const ${td}=new TextDecoder,${cache}=Object.create(null);` +
    `function ${fn}(_s){const _h=${cache}[_s];if(_h!==void 0)return _h;` +
    `const _b=atob(_s),_l=_b.length,_u=new Uint8Array(_l);` +
    `for(let _i=0;_i<_l;_i++)_u[_i]=_b.charCodeAt(_i);` +
    `let _r=${td}.decode(_u);const _cc=_r.charCodeAt(0);` +
    `if(_cc>0&&_cc<32)_r=_r.slice(1);return ${cache}[_s]=_r}`
  )
}

function insertAfterImports(code: string, runtime: string): string {
  const lines = code.split('\n')
  let insertIdx = 0
  for (let i = 0; i < Math.min(lines.length, 60); i++) {
    if (/^\s*import\s+/.test(lines[i])) insertIdx = i + 1
  }
  lines.splice(insertIdx, 0, runtime)
  return lines.join('\n')
}

// ── main entry ──────────────────────────────────────────────────────────────

/**
 * Transform a Worker source so every deployment is cryptographically and
 * textually distinct, while keeping the module runnable as-is.
 */
export function obfuscateWorkerWithEdgetunnelMethod(rawCode: string, seedInput?: string): string {
  if (!rawCode || typeof rawCode !== 'string') return rawCode

  const effectiveSeed = seedInput && seedInput.trim() ? seedInput.trim() : generateUniqueDeploymentSeed('edge')
  const h1 = fnv1a32(effectiveSeed, 0x811c9dc5)
  const h2 = fnv1a32(effectiveSeed + '::k2', 0x9e3779b9)
  const h3 = fnv1a32(effectiveSeed + '::tag', 0x85ebca6b)
  const tag = (h3 >>> 0).toString(16).padStart(8, '0').slice(0, 6)
  const seedFingerprint = (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0')
  const decoder = `_d_${tag}`

  let code = rawCode

  // 1. Top-level `await import("cloudflare:sockets")` -> static import.
  if (code.includes('await import("cloudflare:sockets")') || code.includes("await import('cloudflare:sockets')")) {
    code = code.replace(
      /let\s+([\w$\u4e00-\u9fff]+)\s*=\s*null;\s*try\s*\{\s*\1\s*=\s*\(await\s+import\(["']cloudflare:sockets["']\)\)\.connect;\s*\}\s*catch\s*\{\s*\}/g,
      "import { connect as _cfConnect } from 'cloudflare:sockets';\nconst $1 = _cfConnect;",
    )
  }

  // 2. Legacy Terser vault (`const n=[...]; function t(t){…^k1+k2*i…}`):
  //    decode its table with the embedded key and re-encode it with this
  //    deployment's key, keeping the original function name so call sites work.
  const terserVaultRe =
    /const\s+([A-Za-z_$][\w$]*)=\[((?:"[A-Za-z0-9+/=]*"(?:,)?)+)\],([A-Za-z_$][\w$]*)=Object\.create\(null\);function\s+([A-Za-z_$][\w$]*)\(([A-Za-z_$][\w$]*)\)\{if\(void 0!==\3\[\5\]\)return\s+\3\[\5\];const\s+[A-Za-z_$][\w$]*=atob\(\1\[\5\]\),[A-Za-z_$][\w$]*=new Uint8Array\([A-Za-z_$][\w$]*\.length\);for\(let\s+[A-Za-z_$][\w$]*=0;[A-Za-z_$][\w$]*<[A-Za-z_$][\w$]*\.length;[A-Za-z_$][\w$]*\+\+\)[A-Za-z_$][\w$]*\[[A-Za-z_$][\w$]*\]=[A-Za-z_$][\w$]*\.charCodeAt\([A-Za-z_$][\w$]*\)\^(\d+)\+(\d+)\*[A-Za-z_$][\w$]*&255;const\s+[A-Za-z_$][\w$]*=\(new TextDecoder\)\.decode\([A-Za-z_$][\w$]*\);return\s+\3\[\5\]=[A-Za-z_$][\w$]*,[A-Za-z_$][\w$]*\}/
  const terserVault = code.match(terserVaultRe)
  if (terserVault) {
    try {
      const [fullMatch, arrVar, rawItems, cacheVar, fnVar, , oldK1Str, oldK2Str] = terserVault
      const oldK1 = Number(oldK1Str)
      const oldK2 = Number(oldK2Str)
      const oldVault: string[] = JSON.parse(`[${rawItems}]`)
      const newK1 = 17 + (h1 % 233)
      const newK2 = (5 + (h2 % 243)) | 1
      const rekeyedVault = oldVault.map((b64) => {
        const plain = decodeLegacy(b64, oldK1, oldK2)
        return encodeEdgetunnelPolymorphic(plain, newK1, newK2)
      })
      const tdVar = `_td_${tag}`
      const replacement =
        `const ${arrVar}=${JSON.stringify(rekeyedVault)},${cacheVar}=Object.create(null),${tdVar}=new TextDecoder;` +
        `function ${fnVar}(x){const h=${cacheVar}[x];if(void 0!==h)return h;const b=atob(${arrVar}[x]),l=b.length,u=new Uint8Array(l);` +
        `for(let i=0;i<l;i++)u[i]=b.charCodeAt(i)^(${newK1}+${newK2}*i&255);return ${cacheVar}[x]=${tdVar}.decode(u)};`
      code = code.replace(fullMatch, replacement)
    } catch {}
  }

  // 3. Comments never need to ship.
  code = stripComments(code)

  // 4. Re-key every legacy decoder form onto the sentinel scheme.
  // Named legacy decoders: `解码64`, `解码64_<hex>`, `_d64`, `_d_<hex>`.
  const legacyNames = new Set<string>()
  for (const m of code.matchAll(/function\s+([A-Za-z_$][\w$]*|[\w$\u4e00-\u9fff]*[\u4e00-\u9fff][\w$\u4e00-\u9fff]*)\s*\(/g)) {
    const name = m[1]
    if (/^(?:解码64(?:_[0-9a-f]+)?|_d64|_d_[0-9a-f]+)$/.test(name)) legacyNames.add(name)
  }

  for (const name of legacyNames) {
    const info = findFunction(code, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    if (!info) continue
    const keys = xorKeys(info.body)
    const k1 = keys?.k1 ?? 0
    const k2 = keys?.k2 ?? 0
    const sentinel = /charCodeAt\(0\)/.test(info.body) || /<\s*32/.test(info.body)
    const decode = sentinel
      ? (b64: string) => decodeSentinel(b64)
      : (b64: string) => decodeLegacy(b64, k1, k2)
    const res = replaceEncodedCalls(code, name, decode, decoder)
    code = res.code
    // If a call could not be decoded, its original decoder must stay alive.
    if (res.remaining > 0) continue
    const updated = findFunction(code, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    if (updated) code = removeDecoder(code, updated)
  }

  // 5. Encrypt any plain sensitive/Chinese literal that survived.
  code = encryptPlainSensitiveLiterals(code, decoder)

  // 6. Remaining Chinese text can only be identifiers now.
  const renameMap = new Map<string, string>()
  let seq = 0
  code = code.replace(IDENTIFIER_RE, (name) => {
    if (!renameMap.has(name)) renameMap.set(name, `_u_${tag}_${++seq}`)
    return renameMap.get(name)!
  })

  // 7. Install one ASCII runtime, dropping any older definition first.
  const existing = findFunction(code, new RegExp(decoder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  if (existing) code = removeDecoder(code, existing)
  code = insertAfterImports(code, decoderRuntime(tag))

  // 8. Unique revision binding: same input still produces a different script.
  code += `\nconst _edge_build_${tag} = ${JSON.stringify(seedFingerprint)};\n`

  return code
}
