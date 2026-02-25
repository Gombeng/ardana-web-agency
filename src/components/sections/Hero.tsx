import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-8 md:space-y-10 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <Badge variant="outline" className="px-4 py-2 rounded-full bg-blue-500/10 border-blue-500/20 text-blue-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
            Top Digital Agency Jakarta
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-[92px] font-[900] leading-[1.1] lg:leading-[0.95] tracking-[-0.05em] text-white">
          Ubah Bisnis <br className="hidden md:block" /> Jadi <span className="text-blue-500">Digital</span> <br className="hidden md:block" /> Lebih Berkelas.
        </h1>

        <p className="text-base md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
          Kami membangun website dan aplikasi dengan standar desain kelas dunia untuk mendorong ROI bisnis Anda ke level maksimal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
          <Button asChild className="h-16 md:h-20 w-full sm:w-auto px-8 md:px-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl md:rounded-3xl text-lg md:text-xl font-[800] shadow-2xl shadow-blue-500/20 transition-all active:scale-95 group">
            <a href="https://wa.me/6282285598500" target="_blank">Mulai Sekarang</a>
          </Button>
          
          <button className="flex items-center space-x-4 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all shadow-sm">
              <Play className="fill-white ml-1" size={20} />
            </div>
            <span className="font-bold text-base md:text-lg text-white">Tonton Demo</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 pt-10 border-t border-white/5">
          {[
            { val: "500+", label: "Proyek Selesai" },
            { val: "99.8%", label: "Client Satisfied" },
            { val: "15+", label: "Award Won" },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="text-3xl md:text-4xl font-[900] tracking-tight text-white">{stat.val}</div>
              <div className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 lg:mt-0">
        <div className="relative z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] aspect-[4/5] bg-[#111] border-4 md:border-[12px] border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            alt="Ardana Dashboard" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
        </div>

        {/* Floating UI 1 */}
        <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-[#111] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5 hidden sm:block animate-bounce-slow">
           <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-green-500 mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
           </div>
           <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Conversion Rate</div>
           <div className="text-2xl md:text-3xl font-[900] text-white">+42.5%</div>
        </div>

        {/* Floating UI 2 */}
        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl hidden sm:block">
           <div className="flex -space-x-3 md:-space-x-4 mb-4">
              {[1,2,3].map(i => (
                <img key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white" src={`https://i.pravatar.cc/100?u=${i+10}`} alt="avatar" />
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">+12</div>
           </div>
           <div className="text-[10px] md:text-xs font-bold text-slate-900 uppercase tracking-widest">Active Designers</div>
        </div>
      </div>
    </section>
  )
}
