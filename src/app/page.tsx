import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}
