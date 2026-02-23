import { Code, Search, Rocket, Smartphone } from "lucide-react"

const services = [
  {
    title: "Web Development",
    desc: "Website kustom performa tinggi dengan teknologi terbaru (Next.js, React).",
    icon: Code,
    color: "bg-blue-600",
    shadow: "shadow-blue-100"
  },
  {
    title: "SEO Strategy",
    desc: "Optimasi mesin pencari untuk menaikkan peringkat bisnis Anda secara organik.",
    icon: Search,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-100"
  },
  {
    title: "Digital Marketing",
    desc: "Iklan Facebook, Instagram, dan Google Ads dengan konversi tinggi.",
    icon: Rocket,
    color: "bg-purple-600",
    shadow: "shadow-purple-100"
  },
  {
    title: "Mobile Apps",
    desc: "Pengembangan aplikasi iOS & Android yang smooth dan user-friendly.",
    icon: Smartphone,
    color: "bg-orange-500",
    shadow: "shadow-orange-100"
  }
]

export default function Services() {
  return (
    <section id="layanan" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sm font-[900] text-blue-600 uppercase tracking-[0.4em]">What We Excel At</h2>
          <p className="text-5xl md:text-6xl font-[900] tracking-tighter text-slate-900">Solusi Digital Tanpa Kompromi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <div key={i} className="group p-12 rounded-[3.5rem] bg-slate-50 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 hover:border-transparent cursor-pointer">
              <div className={`w-20 h-20 ${s.color} rounded-[2rem] mb-10 flex items-center justify-center text-white shadow-2xl ${s.shadow} group-hover:scale-110 transition-transform`}>
                <s.icon size={36} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-[900] mb-6 text-slate-900 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
