import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-48 pb-24 px-6 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <Badge variant="outline" className="px-4 py-2 rounded-full bg-blue-50/50 border-blue-100 text-blue-700 font-bold uppercase tracking-[0.2em] text-[10px]">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-2"></span>
          Top Digital Agency Jakarta
        </Badge>

        <h1 className="text-6xl md:text-7xl xl:text-[92px] font-[900] leading-[0.95] tracking-[-0.05em] text-slate-900">
          Ubah Bisnis <br /> Jadi <span className="text-blue-600">Digital</span> <br /> Lebih Berkelas.
        </h1>

        <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
          Kami membangun website dan aplikasi dengan standar desain kelas dunia untuk mendorong ROI bisnis Anda ke level maksimal.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <Button className="h-20 px-12 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl text-xl font-[800] shadow-2xl shadow-blue-200 transition-all active:scale-95 group">
            Mulai Sekarang
          </Button>
          
          <button className="flex items-center space-x-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
              <Play className="fill-slate-900 ml-1" size={24} />
            </div>
            <span className="font-bold text-lg text-slate-900">Tonton Demo</span>
          </button>
        </div>

        <div className="flex items-center space-x-12 pt-10 border-t border-slate-100">
          {[
            { val: "500+", label: "Proyek Selesai" },
            { val: "99.8%", label: "Client Satisfied" },
            { val: "15+", label: "Award Won" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-[900] tracking-tight text-slate-900">{stat.val}</div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] bg-slate-100 border-[12px] border-white">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            alt="Ardana Dashboard" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>

        {/* Floating UI 1 */}
        <div className="absolute -top-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden xl:block animate-bounce-slow">
           <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
           </div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</div>
           <div className="text-3xl font-[900] text-slate-900">+42.5%</div>
        </div>

        {/* Floating UI 2 */}
        <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl hidden xl:block">
           <div className="flex -space-x-4 mb-4">
              {[1,2,3].map(i => (
                <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-900" src={`https://i.pravatar.cc/100?u=${i+10}`} alt="avatar" />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center font-bold text-xs">+12</div>
           </div>
           <div className="text-sm font-bold opacity-70 uppercase tracking-widest">Active Designers</div>
        </div>
      </div>
    </section>
  )
}
