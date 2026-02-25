"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan satu website?",
    a: "Untuk Landing Page sederhana biasanya memakan waktu 3-5 hari. Untuk website perusahaan yang lebih kompleks atau sistem kustom, estimasi waktu berkisar antara 2-4 minggu."
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Ya, semua paket kami sudah termasuk Domain (.com/.id) dan Hosting premium selama 1 tahun pertama."
  },
  {
    q: "Teknologi apa yang digunakan oleh Ardana Digital?",
    a: "Kami menggunakan standar industri modern seperti Next.js, React, Tailwind CSS, dan Shadcn UI untuk memastikan website yang kencang, aman, dan mudah dikelola."
  },
  {
    q: "Apakah website saya nanti bisa muncul di Google (SEO)?",
    a: "Tentu. Semua website yang kami bangun sudah dioptimasi secara teknis (On-Page SEO) agar mudah diindeks oleh mesin pencari Google."
  },
  {
    q: "Bagaimana jika saya ingin melakukan perubahan setelah website jadi?",
    a: "Kami memberikan garansi revisi minor dan dukungan teknis gratis selama 3 bulan pertama setelah peluncuran untuk memastikan kepuasan Anda."
  }
]

export default function FAQ() {
  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Questions & Answers</h2>
          <p className="text-4xl md:text-5xl font-[900] tracking-tighter text-white">Sering Ditanyakan</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/5 bg-[#111] rounded-[2rem] px-8 py-2 overflow-hidden transition-all hover:border-blue-600/30">
              <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-blue-500 text-lg py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 font-medium leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
