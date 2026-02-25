"use client"

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "Kami mempelajari model bisnis Anda, target audiens, dan kompetitor untuk menentukan arah desain yang tepat."
  },
  {
    num: "02",
    title: "UI/UX High-Fidelity",
    desc: "Proses perancangan visual secara mendalam untuk memastikan antarmuka yang cantik dan pengalaman pengguna yang lancar."
  },
  {
    num: "03",
    title: "Development & Build",
    desc: "Eksekusi koding menggunakan Next.js dan teknologi terbaru untuk performa website yang sangat kencang."
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "Quality assurance ketat sebelum website diluncurkan secara publik untuk memastikan nol kesalahan (zero-bug)."
  }
]

export default function Process() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Our Workflow</h2>
          <p className="text-5xl md:text-6xl font-[900] tracking-tighter text-white">Bagaimana Kami Bekerja</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-white/[0.03] absolute -top-12 -left-4 group-hover:text-blue-600/10 transition-colors duration-500 italic">
                {step.num}
              </div>
              <div className="relative z-10 space-y-6">
                <div className="h-[2px] w-12 bg-blue-600 rounded-full mb-8 group-hover:w-full transition-all duration-700" />
                <h3 className="text-2xl font-black text-white tracking-tight leading-tight">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
