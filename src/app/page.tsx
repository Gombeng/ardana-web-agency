import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/sections/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
