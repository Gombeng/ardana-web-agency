"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div className="space-y-8 md:space-y-10 text-center lg:text-left">
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <Badge variant="outline" className="px-5 py-2 rounded-full glass border-white/10 text-blue-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] flex items-center gap-2">
              <Sparkles size={12} className="text-blue-500 animate-spin-slow" />
              Top Digital Agency 2026
            </Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl xl:text-[100px] font-[900] leading-[1.05] lg:leading-[0.9] tracking-[-0.06em] text-white">
            Ubah Bisnis <br className="hidden md:block" /> Jadi <span className="text-gradient">Digital</span> <br className="hidden md:block" /> Masa Depan.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Ardana menggabungkan AI canggih dan desain kelas dunia untuk menciptakan ekosistem digital yang tidak hanya cantik, tapi juga mencetak rekor ROI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
            <Button asChild className="h-16 md:h-20 w-full sm:w-auto px-8 md:px-12 bg-white text-black hover:bg-slate-200 rounded-2xl md:rounded-full text-lg md:text-xl font-[800] transition-all active:scale-95 group relative overflow-hidden">
              <a href="https://wa.me/6282285598500" target="_blank">
                Mulai Project <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <button className="flex items-center space-x-4 group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all shadow-xl">
                <Play className="fill-white ml-1 text-white" size={20} />
              </div>
              <span className="font-bold text-base md:text-lg text-white">Tonton Demo</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 pt-10 border-t border-white/10">
            {[
              { val: "500+", label: "Proyek Global" },
              { val: "99.9%", label: "Kepuasan Klien" },
              { val: "25+", label: "Award Won" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl md:text-4xl font-[900] tracking-tight text-white">{stat.val}</div>
                <div className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative mt-12 lg:mt-0"
        >
          {/* Main Visual */}
          <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] aspect-[4/5] bg-[#111] border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Ardana Dashboard" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          </div>

          {/* Floating Card 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-12 md:-right-8 glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-20 border border-white/10 hidden sm:block"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                <Sparkles size={24} />
             </div>
             <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">AI Performance</div>
             <div className="text-2xl md:text-3xl font-[900] text-white">+145%</div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-12 glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl z-20 border border-white/20 hidden sm:block"
          >
             <div className="flex -space-x-3 md:-space-x-4 mb-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111]" src={`https://i.pravatar.cc/100?u=${i+20}`} alt="avatar" />
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111] bg-white text-black flex items-center justify-center font-bold text-[10px]">+24</div>
             </div>
             <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Global Designers</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
