import { Code, Search, Rocket, Smartphone, Shield, Zap } from "lucide-react"

const services = [
  {
    title: "High-Performance Web",
    desc: "Kami membangun website berbasis Next.js & React yang super kencang, SEO-friendly, dan siap skala besar.",
    icon: Zap,
    color: "bg-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Premium UI/UX Design",
    desc: "Desain eksklusif yang memanjakan mata dan intuitif, dirancang khusus untuk meningkatkan konversi bisnis Anda.",
    icon: Code,
    color: "bg-purple-600",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "SEO & Digital Growth",
    desc: "Strategi optimasi mesin pencari dan manajemen iklan (Ads) untuk mendatangkan traffic berkualitas secara konsisten.",
    icon: Search,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Mobile App Solution",
    desc: "Pengembangan aplikasi iOS & Android dengan performa native yang smooth dan fitur kustom sesuai kebutuhan.",
    icon: Smartphone,
    color: "bg-orange-500",
    shadow: "shadow-orange-500/20"
  },
  {
    title: "Enterprise Security",
    desc: "Perlindungan data tingkat tinggi dan pemeliharaan sistem rutin untuk memastikan bisnis Anda berjalan tanpa gangguan.",
    icon: Shield,
    color: "bg-red-500",
    shadow: "shadow-red-500/20"
  },
  {
    title: "Digital Marketing Ads",
    desc: "Manajemen kampanye Meta Ads, Google Ads, dan TikTok Ads dengan ROI yang terukur dan transparan.",
    icon: Rocket,
    color: "bg-indigo-600",
    shadow: "shadow-indigo-500/20"
  }
]

export default function Services() {
  return (
    <section id="layanan" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.4em]">Expertise & Services</h2>
            <p className="text-4xl sm:text-5xl md:text-7xl font-[900] tracking-tighter text-white leading-[1.1] md:leading-[0.9]">Solusi Digital <br className="hidden md:block" /> Tanpa Kompromi.</p>
          </div>
          <p className="text-slate-400 max-w-sm text-base md:text-lg font-medium leading-relaxed lg:border-l lg:border-white/10 lg:pl-8">
            Kami menggabungkan seni desain dan kehebatan teknologi untuk menciptakan produk digital yang impactful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-[#111] hover:bg-[#151515] transition-all duration-500 border border-white/5 hover:border-blue-600/30 cursor-pointer">
              <div className={`w-14 h-14 md:w-16 md:h-16 ${s.color} rounded-xl md:rounded-2xl mb-6 md:mb-8 flex items-center justify-center text-white shadow-2xl ${s.shadow} group-hover:scale-110 transition-transform duration-500`}>
                <s.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-white tracking-tight">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
