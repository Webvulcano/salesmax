import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import PainPoints from "@/components/sections/PainPoints";
import OutsourceCta from "@/components/sections/OutsourceCta";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import WhyOutsource from "@/components/sections/WhyOutsource";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <PainPoints />
      <OutsourceCta />
      <Process />
      <Services />
      <WhyOutsource />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
    </main>
  );
}
