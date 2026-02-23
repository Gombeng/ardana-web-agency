import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Silver",
    price: "700rb",
    features: ["Landing Page Sederhana", "Domain & Hosting 1 Thn", "Mobile Responsive", "Integrasi WhatsApp"],
    label: "Starter"
  },
  {
    name: "Gold",
    price: "1.6jt",
    features: ["Semua Fitur Silver", "E-Commerce / Blog", "Kelola Produk/Artikel", "Email Bisnis (5 Akun)"],
    label: "Growth"
  },
  {
    name: "Diamond",
    price: "2jt",
    features: ["Semua Fitur Gold", "Business Profile Pro", "Galeri Proyek & Testimoni", "Keamanan SSL Premium"],
    label: "Corporate",
    popular: true
  },
  {
    name: "Platinum",
    price: "3jt",
    features: ["Custom Fitur Kompleks", "Desain Unik (Figma)", "SEO + Speed Optm", "Support Prioritas 24/7"],
    label: "Exclusive"
  }
]

export default function Pricing() {
  return (
    <section id="harga" className="py-32 px-6 bg-slate-950 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-6">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em]">Future Investment</h2>
            <p className="text-6xl md:text-7xl font-[900] tracking-tighter leading-[0.9]">Pilih Paket <br /> Kemenangan Anda</p>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
            Investasi cerdas untuk digitalisasi bisnis Anda dengan standar tertinggi di Jakarta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[3rem] border transition-all duration-500 flex flex-col relative group ${
                t.popular 
                  ? "bg-blue-600 border-blue-500 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)] scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-[11px] font-black tracking-widest shadow-xl">
                  BEST SELLER
                </div>
              )}
              
              <div className="mb-10">
                <span className={`font-black uppercase tracking-[0.2em] text-[10px] ${t.popular ? "text-blue-100" : "text-blue-400"}`}>
                  {t.label}
                </span>
                <h3 className="text-4xl font-[900] mt-2 tracking-tighter">{t.name}</h3>
              </div>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl font-[900]">Rp {t.price}</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-[15px] font-medium opacity-80">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${t.popular ? "bg-white/20" : "bg-blue-600/20"}`}>
                      <Check size={14} className={t.popular ? "text-white" : "text-blue-400"} strokeWidth={4} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button className={`w-full h-16 rounded-2xl text-lg font-black transition-all ${
                t.popular 
                  ? "bg-white text-blue-600 hover:bg-slate-100" 
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20"
              }`}>
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
