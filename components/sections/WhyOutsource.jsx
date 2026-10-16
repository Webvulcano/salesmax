import { Section, SectionHeading } from "@/components/ui/Section";

// ic-cycle.svg saját gold kört tartalmaz; a másik kettő gold körbe kerül (Figma szerint).
const reasons = [
  {
    icon: { src: "/figma/ic-csapat.svg", size: 60, circle: true },
    title: "Kész csapatunk van",
    text: "Nem kell magadnak nekiállnod értékesítőket keresni. Megvan kész a csapatunk",
  },
  {
    icon: { src: "/figma/ic-cycle.svg", size: 60, circle: false },
    title: "Kialakított folyamat",
    text: "Segítünk kialakítani az ügyfélszerzés folyamatát. Átbeszéljük a sikerkritériumokat, a riportálási rendszert és az egész ügyfélszerző folyamatot",
  },
  {
    icon: { src: "/figma/ic-feedback.svg", size: 40, circle: true },
    title: "Mérhető teljesítmény",
    text: "A sikerkritériumok és és KPI-k meghatározásával pontos képet adunk arról, hogy mennyit ért a céged árbevétele szempontjáról a munkánk",
  },
];

export default function WhyOutsource() {
  return (
    <Section id="rolunk" bgImage="/figma/ertekesites.jpg" className="py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-15">
        <SectionHeading
          light
          title="Miért szervezd ki az értékesítést?"
          text="Bízd rá a feladatot egy hozzáértő csapatra ahelyett, hogy feleslegesen égetnéd a pénzt és azzal vesztegetnéd az idődet, hogy saját sales csapatot építesz. Mi azért vagyunk, hogy ezt a felesleges macerát levegyük a válladról."
          className="[&>p]:max-w-content"
        />
        <ul className="grid w-full grid-cols-1 gap-8 text-white md:grid-cols-3">
          {reasons.map(({ icon, title, text }) => (
            <li key={title} className="flex flex-col items-start gap-2">
              <span
                className={`flex size-15 shrink-0 items-center justify-center overflow-hidden rounded-full ${icon.circle ? "bg-primary" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon.src} alt="" width={icon.size} height={icon.size} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-base tracking-body">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
