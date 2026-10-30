import FaqItem from "@/components/ui/FaqItem";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

const faqs = [
  {
    q: "Milyen cégeknek érdemes kiszervezni az értékesítést?",
    a: "Minden olyan kkv-nak és nagyvállalatnak, amely több ügyfelet és kiszámíthatóbb bevételt szeretne, de nincs ideje, kapacitása vagy tapasztalata saját sales csapatot felépíteni és menedzselni. Akkor is megéri, ha vannak érdeklődőitek, de az utánkövetés és az üzletkötés nem működik rendszerként.",
  },
  {
    q: "A teljes értékesítési folyamatot át kell adnunk nektek?",
    a: "Nem feltétlenül. Átvehetjük a teljes folyamatot a leadgenerálástól az üzletkötésig, de csak egy-egy részét is — például az időpont-egyeztetést vagy az utánkövetést. Az első konzultáción közösen döntjük el, mire van szükségetek.",
  },
  {
    q: "Hogyan tanulják meg az értékesítők a mi termékünket vagy szolgáltatásunkat?",
    a: "Indulás előtt közösen felkészítjük az értékesítőket: megismerik a termékedet vagy szolgáltatásodat, a célcsoportot, az ajánlatot és a leggyakoribb kifogásokat. A felkészítést a tapasztalatok alapján folyamatosan finomítjuk.",
  },
  {
    q: "Hogyan követhetjük nyomon az értékesítők munkáját és az eredményeket?",
    a: "Az elején közösen meghatározzuk a sikerkritériumokat és a KPI-okat. Az értékesítők rendszeresen jelentést készítenek, az eredményeket folyamatosan monitorozzuk, így mindig pontos képet kapsz arról, hol tart a folyamat.",
  },
  {
    q: "Mennyi idő alatt tud elindulni az értékesítés?",
    a: "Ez a feladat összetettségétől függ. Az ingyenes konzultáción átbeszéljük a céljaidat, és megmondjuk, mennyi idő alatt tudunk elindulni.",
  },
];

export default function Faq() {
  return (
    <Section id="gyik" className="bg-cream py-20 lg:py-30">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28">
            <Eyebrow>GYIK</Eyebrow>
            <Heading>Gyakori kérdések</Heading>
          </div>
        </div>

        <div className="flex flex-col border-t border-line lg:col-span-7">
          {faqs.map(({ q, a }, i) => (
            <FaqItem key={q} q={q} a={a} id={`gyik-${i + 1}`} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
