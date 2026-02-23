"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop, Menu, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-[1400px] mx-auto bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Laptop size={22} strokeWidth={3} />
          </div>
          <span className="text-2xl font-[900] tracking-tighter text-white uppercase">Ardana</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          {["Layanan", "Harga", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Portfolio" ? "/projects" : `/#${item.toLowerCase()}`}
              className="text-[13px] font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hidden sm:inline-flex text-sm font-bold text-slate-300 hover:text-white mr-4">
            Dashboard
          </Link>
          <Button className="bg-white hover:bg-blue-600 text-black hover:text-white font-black px-8 py-6 rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-widest text-[11px]">
            Konsultasi
          </Button>
          
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A0A0A] border-white/5 text-white p-10">
                <nav className="flex flex-col space-y-8 mt-10">
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
