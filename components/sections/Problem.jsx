import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

const painPoints = [
  {
    title: "Kieső árbevétel",
    text: "Értékes érdeklődők úsznak el, akikkel óriási üzleteket lehetett volna kötni.",
  },
  {
    title: "Magas ügyfélszerzési költség",
    text: "Égetitek a pénzt hirdetésekre anélkül, hogy bármi eredményt is hozna.",
  },
  {
    title: "Kiszámíthatatlan bevétel",
    text: "Hullámzó a bevételetek, és így nem lehet előre tervezni.",
  },
  {
    title: "Lassuló növekedés",
    text: "A kihasználatlan sales lehetőségek idővel a vállalkozás növekedését is visszafogják.",
  },
  {
    title: "Túlterhelt cégvezető",
    text: "Ahelyett, hogy olyan dolgokkal foglalkozhatnál, amik tényleg fontosak a vállalkozás fejlesztése szempontjából, továbbra is neked kell az értékesítéssel bajlódnod.",
  },
];

// Cerebrium minta: fehér panel lekerekített tetővel rácsúszik a herora. Probléma + fájdalompontok egy panelben.
export default function Problem() {
  return (
    <Section className="z-10 -mt-8 rounded-t-3xl bg-white pt-20 pb-20 lg:-mt-10 lg:rounded-t-4xl lg:pt-30 lg:pb-30">
      <Container className="flex flex-col gap-20 lg:gap-30">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow>A probléma</Eyebrow>
            <Heading>
              Az értékesítés kiszámíthatatlan egy <span className="text-primary">profi csapat</span> nélkül
            </Heading>
          </div>
          <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="text-base text-muted lg:text-lg">
              Rengeteg cég Magyarországon nem azért nem tud növekedni, mert rossz minőségű szolgáltatást nyújtana, hanem
              mert nincs egy profi csapat, akik ügyfeleket hoznának. Lehet, hogy a leadek megvannak, de megfelelő
              ügyfélkezelés és utánkövetés nélkül végül elúszik az üzlet. Emiatt nem tud nőni a cég bevétele. Nagyon
              fontos az is, hogy az ügyfélszerző folyamat rendesen fel legyen építve, különben azt se lehet megmondani,
              hogy hol úszott el az üzlet.
            </p>
            <Button variant="outline" />
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-21/9">
          <Image
            src="/figma/ertekesites.jpg"
            alt="Értékesítési megbeszélés laptoppal és grafikonokkal"
            fill
            sizes="(min-width: 1440px) 1366px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Heading size="md">Bevételi lehetőségektől úsztok el</Heading>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-base text-muted lg:text-lg">
                Ha az értékesítés nem működik rendszerként, a növekedés is megtorpan. A növekedéshez tudatos értékesítési
                rendszer kell.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className="flex flex-col gap-3 border-t border-line py-6 sm:pr-8 lg:pt-8"
              >
                <span className="text-sm font-medium text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-medium tracking-heading">{p.title}</h3>
                <p className="text-base text-muted">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
