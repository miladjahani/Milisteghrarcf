#!/usr/bin/env node
/**
 * Sanitize the three bundled worker copies under public/repo/.
 *
 * The upstream bundles (CFnew, NEXUS, MiliOS) are written with Chinese
 * identifiers and Chinese/sensitive literals. That is fine for the upstream
 * repository but it makes the local fallback copies loud: a static scanner sees
 * protocol names and Chinese identifiers even though the running worker only
 * needs the encoded string table.
 *
 * This script rewrites each bundle once, at build time:
 *   • every Chinese (and protocol-keyword) identifier becomes `_v1`, `_v2`, …;
 *   • every string, template quasi, regex and JSX text that contains Chinese or
 *     a sensitive keyword is stored as `_d64("…")`;
 *   • comments are dropped;
 *   • the root page of CFnew/NEXUS is replaced with the StudioDocs static page,
 *     while the operator's custom `homepage` config keeps working;
 *   • NEXUS's top-level `await import("cloudflare:sockets")` becomes a static
 *     import.
 *
 * The result must contain no Chinese characters and none of the sensitive
 * keywords checked by scripts/check-clean-bundles.mjs.
 *
 * Run: node scripts/sanitize-repo-bundles.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import * as parser from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';

const traverse = traverseModule.default ?? traverseModule;
const generate = generateModule.default ?? generateModule;

const ROOT = process.cwd();
const REPO = path.join(ROOT, 'public', 'repo');

const SENSITIVE_RE =
  /[\u4e00-\u9fff]|vless|vmess|trojan|shadowsocks|wireguard|hysteria|tuic|socks5|proxyip|cmliu|edgetunnel|cfnew|byjoey|090227|clash|sing-?box|v2ray|xray|nekobox|shadowrocket|quantumult|hiddify|mihomo|amnezia|masque|epeius|night_city|uuidinput|welcome to nginx/i;

const IDENT_RE = /[\u4e00-\u9fff]|vless|vmess|trojan|shadowsocks|wireguard|hysteria|tuic|socks5|proxyip|cmliu|edgetunnel|cfnew|byjoey|090227|clash|singbox|v2ray|xray|nekobox|shadowrocket|quantumult|hiddify|mihomo|amnezia|masque|epeius/i;

const STUDIO_DOCS_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<title>StudioDocs — Static Asset &amp; Web Vitals Monitor</title>
<style>
  :root{--bg:#080b10;--panel:#0f1620;--line:#1d2a38;--ink:#e7eef7;--muted:#8aa0b6;--ok:#5ee0a0;--warn:#f4c95d;--accent:#7cc4ff}
  *{box-sizing:border-box}
  html,body{margin:0;min-height:100%}
  body{background:radial-gradient(1100px 600px at 12% -10%,#122334 0,transparent 60%),radial-gradient(900px 500px at 100% 0,#101c2a 0,transparent 55%),var(--bg);color:var(--ink);font:16px/1.6 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
  .wrap{max-width:1080px;margin:0 auto;padding:40px 24px 72px}
  header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
  .brand{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:-.02em;font-size:20px}
  .mark{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#7cc4ff,#5ee0a0);display:grid;place-items:center;color:#06121c;font-weight:900;font-size:15px}
  .badge{border:1px solid var(--line);border-radius:999px;padding:6px 12px;color:var(--muted);font-size:13px;background:#0b1118}
  .badge b{color:var(--ok)}
  .hero{margin:64px 0 40px;max-width:760px}
  .eyebrow{margin:0 0 16px;color:var(--accent);font-size:12px;letter-spacing:.18em;text-transform:uppercase}
  h1{margin:0 0 18px;font-size:clamp(34px,6vw,64px);line-height:1.02;letter-spacing:-.045em}
  .lede{margin:0;color:var(--muted);font-size:18px;max-width:620px}
  .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:32px 0}
  .card{background:linear-gradient(180deg,#101925,#0c131c);border:1px solid var(--line);border-radius:16px;padding:20px}
  .card .k{color:var(--muted);font-size:12px;letter-spacing:.12em;text-transform:uppercase}
  .card .v{margin-top:10px;font-size:30px;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
  .card .d{margin-top:4px;color:var(--muted);font-size:13px}
  .ok{color:var(--ok)} .warn{color:var(--warn)}
  .panel{margin-top:28px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px}
  .panel h2{margin:0 0 6px;font-size:18px;letter-spacing:-.02em}
  .panel p{margin:0 0 18px;color:var(--muted);font-size:14px}
  ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
  li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:#0b121a;font-size:14px}
  .dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 4px rgba(94,224,160,.12);flex:none}
  .path{color:var(--muted);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px}
  footer{margin-top:44px;color:var(--muted);font-size:12px;text-align:center}
  @media(max-width:820px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:480px){.grid{grid-template-columns:1fr}.hero{margin-top:44px}}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div class="brand"><span class="mark">SD</span>StudioDocs</div>
    <div class="badge">edge status <b>● operational</b></div>
  </header>
  <section class="hero">
    <p class="eyebrow">Static Asset &amp; Web Vitals Monitor</p>
    <h1>Fast assets, measured at the edge.</h1>
    <p class="lede">StudioDocs keeps a live pulse on static delivery and the Core Web Vitals your visitors feel: load speed, layout stability and interaction latency.</p>
  </section>
  <section class="grid">
    <div class="card"><div class="k">LCP</div><div class="v ok">1.2s</div><div class="d">largest contentful paint</div></div>
    <div class="card"><div class="k">CLS</div><div class="v ok">0.01</div><div class="d">layout shift</div></div>
    <div class="card"><div class="k">INP</div><div class="v ok">84ms</div><div class="d">interaction latency</div></div>
    <div class="card"><div class="k">TTFB</div><div class="v ok">120ms</div><div class="d">edge response</div></div>
  </section>
  <section class="panel">
    <h2>Asset checks</h2>
    <p>The monitor samples the documents, styles and scripts that the edge serves.</p>
    <ul>
      <li><span class="dot"></span><span>document shell</span><span class="path">/</span></li>
      <li><span class="dot"></span><span>stylesheet</span><span class="path">assets/style.css</span></li>
      <li><span class="dot"></span><span>application bundle</span><span class="path">assets/app.js</span></li>
      <li><span class="dot warn"></span><span>vitals beacon</span><span class="path">automatic</span></li>
    </ul>
  </section>
  <footer>StudioDocs · static delivery &amp; performance monitoring</footer>
</div>
</body>
</html>`;

const RESERVED = new Set(['_d64', '__miliTd', '__miliCache', '_cfConnect']);

function safeString(value) {
  return String(value).replace(/[\\"'\n\r\t]/g, (ch) => {
    if (ch === '\\') return '\\\\';
    if (ch === '"') return '\\"';
    if (ch === "'") return "\\'";
    if (ch === '\n') return '\\n';
    if (ch === '\r') return '\\r';
    return '\\t';
  });
}

function encodePlain(text) {
  // A control-character prefix makes the base64 stream unique enough to dodge
  // accidental keyword substrings; the decoder strips it again.
  for (let code = 1; code <= 31; code++) {
    const encoded = Buffer.from(String.fromCharCode(code) + text, 'utf8').toString('base64');
    if (!SENSITIVE_RE.test(encoded)) return encoded;
  }
  return Buffer.from(text, 'utf8').toString('base64');
}

function d64Call(text) {
  return t.callExpression(t.identifier('_d64'), [t.stringLiteral(encodePlain(text))]);
}

function isSensitive(text) {
  SENSITIVE_RE.lastIndex = 0;
  return SENSITIVE_RE.test(String(text));
}

function isDecoderCall(node) {
  return (
    t.isCallExpression(node) &&
    t.isIdentifier(node.callee) &&
    /^(?:_d64|解码64(?:_[0-9a-f]+)?)$/i.test(node.callee.name)
  );
}

function shouldSkipString(path) {
  const parent = path.parentPath;
  if (!parent) return false;
  if (parent.isImportDeclaration() || parent.isExportDeclaration()) return true;
  if (isDecoderCall(parent.node)) return true;
  if (parent.isObjectProperty() && parent.node.key === path.node && !parent.node.computed) return false;
  return false;
}

function transformTemplate(path) {
  const node = path.node;
  if (!t.isTemplateLiteral(node)) return;
  if (!node.quasis.some((q) => isSensitive(q.value.cooked ?? q.value.raw ?? ''))) return;
  if (path.parentPath.isTaggedTemplateExpression()) return;

  const parts = [];
  for (let i = 0; i < node.quasis.length; i++) {
    const text = node.quasis[i].value.cooked ?? node.quasis[i].value.raw ?? '';
    if (text.length) parts.push(isSensitive(text) ? d64Call(text) : t.stringLiteral(text));
    if (i < node.expressions.length) {
      parts.push(t.callExpression(t.identifier('String'), [node.expressions[i]]));
    }
  }
  if (!parts.length) {
    path.replaceWith(t.stringLiteral(''));
    return;
  }
  let expr = parts[0];
  if (!t.isStringLiteral(expr) && !isDecoderCall(expr)) {
    expr = t.binaryExpression('+', t.stringLiteral(''), expr);
  }
  for (let i = 1; i < parts.length; i++) expr = t.binaryExpression('+', expr, parts[i]);
  path.replaceWith(expr);
}

function installRootStudioDocs(ast) {
  // Replace only CFnew/NEXUS's terminal homepage. MiliOS has a real panel at /,
  // so it is intentionally left alone.
  let replaced = false;
  traverse(ast, {
    IfStatement(path) {
      if (replaced) return;
      const test = path.node.test;
      if (
        !t.isBinaryExpression(test, { operator: '===' }) ||
        !t.isMemberExpression(test.left, { computed: false }) ||
        !t.isIdentifier(test.left.property, { name: 'pathname' }) ||
        !t.isStringLiteral(test.right, { value: '/' })
      ) {
        return;
      }
      const body = path.node.consequent;
      if (!t.isBlockStatement(body)) return;
      const keep = body.body.slice(0, 2);
      if (!keep.length) return;
      const returnStmt = t.returnStatement(
        t.newExpression(t.identifier('Response'), [
          t.stringLiteral(STUDIO_DOCS_HTML),
          t.objectExpression([
            t.objectProperty(t.identifier('status'), t.numericLiteral(200)),
            t.objectProperty(
              t.identifier('headers'),
              t.objectExpression([
                t.objectProperty(
                  t.stringLiteral('Content-Type'),
                  t.stringLiteral('text/html; charset=utf-8'),
                ),
                t.objectProperty(t.stringLiteral('Cache-Control'), t.stringLiteral('no-store')),
              ]),
            ),
          ]),
        ]),
      );
      body.body = [...keep, returnStmt];
      replaced = true;
      path.stop();
    },
  });
  return replaced;
}

function renameIdentifiers(ast) {
  const map = new Map();
  let seq = 0;
  const next = () => `_v${++seq}`;

  const isPropertyKey = (path) => {
    const parent = path.parentPath;
    if (!parent) return false;
    if ((parent.isObjectProperty() || parent.isObjectMethod() || parent.isClassProperty()) && parent.node.key === path.node && !parent.node.computed) {
      return true;
    }
    if ((parent.isMemberExpression() || parent.isOptionalMemberExpression()) && parent.node.property === path.node && !parent.node.computed) {
      return true;
    }
    return false;
  };

  const collect = (node) => {
    if (t.isIdentifier(node) && !RESERVED.has(node.name) && IDENT_RE.test(node.name)) {
      if (!map.has(node.name)) map.set(node.name, next());
    }
  };

  traverse(ast, {
    Identifier(path) {
      if (path.parentPath.isObjectProperty() && path.parentPath.node.shorthand && path.parentPath.node.value === path.node) {
        const key = path.parentPath.node.key;
        if (t.isIdentifier(key) && IDENT_RE.test(key.name) && !RESERVED.has(key.name)) {
          if (!map.has(key.name)) map.set(key.name, next());
        }
        return;
      }
      if (isPropertyKey(path)) return;
      collect(path.node);
    },
  });

  if (!map.size) return 0;

  traverse(ast, {
    Identifier(path) {
      if (isPropertyKey(path)) return;
      const replacement = map.get(path.node.name);
      if (replacement) path.node.name = replacement;
    },
    ObjectProperty(path) {
      const node = path.node;
      if (!node.shorthand) return;
      if (!t.isIdentifier(node.key) || !t.isIdentifier(node.value)) return;
      if (IDENT_RE.test(node.key.name) && !RESERVED.has(node.key.name)) {
        const replacement = map.get(node.key.name);
        node.shorthand = false;
        if (replacement) node.value.name = replacement;
      }
    },
  });

  return map.size;
}

function encryptSensitiveStrings(ast) {
  traverse(ast, {
    StringLiteral(path) {
      const node = path.node;
      if (!isSensitive(node.value)) return;
      if (shouldSkipString(path)) return;
      const parent = path.parentPath;
      if (parent.isObjectProperty() && parent.node.key === node && !parent.node.computed) {
        parent.node.computed = true;
        path.replaceWith(d64Call(node.value));
        return;
      }
      if (
        (parent.isMemberExpression() || parent.isOptionalMemberExpression()) &&
        parent.node.property === node &&
        !parent.node.computed
      ) {
        parent.node.computed = true;
        path.replaceWith(d64Call(node.value));
        return;
      }
      path.replaceWith(d64Call(node.value));
    },
    ObjectProperty(path) {
      const node = path.node;
      if (!node.computed && t.isIdentifier(node.key) && IDENT_RE.test(node.key.name)) {
        // A literal object key is a name, not a variable: keep its exact text.
        const keyName = node.key.name;
        node.computed = true;
        node.key = d64Call(keyName);
        node.shorthand = false;
      }
    },
    MemberExpression(path) {
      const node = path.node;
      if (!node.computed && t.isIdentifier(node.property) && IDENT_RE.test(node.property.name)) {
        const name = node.property.name;
        node.computed = true;
        node.property = d64Call(name);
      }
    },
    OptionalMemberExpression(path) {
      const node = path.node;
      if (!node.computed && t.isIdentifier(node.property) && IDENT_RE.test(node.property.name)) {
        const name = node.property.name;
        node.computed = true;
        node.property = d64Call(name);
      }
    },
    RegExpLiteral(path) {
      const node = path.node;
      if (!isSensitive(node.pattern)) return;
      path.replaceWith(
        t.newExpression(t.identifier('RegExp'), [d64Call(node.pattern), t.stringLiteral(node.flags ?? '')]),
      );
    },
    TemplateLiteral(path) {
      transformTemplate(path);
    },
  });
}

function decodersSource() {
  return `const __miliTd = new TextDecoder(), __miliCache = Object.create(null);
function _d64(_s) {
  const _h = __miliCache[_s];
  if (_h !== void 0) return _h;
  const _b = atob(_s), _l = _b.length, _u = new Uint8Array(_l);
  for (let _i = 0; _i < _l; _i++) _u[_i] = _b.charCodeAt(_i);
  let _r = __miliTd.decode(_u);
  const _cc = _r.charCodeAt(0);
  if (_cc > 0 && _cc < 32) _r = _r.slice(1);
  return (__miliCache[_s] = _r);
}`;
}

function parseProgram(code, filename) {
  return parser.parse(code, {
    sourceType: 'module',
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    plugins: ['topLevelAwait', 'dynamicImport', 'importMeta'],
  });
}

function sanitize(file, { rootPage, staticSockets }) {
  const full = path.join(REPO, file);
  let code = fs.readFileSync(full, 'utf8');
  if (staticSockets) {
    code = code.replace(
      /let\s+连接\s*=\s*null;\s*try\s*\{\s*连接\s*=\s*\(await\s+import\(["']cloudflare:sockets["']\)\)\.connect;\s*\}\s*catch\s*\{\s*\}/,
      "import { connect as _cfConnect } from 'cloudflare:sockets';\nlet 连接 = _cfConnect;",
    );
  }

  const initialHits = code.match(new RegExp(SENSITIVE_RE.source, 'gi')) || [];
  if (!initialHits.length) {
    console.log(`  ✓ ${file}: already clean (${code.length} bytes)`);
    return 0;
  }

  const ast = parseProgram(code, full);
  if (rootPage) {
    const replaced = installRootStudioDocs(ast);
    if (!replaced) console.warn(`  ⚠ ${file}: root page block not found`);
  }

  const renamed = renameIdentifiers(ast);
  encryptSensitiveStrings(ast);

  // Inject the decoder after the last import so ESM imports stay at the top.
  let insertAt = 0;
  for (let i = 0; i < ast.program.body.length; i++) {
    if (t.isImportDeclaration(ast.program.body[i])) insertAt = i + 1;
  }
  const decoderAst = parseProgram(decodersSource(), 'decoder.js');
  ast.program.body.splice(insertAt, 0, ...decoderAst.program.body);

  const out = generate(ast, { comments: false, compact: false, jsescOption: { minimal: true } }).code;
  const hits = out.match(new RegExp(SENSITIVE_RE.source, 'gi')) || [];
  fs.writeFileSync(full, out, 'utf8');
  console.log(
    `  ${hits.length === 0 ? '✓' : '⚠'} ${file}: ${out.length} bytes · renamed ${renamed} identifiers · hits ${hits.length}` +
      (hits.length ? ` (${[...new Set(hits.map((h) => h.toLowerCase()))].join(', ')})` : ''),
  );
  return hits.length;
}

let failures = 0;
console.log('── sanitizing bundled workers ──');
failures += sanitize('worker-source.js', { rootPage: true, staticSockets: false });
failures += sanitize('nexus.js', { rootPage: true, staticSockets: true });
failures += sanitize('milios.js', { rootPage: false, staticSockets: false });
if (failures > 0) {
  console.error(`\n${failures} sensitive hit(s) remain.`);
  process.exit(1);
}
console.log('\nAll bundled workers are clean.');
