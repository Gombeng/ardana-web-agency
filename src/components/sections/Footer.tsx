import { Laptop, Instagram, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-32">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Laptop size={22} strokeWidth={3} />
              </div>
              <span className="text-2xl font-[900] tracking-tighter text-white uppercase italic">Ardana</span>
            </div>
            <p className="text-slate-500 text-xl font-medium max-w-sm leading-relaxed">
              Agensi digital terkemuka di Jakarta yang berfokus pada hasil nyata dan desain kelas dunia.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "#" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 group">
                  <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Services</h4>
            <ul className="space-y-6">
              {["Web Design", "App Development", "SEO Strategy", "Marketing Ads"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 font-bold uppercase tracking-wider text-[12px] hover:text-white flex items-center group transition-colors">
                    {item} <ArrowUpRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Contact</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-wider text-[12px]">
              <li className="hover:text-white transition-colors cursor-pointer tracking-tight">Jakarta, Indonesia</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-tight">sales@ardana.digital</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-tight">+62 822-2443-4159</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 Ardana Digital Group. Crafted for Excellence.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
