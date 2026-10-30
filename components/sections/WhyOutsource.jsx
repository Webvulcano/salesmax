import Image from "next/image";
import { ChartNoAxesCombined, Users, Workflow } from "lucide-react";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

const reasons = [
  {
    icon: Users,
    title: "Kész csapatunk van",
    text: "Nem kell magadnak nekiállnod értékesítőket keresni. Megvan a kész csapatunk.",
  },
  {
    icon: Workflow,
    title: "Kialakított folyamat",
    text: "Segítünk kialakítani az ügyfélszerzés folyamatát. Átbeszéljük a sikerkritériumokat, a riportálási rendszert és az egész ügyfélszerző folyamatot.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Mérhető teljesítmény",
    text: "A sikerkritériumok és KPI-k meghatározásával pontos képet adunk arról, hogy mennyit ért a céged árbevétele szempontjából a munkánk.",
  },
];

// Sötét ritmusváltó szekció
export default function WhyOutsource() {
  return (
    <Section id="rolunk" dark className="bg-ink py-20 text-white lg:py-30">
      <Container className="flex flex-col gap-16 lg:gap-24">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow light>Rólunk</Eyebrow>
            <Heading light>Miért szervezd ki az értékesítést?</Heading>
            <p className="text-base text-white/70 lg:text-lg">
              Bízd rá a feladatot egy hozzáértő csapatra ahelyett, hogy feleslegesen égetnéd a pénzt, és azzal
              vesztegetnéd az idődet, hogy saját sales csapatot építesz. Mi azért vagyunk, hogy ezt a felesleges macerát
              levegyük a válladról.
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
          {reasons.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col gap-4 border-t border-white/15 py-8 md:border-t-0 md:border-l md:px-8 md:py-2 md:first:border-l-0 md:first:pl-0"
            >
              <Icon size={28} strokeWidth={1.25} className="text-accent" aria-hidden />
              <h3 className="text-xl font-normal tracking-heading">{title}</h3>
              <p className="text-base text-white/70">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
