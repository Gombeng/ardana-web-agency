"use client"

import { MessageCircle, Rocket } from "lucide-react"

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md md:hidden">
      <a
        href="https://wa.me/6282285598500?text=Halo%20Ardana,%20saya%20mau%20audit%20website%20gratis"
        target="_blank"
        className="flex items-center justify-between rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl px-4 py-3 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <MessageCircle size={18} />
          </div>
          <div>
            <p className="text-sm text-white font-black">Claim Audit Gratis</p>
            <p className="text-[11px] text-slate-400">Respon rata-rata &lt; 10 menit</p>
          </div>
        </div>
        <div className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
          <Rocket size={16} />
        </div>
      </a>
    </div>
  )
}
