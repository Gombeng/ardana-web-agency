import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}
