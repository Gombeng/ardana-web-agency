"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "900rb",
    features: ["Personal Portfolio", "Single Page Design", "Domain & Hosting 1 Thn", "Standard SEO", "Integrasi WhatsApp"],
    label: "Lite",
    desc: "Cocok untuk individu yang ingin pamer karya atau CV digital."
  },
  {
    name: "Business",
    price: "1.8jt",
    features: ["Company Profile", "5-7 Pages Design", "Domain & Hosting 1 Thn", "Advance SEO Strategy", "Google Maps Sync"],
    label: "Growth",
    desc: "Cocok untuk UMKM yang butuh identitas digital resmi."
  },
  {
    name: "Premium",
    price: "3.5jt",
    features: ["Advanced Landing Page", "Dynamic CMS (Bisa Edit Sendiri)", "Next.js High Speed", "Analitik Penjualan", "Support Prioritas 6 Bln"],
    label: "Professional",
    popular: true,
    desc: "Solusi lengkap untuk konversi penjualan tinggi."
  },
  {
    name: "Enterprise",
    price: "7jt+",
    features: ["Custom Web Application", "Full UI/UX Custom Figma", "Keamanan Tingkat Tinggi", "Multilingual Support", "Maintenance Selamanya"],
    label: "Elite",
    desc: "Untuk perusahaan besar dengan kebutuhan fitur kustom."
  }
]

export default function Pricing() {
  return (
    <section id="harga" className="py-24 md:py-32 px-6 bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-10 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.4em]">Strategic Pricing</h2>
            <p className="text-4xl sm:text-5xl md:text-7xl font-[900] tracking-tighter leading-[1.1] md:leading-[0.9]">Paket Investasi <br className="hidden md:block" /> Digital Anda</p>
          </div>
          <p className="text-slate-500 max-w-sm text-base md:text-lg font-medium leading-relaxed italic border-l border-white/5 pl-8">
            Harga kompetitif dengan kualitas desain agensi global.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 flex flex-col relative group ${
                t.popular 
                  ? "bg-blue-600 border-blue-500 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)] md:scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black tracking-widest shadow-xl whitespace-nowrap">
                  BEST SELLER
                </div>
              )}
              
              <div className="mb-6 md:mb-8">
                <span className={`font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] ${t.popular ? "text-blue-100" : "text-blue-400"}`}>
                  {t.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-[900] mt-1 md:mt-2 tracking-tighter uppercase italic">{t.name}</h3>
                <p className={`text-[11px] mt-4 leading-relaxed font-medium ${t.popular ? "text-blue-100/70" : "text-slate-500"}`}>
                  {t.desc}
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-8 md:mb-10 pt-4 border-t border-white/5">
                <span className="text-4xl md:text-5xl font-[900]">Rp {t.price}</span>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow text-left">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 md:gap-4 text-[13px] md:text-[14px] font-medium opacity-80">
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center shrink-0 ${t.popular ? "bg-white/20" : "bg-blue-600/20"}`}>
                      <Check size={12} className={t.popular ? "text-white" : "text-blue-400"} strokeWidth={4} />
                    </div>
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full h-14 md:h-16 rounded-xl md:rounded-2xl text-base md:text-lg font-black transition-all active:scale-95 ${
                t.popular 
                  ? "bg-white text-blue-600 hover:bg-slate-100" 
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20"
              }`}>
                <a href={`https://wa.me/6282285598500?text=Halo%20Ardana%20Digital,%20saya%20tertarik%20dengan%20paket%20${t.name}`} target="_blank">Pilih Paket</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
