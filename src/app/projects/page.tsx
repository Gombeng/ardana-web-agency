"use client"

import * as React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Bayu Travel",
    category: "Travel & Tourism",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
    link: "https://bayu-travel.vercel.app/",
    description: "Website booking travel antar kota Sumatra dengan performa tinggi."
  },
  {
    title: "Moregan Barbershop",
    category: "Lifestyle / Grooming",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
    link: "https://moregan-barbershop.vercel.app/",
    description: "Landing page premium untuk barbershop kelas atas di Jakarta."
  },
  {
    title: "Klinik Pratama Theta",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d670db?q=80&w=1000&auto=format&fit=crop",
    link: "https://klinik-pratama-theta.vercel.app/",
    description: "Sistem informasi dan booking klinik dengan desain modern."
  },
  {
    title: "Griya Bangun Persada",
    category: "Architecture / Construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    link: "https://griya-bangun-persada.vercel.app/",
    description: "Portfolio digital untuk jasa kontraktor dan renovasi rumah."
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      <section className="pt-48 pb-20 px-6 max-w-[1400px] mx-auto text-center">
        <Badge className="bg-blue-600/10 text-blue-500 border-blue-600/20 px-4 py-2 rounded-full font-black uppercase tracking-widest text-[10px] mb-8">
          Our Craft
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Selected <br/><span className="text-blue-600">Works.</span></h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          Kumpulan hasil karya digital kami yang mengedepankan estetika tinggi dan performa tanpa kompromi.
        </p>
      </section>

      <section className="pb-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-[3.5rem] overflow-hidden bg-[#111] border border-white/5 shadow-2xl transition-all duration-700 hover:border-blue-600/30">
               <div className="aspect-video overflow-hidden">
                 <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                 />
               </div>
               <div className="p-10 lg:p-14">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">{p.category}</p>
                      <h2 className="text-3xl font-black tracking-tighter">{p.title}</h2>
                    </div>
                    <a href={p.link} target="_blank" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                      <ExternalLink size={20} />
                    </a>
                 </div>
                 <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                   {p.description}
                 </p>
                 <Button variant="link" className="p-0 h-auto text-white font-black uppercase tracking-widest text-xs group-hover:text-blue-500 transition-colors">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </Button>
               </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
