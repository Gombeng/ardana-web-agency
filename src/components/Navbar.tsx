"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-[1400px] mx-auto bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Laptop size={22} strokeWidth={3} />
          </div>
          <span className="text-2xl font-[900] tracking-tighter text-slate-900 uppercase">Ardana</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {["Layanan", "Harga", "Klien", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[14px] font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden sm:inline-flex font-bold text-slate-900">
            Login
          </Button>
          <Button className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-6 rounded-full shadow-xl transition-all active:scale-95 uppercase tracking-widest text-xs">
            Konsultasi
          </Button>
        </div>
      </div>
    </header>
  )
}
