import { CalendarCheck, Compass, Database, GraduationCap, Handshake, PhoneCall, Repeat, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

// Sorrend = Figma oszlopok (fentről le, balról jobbra); lg-n grid-flow-col tartja.
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
    <Section id="szolgaltatasok" className="bg-cream py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-15">
        <SectionHeading
          title="Szolgáltatások"
          text="Az ügyfélszerzés teljes folyamatát lefedjük — egyben vagy akár csak egy-egy lépését."
        />
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-2">
          {services.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col items-start gap-4 rounded-xl border border-accent/40 bg-white p-5 lg:min-h-46"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-base tracking-body">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
