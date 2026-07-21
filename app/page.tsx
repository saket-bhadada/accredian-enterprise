import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TornEdge from "@/components/TornEdge";
import StatsBar from "@/components/StatsBar";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TornEdge />
        <StatsBar />
        <Capabilities />
        <Process />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
