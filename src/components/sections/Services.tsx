"use client"

import { Code, Search, Rocket, Smartphone, Shield, Zap, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Performance Web",
    desc: "Next.js 16 & React 19 architecture for lightning speed.",
    icon: Zap,
    color: "bg-blue-600",
    size: "col-span-1 lg:col-span-2",
  },
  {
    title: "Premium UI/UX",
    desc: "Luxury design systems for elite brands.",
    icon: Code,
    color: "bg-purple-600",
    size: "col-span-1",
  },
  {
    title: "AI Integration",
    desc: "Custom LLMs & generative UI solutions.",
    icon: Rocket,
    color: "bg-emerald-500",
    size: "col-span-1",
  },
  {
    title: "Mobile Native",
    desc: "Fluid cross-platform experiences.",
    icon: Smartphone,
    color: "bg-orange-500",
    size: "col-span-1 lg:col-span-2",
  },
]

export default function Services() {
  return (
    <section id="layanan" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] mb-4"
          >
            Core Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-[900] text-white tracking-tighter"
          >
            Digital <span className="text-gradient">Superpowers.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${s.size} group relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors cursor-pointer`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white" size={32} />
              </div>
              
              <div className={`w-14 h-14 ${s.color} rounded-2xl mb-8 flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110`}>
                <s.icon size={28} />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">{s.title}</h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium max-w-xs">{s.desc}</p>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
