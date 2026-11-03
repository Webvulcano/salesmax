import { CalendarCheck, Compass, Database, GraduationCap, Handshake, PhoneCall, Repeat, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

// CMS list item `icon` (rejtett mező) → lucide ikon; ismeretlen névnél Target
const ICONS = { CalendarCheck, Compass, Database, GraduationCap, Handshake, PhoneCall, Repeat, Target };

export default async function Services() {
  const cms = await getCms();
  const services = cms.list("home.services.items");

  return (
    <Section id="szolgaltatasok" className="bg-cream py-20 lg:py-30">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal className="flex max-w-240 flex-col gap-6">
          <Eyebrow {...cms.attr("home.services.eyebrow")}>{cms.text("home.services.eyebrow")}</Eyebrow>
          <Heading size="md">
            <span {...cms.attr("home.services.title")}>{cms.text("home.services.title")}</span>
            <span className="max-sm:hidden">
              {" "}
              <span {...cms.attr("home.services.title_tail")}>{cms.text("home.services.title_tail")}</span>
            </span>
            .
          </Heading>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {services.map(({ icon, title, text }, i) => {
            const Icon = ICONS[icon] ?? Target;
            return (
              <Reveal
                as="li"
                key={i}
                delay={(i % 4) * 80}
                className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-white px-3 py-6 text-center sm:gap-8 sm:p-6 lg:px-6 lg:py-10"
              >
                <span className="flex size-12 items-center sm:size-16 justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={30} strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-medium tracking-heading sm:text-lg" {...cms.attr("home.services.items", i, "title")}>
                    {title}
                  </h3>
                  <p className="text-sm text-muted sm:text-base" {...cms.attr("home.services.items", i, "text")}>
                    {text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
