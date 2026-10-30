import { CalendarCheck, Compass, Database, GraduationCap, Handshake, PhoneCall, Repeat, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

const services = [
  { icon: Target, title: "Leadgenerálás", text: "Potenciális ügyfelek azonosítása és megszerzése." },
  { icon: PhoneCall, title: "Cold outreach", text: "Telefonos, LinkedIn- vagy e-mailes megkeresések." },
  { icon: CalendarCheck, title: "Időpont-egyeztetés", text: "Kvalifikált sales meetingek szervezése." },
  { icon: Handshake, title: "Értékesítés", text: "Sales meetingek és üzletkötés." },
  { icon: Repeat, title: "Utánkövetés", text: "A még nem döntött érdeklődők szisztematikus kezelése." },
  { icon: Compass, title: "Sales stratégia", text: "Célcsoport, ajánlat, sales folyamat és kommunikáció kialakítása." },
  { icon: Database, title: "CRM", text: "Pipeline és utánkövetési rendszer kialakítása." },
  { icon: GraduationCap, title: "Sales csapat fejlesztése", text: "Tréning, folyamatok, KPI-ok és teljesítménymérés." },
];

export default function Services() {
  return (
    <Section id="szolgaltatasok" className="bg-cream py-20 lg:py-30">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Reveal className="flex max-w-240 flex-col gap-6">
          <Eyebrow>Szolgáltatások</Eyebrow>
          <Heading size="md">Az ügyfélszerzés teljes folyamatát lefedjük<span className="max-sm:hidden"> — egyben vagy akár csak egy-egy lépését</span>.</Heading>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 4) * 80}
              className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-white px-3 py-6 text-center sm:gap-8 sm:p-6 lg:px-6 lg:py-10"
            >
              <span className="flex size-12 items-center sm:size-16 justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={30} strokeWidth={1.5} aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-medium tracking-heading sm:text-lg">{title}</h3>
                <p className="text-sm text-muted sm:text-base">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
