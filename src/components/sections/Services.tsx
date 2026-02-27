"use client"

import { Code, Rocket, Smartphone, Zap, ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, MouseEvent } from "react"

const services = [
  {
    title: "Performance Architecture",
    desc: "Next.js 16 & React 19 core for sub-second speeds and SEO dominance.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    size: "md:col-span-2 lg:col-span-2",
    tag: "Next-Gen Stack"
  },
  {
    title: "Spatial UI/UX",
    desc: "Immersive 3D interfaces designed for the 2026 spatial web.",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    size: "md:col-span-1 lg:col-span-1",
    tag: "Design System"
  },
  {
    title: "Generative AI Agent",
    desc: "Seamlessly integrate custom AI agents that drive conversions 24/7.",
    icon: Cpu,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    size: "md:col-span-1 lg:col-span-1",
    tag: "AI First"
  },
  {
    title: "Brand Alchemy",
    desc: "Visual storytelling that turns users into loyal brand advocates.",
    icon: Sparkles,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    size: "md:col-span-2 lg:col-span-2",
    tag: "Creative"
  },
]

function ServiceCard({ s, i }: { s: typeof services[0], i: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${s.size} group relative p-10 md:p-14 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-blue-500/20 transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[450px] shadow-2xl`}
    >
      <div className="relative z-20" style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-start mb-12">
          <div className={`w-16 h-16 ${s.bg} rounded-3xl flex items-center justify-center ${s.color} transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
            <s.icon size={32} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 border border-white/5 px-4 py-2 rounded-full group-hover:text-white group-hover:border-white/20 transition-colors bg-white/5">
            {s.tag}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tighter leading-tight group-hover:text-blue-400 transition-colors italic uppercase">{s.title}</h3>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-md">{s.desc}</p>
      </div>

      <div className="relative z-20 mt-12 flex items-center gap-4 text-white font-bold group-hover:translate-x-2 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
        <span className="text-sm uppercase tracking-widest font-black">Mulai Discovery</span>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:to-blue-600/5 transition-all duration-700" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/0 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />
      
      {/* Interactive Spotlight */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 40%)`
          )
        }}
      />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="layanan" className="py-24 md:py-48 bg-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-24 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24 md:mb-32">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-blue-500 font-black uppercase tracking-[0.4em] text-[11px]"
            >
              <div className="h-[2px] w-16 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[120px] font-[950] text-white tracking-[-0.07em] leading-[0.85]"
            >
              Weaponize <br /> <span className="text-gradient italic">Your Brand.</span>
            </motion.h2>
          </div>
          <div className="space-y-8 lg:text-right">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-slate-400 font-medium max-w-xl lg:ml-auto leading-tight tracking-tight"
            >
              Kami menghentikan scroll, memicu rasa ingin tahu, dan mengubah visitor menjadi profit dengan desain yang melampaui standar industri.
            </motion.p>
            <div className="flex lg:justify-end gap-12">
               <div>
                  <div className="text-white font-black text-2xl md:text-3xl">99.9%</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Uptime Design</div>
               </div>
               <div>
                  <div className="text-white font-black text-2xl md:text-3xl">24/7</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">AI Support</div>
               </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
