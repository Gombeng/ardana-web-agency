"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Owner of Bayu Travel",
    msg: "Gak nyesel pilih Ardana Digital. Websitenya kenceng banget di HP, customer saya jadi gampang booking rute. Sangat profesional!",
    avatar: "https://i.pravatar.cc/150?u=andi"
  },
  {
    name: "Sekar Syafira",
    role: "CEO of BeautySpace",
    msg: "Visualnya bener-bener mewah, jauh di atas agensi lain yang pernah saya coba. Branding bisnis saya jadi naik kelas dalam semalam.",
    avatar: "https://i.pravatar.cc/150?u=sekar"
  },
  {
    name: "Budi Santoso",
    role: "Operational Manager",
    msg: "Alur kerja yang jelas dan komunikasi tim yang baik. Website kami selesai lebih cepat dari jadwal. Recommended banget!",
    avatar: "https://i.pravatar.cc/150?u=budi"
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Client Satisfaction</h2>
          <p className="text-5xl md:text-6xl font-[900] tracking-tighter text-white">Apa Kata Mereka?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-[3.5rem] bg-[#111] border border-white/5 relative group hover:border-blue-600/30 transition-all duration-500 flex flex-col h-full">
              <Quote className="text-blue-600/20 absolute top-10 right-10 group-hover:text-blue-600/50 transition-colors duration-500" size={60} />
              <p className="text-xl font-medium text-slate-300 leading-relaxed italic mb-10 flex-grow">
                "{t.msg}"
              </p>
              <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
                <Avatar className="h-14 w-14 border-2 border-blue-600/20 shadow-lg">
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-white font-black uppercase tracking-tight">{t.name}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
