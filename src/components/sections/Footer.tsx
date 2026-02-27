"use client"

import { Laptop, Instagram, Linkedin, MessageCircle, ArrowUpRight, Globe, Zap, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1400px] mx-auto">
        {/* Massive Call to Action */}
        <div className="mb-32 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-12">
           <h2 className="text-4xl md:text-7xl font-[950] text-white tracking-[-0.04em] leading-[0.9] max-w-2xl">
              Siap Menjadi <br /> <span className="text-gradient">Leader Masa Depan?</span>
           </h2>
           <motion.a 
              href="https://wa.me/6282285598500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-24 w-24 md:h-32 md:w-32 bg-blue-600 rounded-full flex items-center justify-center text-white transition-shadow hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] group"
           >
              <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
           </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-32">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Laptop size={24} strokeWidth={3} />
              </div>
              <span className="text-3xl font-[950] tracking-tighter text-white uppercase italic">Ardana</span>
            </div>
            <p className="text-slate-500 text-xl font-medium max-w-md leading-relaxed">
              Ardana adalah agensi digital next-gen yang menggabungkan AI, desain imersif, dan data untuk mendominasi pasar 2026.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
                { icon: MessageCircle, href: "#", color: "hover:bg-green-600" }
              ].map((item, i) => (
                <a key={i} href={item.href} className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white ${item.color} hover:border-transparent transition-all duration-500 group`}>
                  <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Strategic Services</h4>
            <ul className="space-y-6">
              {[
                { name: "Spatial Design", icon: <Globe size={12} /> },
                { name: "AI Integration", icon: <Zap size={12} /> },
                { name: "Performance Web", icon: <Laptop size={12} /> },
                { name: "Growth Hacking", icon: <ArrowUpRight size={12} /> }
              ].map(item => (
                <li key={item.name}>
                  <Link href="#" className="text-slate-400 font-bold uppercase tracking-wider text-[12px] hover:text-white flex items-center group transition-colors">
                    <span className="mr-3 opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Direct Contact</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-wider text-[12px]">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Globe size={14} />
                </div>
                Jakarta, Indonesia
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Mail size={14} />
                </div>
                <a href="mailto:syahrizalardana@gmail.com" className="hover:text-white transition-colors">syahrizalardana@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Phone size={14} />
                </div>
                <a href="https://wa.me/6282285598500" className="hover:text-white transition-colors">+62 822-8559-8500</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 Ardana Digital Group. Engineered for the Future.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">AI Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
