"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop, Menu, ChevronRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 transition-all duration-500">
      <div 
        className={`max-w-[1400px] mx-auto transition-all duration-500 rounded-[2rem] md:rounded-3xl flex items-center justify-between px-6 py-3 md:py-4 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-[0.98] md:scale-100" 
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-all">
            <Laptop size={20} strokeWidth={3} />
          </div>
          <span className="text-xl md:text-2xl font-[900] tracking-tighter text-white uppercase italic">Ardana</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          {["Layanan", "Harga", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Portfolio" ? "/projects" : `/#${item.toLowerCase()}`}
              className="text-[11px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em] hover:tracking-[0.4em]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hidden sm:inline-flex text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors mr-2">
            Login
          </Link>
          <Button asChild className="bg-blue-600 hover:bg-white hover:text-black text-white font-black px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-widest text-[10px]">
            <a href="https://wa.me/6282285598500" target="_blank">
              Konsultasi <ChevronRight className="ml-2 w-4 h-4 hidden md:block" />
            </a>
          </Button>
          
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-[#0A0A0A]/95 backdrop-blur-2xl border-white/5 text-white p-10 h-auto rounded-b-[3rem]">
                <nav className="flex flex-col items-center space-y-8 my-10">
                   {["Layanan", "Harga", "Portfolio", "Blog", "Dashboard"].map((item) => (
                    <Link
                      key={item}
                      href={item === "Dashboard" ? "/dashboard" : item === "Portfolio" ? "/projects" : `/#${item.toLowerCase()}`}
                      className="text-2xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
