import Image from "next/image";
import { ChartNoAxesCombined, Users, Workflow } from "lucide-react";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

// CMS list item `icon` (rejtett mező) → lucide ikon; ismeretlen névnél Users
const ICONS = { ChartNoAxesCombined, Users, Workflow };

// Sötét ritmusváltó szekció
export default async function WhyOutsource() {
  const cms = await getCms();
  const reasons = cms.list("home.why.reasons");

  return (
    <Section id="rolunk" dark className="bg-ink py-20 text-white lg:py-30">
      <Container className="flex flex-col gap-16 lg:gap-24">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow light {...cms.attr("home.why.eyebrow")}>
              {cms.text("home.why.eyebrow")}
            </Eyebrow>
            <Heading light {...cms.attr("home.why.title")}>
              {cms.text("home.why.title")}
            </Heading>
            <p className="text-base text-white/70 lg:text-lg" {...cms.attr("home.why.lead")}>
              {cms.text("home.why.lead")}
            </p>
          </div>
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl lg:col-span-5 lg:col-start-8">
            <Image
              src="/figma/folyamat.jpg"
              alt="Kézfogás egy sikeres üzletkötés után"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3">
          {reasons.map(({ icon, title, text }, i) => {
            const Icon = ICONS[icon] ?? Users;
            return (
              <li
                key={i}
                className="flex flex-col gap-4 border-t border-white/15 py-8 md:border-t-0 md:border-l md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0"
              >
                <Icon size={28} strokeWidth={1.25} className="text-accent" aria-hidden />
                <h3 className="text-xl font-normal tracking-heading" {...cms.attr("home.why.reasons", i, "title")}>
                  {title}
                </h3>
                <p className="text-base text-white/70" {...cms.attr("home.why.reasons", i, "text")}>
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
