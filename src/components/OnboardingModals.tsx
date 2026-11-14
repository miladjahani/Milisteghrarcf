import { useEffect, useState } from 'react'
import { Rocket, KeyRound, Sparkles, X } from 'lucide-react'

const ONBOARD_STORAGE_KEY = 'mcf-onboard-dismissed-v2'
let dismissedInMemory = false

export default function OnboardingModals() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (dismissedInMemory) return
    try {
      if (localStorage.getItem(ONBOARD_STORAGE_KEY) === '1' || sessionStorage.getItem(ONBOARD_STORAGE_KEY) === '1') {
        dismissedInMemory = true
        return
      }
      // Mark dismissed immediately so it never re-triggers
      dismissedInMemory = true
      localStorage.setItem(ONBOARD_STORAGE_KEY, '1')
      sessionStorage.setItem(ONBOARD_STORAGE_KEY, '1')
    } catch {
      dismissedInMemory = true
    }
  }, [])

  const close = () => {
    dismissedInMemory = true
    try {
      localStorage.setItem(ONBOARD_STORAGE_KEY, '1')
      sessionStorage.setItem(ONBOARD_STORAGE_KEY, '1')
    } catch { /* ignore */ }
    setOpen(false)
  }

  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-4"
      dir="rtl"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-brand-400/35 bg-slate-900/95 p-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-white"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-11 h-11 rounded-2xl bg-brand-500/15 border border-brand-400/40 flex items-center justify-center mb-3">
          <Rocket className="w-5 h-5 text-brand-300" />
        </div>
        <h2 className="text-lg font-bold text-white mb-1">سه قدم تا اولین استقرار</h2>
        <p className="text-xs text-slate-400 mb-4">این مسیر را در یک دقیقه طی کنید:</p>
        <ol className="space-y-2.5 mb-5">
          {[
            { icon: KeyRound, t: 'توکن Cloudflare را اضافه کنید', d: 'از تب «توکن‌ها» توکن خود را ثبت کنید تا استقرار خودکار روی حساب شما انجام شود.' },
            { icon: Rocket, t: '«استقرار جدید» را باز کنید', d: 'منبع ورکر (MiliOS، CFnew، NEXUS و…) را انتخاب کنید.' },
            { icon: Sparkles, t: 'لینک پنل و ساب را بگیرید', d: 'بعد از استقرار، لینک پنل و اشتراک فوری در تب «ورکرها و پنل» آماده است.' },
          ].map((s, i) => (
            <li key={i} className="flex gap-3 p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="w-6 h-6 rounded-lg bg-brand-500/15 border border-brand-400/30 flex items-center justify-center shrink-0 text-brand-300 font-bold text-xs">
                {String(i + 1).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])}
              </span>
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <s.icon className="w-3.5 h-3.5 text-brand-300" />{s.t}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <button type="button" onClick={close} className="btn-primary w-full text-xs py-2.5">
          شروع کنید
        </button>
      </div>
    </div>
  )
}
