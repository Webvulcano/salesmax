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
import JsonLd from "@/components/JsonLd";
import { siteUrl, siteName, siteDescription, PHONE, EMAIL } from "@/lib/site";

// TODO: cím, adószám (ugyfel.md) → address, vatID; ha megvan a cégnév: legalName
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description: siteDescription,
  email: EMAIL,
  telephone: PHONE.replace(/\s/g, ""),
  areaServed: { "@type": "Country", name: "Magyarország" },
  knowsLanguage: "hu",
};

export default function Home() {
  return (
    <>
      <JsonLd data={organization} />
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
