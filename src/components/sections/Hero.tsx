"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, ShieldCheck, Gauge, MessageCircle } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative pt-30 md:pt-44 pb-14 md:pb-24 px-6 overflow-hidden grainy-bg">
      <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-600/12 rounded-full blur-[130px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-indigo-600/12 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 p-1 pr-4 rounded-full glass border-white/10 text-blue-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-7">
              <span className="bg-blue-500 rounded-full p-1.5 text-white"><Sparkles size={14} /></span>
              Conversion-First Web Agency
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-[950] leading-[0.9] tracking-[-0.06em] text-white max-w-5xl">
              Website Estetik
              <br />
              <span className="text-gradient">yang Bikin Closing</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-7 text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Kami gabungkan visual kelas global + CRO framework biar traffic bukan cuma numpang lewat, tapi berubah jadi lead dan penjualan.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <Button asChild className="h-16 w-full sm:w-auto px-9 bg-white text-black hover:bg-blue-500 hover:text-white rounded-full text-base font-black transition-all duration-500 active:scale-95 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                <a href="https://wa.me/6282285598500?text=Halo%20Ardana,%20saya%20mau%20audit%20website%20gratis" target="_blank">
                  Claim Audit Gratis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>

              <a href="#hasil" className="h-16 px-7 rounded-full border border-white/20 text-white hover:border-blue-500/50 hover:text-blue-300 transition-all inline-flex items-center gap-3 font-bold">
                <Play className="fill-white" size={16} /> Lihat Hasil Klien
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-4 grid gap-4">
            {[
              { icon: Gauge, title: "Load &lt; 2s", desc: "Optimized for speed & SEO" },
              { icon: ShieldCheck, title: "Funnel Framework", desc: "Structure untuk ningkatin lead" },
              { icon: MessageCircle, title: "WhatsApp Native", desc: "CTA langsung ke chat closing" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-3xl p-6 border-white/10">
                <item.icon size={18} className="text-blue-400 mb-3" />
                <p className="text-white text-xl font-black tracking-tight">{item.title}</p>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
