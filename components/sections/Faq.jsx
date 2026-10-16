import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

const faqs = [
  {
    q: "Milyen cégeknek érdemes kiszervezni az értékesítést?",
    a: "Minden olyan kkv-nak és nagyvállalatnak, amely több ügyfelet és kiszámíthatóbb bevételt szeretne, de nincs ideje, kapacitása vagy tapasztalata saját sales csapatot felépíteni és menedzselni. Akkor is megéri, ha vannak érdeklődőitek, de az utánkövetés és az üzletkötés nem működik rendszerként.",
  },
  {
    q: "Kell szöveget vagy képA teljes értékesítési folyamatot át kell adnunk nektek?eket biztosítani?",
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
    <Section id="gyik" className="bg-white pb-16 lg:px-16 lg:pb-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-10">
        <SectionHeading title="Gyakori kérdések" />
        <div className="flex w-full flex-col gap-2.5">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-black/24 p-5">
              <summary className="flex cursor-pointer list-none items-center gap-8">
                <h3 className="flex-1 text-base font-semibold">{q}</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figma/ic-plus.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0 transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="pt-4 text-base tracking-body text-black/80">{a}</p>
            </details>
          ))}
        </div>
        <Button />
      </div>
    </Section>
  );
}
