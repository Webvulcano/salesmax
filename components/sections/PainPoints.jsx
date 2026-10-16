import { Section, SectionHeading } from "@/components/ui/Section";

// Ikonok a Figmából; méret = SVG natív mérete, gold körben (60px).
const items = [
  {
    icon: { src: "/figma/ic-kieso.svg", w: 40, h: 37 },
    title: " Kieső árbevétel",
    text: "értékes érdeklődők úsznak el, akikkel óriási üzleteket lehetett volna kötnisum dolor sit amet.",
  },
  {
    icon: { src: "/figma/ic-money.svg", w: 41, h: 32 },
    title: "Magas ügyfélszerzési költség",
    text: " égetitek a pénzt hirdetésekre anélkül, hogy bármi eredményt is hozna",
  },
  {
    icon: { src: "/figma/ic-kiszamithatatlan.svg", w: 39, h: 40 },
    title: "Kiszámíthatatlan bevétel",
    text: "hullámzó a bevételetek és így nem lehet előre tervezni",
  },
  {
    icon: { src: "/figma/ic-lassulo.svg", w: 37, h: 34 },
    title: "Lassuló növekedés",
    text: " A kihasználatlan sales lehetőségek idővel a vállalkozás növekedését is visszafogják",
  },
  {
    icon: { src: "/figma/ic-tulterhelt.svg", w: 37, h: 35 },
    title: "Túlterhelt cégvezető",
    text: "Ahelyett, hogy olyan dolgokkal foglalkozhatnál, amik tényleg fontosak a vállalkozás fejlesztése szempontjából, továbbra is neked kell az értékeítéssel bajlódnod",
  },
];

export default function PainPoints() {
  return (
    <Section className="bg-white py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-303 flex-col items-center gap-15">
        <SectionHeading
          title="Bevételi lehetőségektől úsztok el"
          text="Ha az értékesítés nem működik rendszerként, a növekedés is megtorpan. A növekedéshez tudatos értékesítési rendszer kell"
        />
        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-start gap-2.5">
              <span className="flex size-15 shrink-0 items-center justify-center rounded-full bg-primary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon.src} alt="" width={item.icon.w} height={item.icon.h} />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm font-medium">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
