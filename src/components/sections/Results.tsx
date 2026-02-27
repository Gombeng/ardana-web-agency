"use client"

import { ArrowUpRight, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const results = [
  {
    brand: "BeautySpace",
    niche: "Beauty Clinic",
    uplift: "+189%",
    metric: "Booking Conversion",
    summary: "Redesign funnel + WhatsApp intent flow menghasilkan kenaikan booking dalam 60 hari.",
  },
  {
    brand: "Bayu Travel",
    niche: "Travel",
    uplift: "+2.6x",
    metric: "Lead Qualified",
    summary: "Halaman paket dibuat berbasis intent per destinasi, CTR CTA naik tajam.",
  },
  {
    brand: "EduPrime",
    niche: "EdTech",
    uplift: "-38%",
    metric: "Bounce Rate",
    summary: "Navigasi, copy hierarchy, dan speed optimization menurunkan bounce signifikan.",
  },
]

export default function Results() {
  return (
    <section id="hasil" className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-blue-500 font-black mb-4">Conversion Proof</p>
            <h2 className="text-4xl md:text-6xl font-[900] tracking-tighter text-white leading-[0.95]">
              Estetika yang <span className="text-gradient">Jualan</span>
            </h2>
          </div>
          <p className="max-w-lg text-slate-400 text-base md:text-lg">
            Bukan cuma visual cakep. Semua keputusan desain kami dikunci ke angka: lead rate, booking rate, dan revenue velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {results.map((r, i) => (
            <motion.div
              key={r.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] p-8 md:p-9 border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-black mb-6">{r.niche}</p>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-black text-white">{r.brand}</h3>
                <ArrowUpRight className="text-blue-400" size={18} />
              </div>
              <div className="mb-5">
                <p className="text-4xl font-[950] text-white tracking-tight">{r.uplift}</p>
                <p className="text-sm uppercase tracking-wider text-blue-400 font-bold mt-1 flex items-center gap-2"><TrendingUp size={14} /> {r.metric}</p>
              </div>
              <p className="text-slate-400 leading-relaxed">{r.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
