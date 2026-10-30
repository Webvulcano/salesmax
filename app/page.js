import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import OutsourceCta from "@/components/sections/OutsourceCta";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyOutsource from "@/components/sections/WhyOutsource";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <OutsourceCta />
        <Process />
        <Services />
        <WhyOutsource />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
