import Image from "next/image";
import { Phone } from "lucide-react";
import CopyEmail from "@/components/ui/CopyEmail";
import ContactForm from "@/components/ContactForm";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

export default async function Contact() {
  const cms = await getCms();
  const phone = cms.text("home.contact_info.phone");
  const email = cms.text("home.contact_info.email");

  return (
    <Section id="kapcsolat" dark className="overflow-hidden bg-ink py-20 lg:py-30">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Eyebrow light {...cms.attr("home.contact.eyebrow")}>
            {cms.text("home.contact.eyebrow")}
          </Eyebrow>
          <Heading light {...cms.attr("home.contact.title")}>
            {cms.text("home.contact.title")}
          </Heading>
          <p className="text-base text-white/70 lg:text-lg" {...cms.attr("home.contact.text")}>
            {cms.text("home.contact.text")}
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {phone && (
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 text-base text-white hover:text-accent">
                  <Phone size={18} strokeWidth={1.5} className="text-accent" aria-hidden />
                  <span {...cms.attr("home.contact_info.phone")}>{phone}</span>
                </a>
              </li>
            )}
            {email && (
              <li>
                <CopyEmail email={email} emailAttr={cms.attr("home.contact_info.email")} />
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md sm:p-8 lg:col-span-7">
          {/* SimplyForms form ID nélkül nincs hova küldeni → karbantartás-üzenet az űrlap helyén */}
          <ContactForm enabled={Boolean(process.env.SIMPLYFORMS_FORM_ID)} />
        </div>
      </Container>
    </Section>
  );
}
