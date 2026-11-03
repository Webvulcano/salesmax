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
import JsonLd from "@/components/cms/JsonLd";
import { getCms } from "@/lib/cms";
import { siteUrl, siteName } from "@/lib/site";

// TODO: cím, adószám (ugyfel.md) → address, vatID; ha megvan a cégnév: legalName
// Leírás, telefon, e-mail a CMS-ből → szerkesztés után is egyezik a látható szöveggel
const organization = (cms) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description: cms.text("home.seo.description"),
  email: cms.text("home.contact_info.email") || undefined,
  telephone: cms.text("home.contact_info.phone").replace(/\s/g, "") || undefined,
  areaServed: { "@type": "Country", name: "Magyarország" },
  knowsLanguage: "hu",
});

export default async function Home() {
  const cms = await getCms();

  return (
    <>
      <JsonLd data={organization(cms)} />
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
