"use client"

import { motion } from "framer-motion"

const logos = ["KopiRasa", "SewaTrip", "SkinMuse", "PropertyGo", "EduPrime", "Finloop"]

export default function TrustedBy() {
  return (
    <section className="py-10 md:py-14 border-y border-white/5 bg-[#070707]">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.35em] text-slate-500 font-black mb-7">
          Trusted by founders from Indonesia to SEA
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] h-14 md:h-16 flex items-center justify-center"
            >
              <span className="text-xs md:text-sm font-black tracking-wider text-slate-300">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
