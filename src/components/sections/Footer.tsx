import { Laptop, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2 space-y-10">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Laptop size={22} strokeWidth={3} />
              </div>
              <span className="text-2xl font-[900] tracking-tighter text-slate-900 uppercase">Ardana</span>
            </div>
            <p className="text-slate-400 text-xl font-medium max-w-sm leading-relaxed">
              Agensi digital terkemuka di Jakarta yang berfokus pada hasil nyata dan desain kelas dunia.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900 mb-10">Layanan</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-wider text-[13px]">
              {["Web Design", "App Development", "SEO Strategy", "Marketing Ads"].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900 mb-10">Kontak Kami</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase tracking-wider text-[13px]">
              <li>Jakarta, Indonesia</li>
              <li>sales@asain.co.id</li>
              <li>+62 822-2443-4159</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 Ardana Digital Group. All Rights Reserved.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
