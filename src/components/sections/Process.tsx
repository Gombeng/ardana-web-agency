"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "Kami mempelajari model bisnis Anda, target audiens, dan kompetitor untuk menentukan arah desain yang tepat.",
    color: "bg-blue-600"
  },
  {
    num: "02",
    title: "UI/UX High-Fidelity",
    desc: "Proses perancangan visual secara mendalam untuk memastikan antarmuka yang cantik dan pengalaman pengguna yang lancar.",
    color: "bg-purple-600"
  },
  {
    num: "03",
    title: "Development & Build",
    desc: "Eksekusi koding menggunakan Next.js dan teknologi terbaru untuk performa website yang sangat kencang.",
    color: "bg-emerald-600"
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "Quality assurance ketat sebelum website diluncurkan secara publik untuk memastikan nol kesalahan (zero-bug).",
    color: "bg-pink-600"
  }
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} id="proses" className="py-24 md:py-48 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 md:mb-32 gap-10">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-[1px] bg-blue-500" />
              The Blueprint
            </h2>
            <p className="text-5xl md:text-8xl font-[950] tracking-tighter text-white leading-[0.9]">Proses <span className="italic text-slate-500">Kreatif</span> Kami</p>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed italic border-l border-white/10 pl-8">
            Setiap pixel memiliki tujuan. Setiap baris kode memiliki strategi.
          </p>
        </div>

        {/* Animated Progress Line */}
        <div className="hidden lg:block absolute left-6 right-6 top-[60%] h-[1px] bg-white/5 -z-10">
          <motion.div 
            style={{ scaleX }}
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 origin-left shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group"
            >
              <div className="text-8xl md:text-[150px] font-black text-white/[0.02] absolute -top-16 md:-top-24 -left-4 group-hover:text-blue-600/5 transition-all duration-1000 italic select-none">
                {step.num}
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                  {step.num}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight uppercase italic group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileInView={{ x: "0%" }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.2, duration: 1 }}
                     className={`absolute inset-0 ${step.color} opacity-50`}
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
