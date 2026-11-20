import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Facilities from "@/components/Facilities";
import Dining from "@/components/Dining";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Facilities />
      <Dining />
      <Pricing />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
