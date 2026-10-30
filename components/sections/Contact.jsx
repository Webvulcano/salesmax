import Image from "next/image";
import { Phone } from "lucide-react";
import CopyEmail from "@/components/ui/CopyEmail";
import ContactForm from "@/components/ContactForm";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

const PHONE = "+36 70 639 6046";
const EMAIL = "info@salesmaxhungary.hu";

export default function Contact() {
  return (
    <Section id="kapcsolat" dark className="overflow-hidden bg-ink py-20 lg:py-30">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Eyebrow light>Kapcsolat</Eyebrow>
          <Heading light>Ne pazarold tovább az idődet</Heading>
          <p className="text-base text-white/70 lg:text-lg">
            Bízd rá az értékesítést egy profi csapatra ahelyett, hogy felesleges pénzt, időt, energiát áldoznál egy olyan
            dologra, ami nem is biztos, hogy megtérül. Vedd fel velünk a kapcsolatot, és kérj egy ingyenes konzultációt,
            amelyben átbeszéljük a céged kihívásait.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {PHONE && (
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 text-base text-white hover:text-accent">
                  <Phone size={18} strokeWidth={1.5} className="text-accent" aria-hidden />
                  {PHONE}
                </a>
              </li>
            )}
            <li>
              <CopyEmail email={EMAIL} />
            </li>
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
