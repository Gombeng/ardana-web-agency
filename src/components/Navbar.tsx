"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop, Menu, ChevronRight, User } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-[1400px] mx-auto rounded-full flex items-center justify-between px-6 md:px-10 py-3 md:py-4 transition-all duration-700 ${
          scrolled 
            ? "glass shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-95 md:scale-100" 
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-xl group-hover:rotate-12 transition-transform">
            <Laptop size={20} strokeWidth={3} />
          </div>
          <span className="text-xl md:text-2xl font-[900] tracking-tighter text-white uppercase italic">Ardana</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-12">
          {["Layanan", "Harga", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Portfolio" ? "/projects" : `/#${item.toLowerCase()}`}
              className="text-[10px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.4em] relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            <User size={14} /> Login
          </Link>
          <Button asChild className="bg-blue-600 hover:bg-white hover:text-black text-white font-black px-6 md:px-10 py-5 md:py-7 rounded-full shadow-2xl transition-all active:scale-95 uppercase tracking-widest text-[10px]">
            <a href="https://wa.me/6282285598500" target="_blank">
              Start Project <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
          
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-[#0A0A0A]/95 backdrop-blur-3xl border-white/5 text-white p-10 h-screen flex flex-col justify-center items-center">
                <nav className="flex flex-col items-center space-y-10">
                   {["Layanan", "Harga", "Portfolio", "Blog", "Dashboard"].map((item) => (
                    <Link
                      key={item}
                      href={item === "Dashboard" ? "/dashboard" : item === "Portfolio" ? "/projects" : `/#${item.toLowerCase()}`}
                      className="text-4xl font-[900] uppercase tracking-tighter hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
