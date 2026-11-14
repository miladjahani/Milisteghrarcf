import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Lightbulb, X, RotateCcw } from 'lucide-react'
import { GUIDE_TEXTS } from '../lib/guideTexts'

// ── Live guide: non-blocking contextual coach-marks ────────────────────────
// Previously this component intercepted clicks in the capture phase and called
// `e.preventDefault(); e.stopPropagation();`, which blocked navigation and
// button actions across the entire UI. Now:
// 1. It defaults to OFF (`localStorage.getItem(LS_ENABLED) === 'on'`).
// 2. Even when turned ON by the user, it NEVER blocks or cancels the click
//    event and NEVER renders a full-screen invisible click-blocking overlay.

const LS_SEEN = 'miliconfig-guide-seen'
const LS_ENABLED = 'miliconfig-guide-enabled'
const memorySeen = new Set<string>()

interface Tip { key: string; title: string; text: string }

interface LiveGuideCtx {
  enabled: boolean
  toggle: () => void
  reset: () => void
  seenCount: number
}

const Ctx = createContext<LiveGuideCtx>({ enabled: false, toggle: () => {}, reset: () => {}, seenCount: 0 })
export const useLiveGuide = () => useContext(Ctx)

function loadSeen(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(LS_SEEN) ?? '[]') as string[]
    if (Array.isArray(parsed)) {
      parsed.forEach((k) => memorySeen.add(k))
    }
  } catch { /* ignore */ }
  return Array.from(memorySeen)
}

export default function LiveGuide({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem(LS_ENABLED) === 'on' } catch { return false }
  })
  const [seenCount, setSeenCount] = useState(() => loadSeen().length)
  const [tip, setTip] = useState<Tip | null>(null)

  useEffect(() => {
    if (!enabled) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null
      const el = target?.closest?.('[data-guide]') as HTMLElement | null
      if (!el) return
      const key = el.getAttribute('data-guide')
      if (!key) return
      const info = GUIDE_TEXTS[key]
      if (!info) return
      const seen = loadSeen()
      if (seen.includes(key)) return

      // Record as seen in both memory and localStorage WITHOUT blocking the click!
      memorySeen.add(key)
      try {
        const next = Array.from(memorySeen)
        localStorage.setItem(LS_SEEN, JSON.stringify(next))
        setSeenCount(next.length)
      } catch {
        setSeenCount(memorySeen.size)
      }

      setTip({ key, title: info.title, text: info.text })
    }
    document.addEventListener('click', handler, { passive: true })
    return () => document.removeEventListener('click', handler)
  }, [enabled])

  useEffect(() => {
    if (!tip) return
    const timer = setTimeout(() => setTip(null), 6500)
    return () => clearTimeout(timer)
  }, [tip])

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      try { localStorage.setItem(LS_ENABLED, next ? 'on' : 'off') } catch { /* ignore */ }
      return next
    })
    setTip(null)
  }, [])

  const reset = useCallback(() => {
    memorySeen.clear()
    try { localStorage.removeItem(LS_SEEN) } catch { /* ignore */ }
    setSeenCount(0)
    setTip(null)
  }, [])

  return (
    <Ctx.Provider value={{ enabled, toggle, reset, seenCount }}>
      {children}
      {tip && (
        <div
          className="fixed bottom-16 left-4 z-[85] w-[min(340px,calc(100vw-32px))] rounded-2xl border backdrop-blur-xl shadow-2xl p-3.5 animate-fade-in"
          style={{
            background: 'var(--t-bg2)',
            borderColor: 'var(--t-line-strong)',
            boxShadow: '0 20px 50px -12px rgba(var(--t-accent-rgb), 0.35)',
          }}
          dir="rtl"
        >
          <div className="flex items-start gap-2.5">
            <div
              className="w-8 h-8 shrink-0 rounded-xl border flex items-center justify-center"
              style={{
                background: 'rgba(var(--t-accent-rgb), 0.16)',
                borderColor: 'var(--t-line-strong)',
              }}
            >
              <Lightbulb className="w-4 h-4" style={{ color: 'var(--t-accent)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold" style={{ color: 'var(--t-text)' }}>{tip.title}</p>
              <p className="text-[11px] leading-5 mt-1 font-medium" style={{ color: 'var(--t-muted)' }}>{tip.text}</p>
            </div>
            <button
              type="button"
              onClick={() => setTip(null)}
              className="p-1 rounded-lg hover:opacity-80 shrink-0"
              style={{ color: 'var(--t-muted)' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {/* Floating control — fully reactive to active theme */}
      <div className="fixed bottom-4 left-4 z-[80] flex items-center gap-1.5">
        <button
          type="button"
          onClick={toggle}
          title={enabled ? 'خاموش کردن راهنمای زنده' : 'روشن کردن راهنمای زنده'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border backdrop-blur-xl shadow-lg transition-all"
          style={
            enabled
              ? {
                  background: 'rgba(var(--t-accent-rgb), 0.18)',
                  borderColor: 'var(--t-line-strong)',
                  color: 'var(--t-accent)',
                  boxShadow: '0 8px 24px -8px rgba(var(--t-accent-rgb), 0.45)',
                }
              : {
                  background: 'var(--t-card)',
                  borderColor: 'var(--t-line)',
                  color: 'var(--t-muted)',
                }
          }
        >
          <Lightbulb className="w-3.5 h-3.5" style={{ color: enabled ? 'var(--t-accent)' : 'var(--t-muted)' }} />
          راهنمای زنده {enabled ? 'روشن' : 'خاموش'}
        </button>
        {seenCount > 0 && (
          <button
            type="button"
            onClick={reset}
            title="تکرار همهٔ راهنماها از ابتدا"
            className="p-1.5 rounded-full border backdrop-blur-xl shadow-lg transition-all hover:scale-105"
            style={{
              background: 'var(--t-card)',
              borderColor: 'var(--t-line-strong)',
              color: 'var(--t-accent)',
            }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </Ctx.Provider>
  )
}
