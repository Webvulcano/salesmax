import Image from "next/image";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const steps = [
  "Megismerjük a céged",
  "Összeállítjuk a megfelelő sales csapatot",
  "Közösen felkészítjük az értékesítőket",
  "Felépítjük a működés kereteit",
  "Elindítjuk az értékesítést",
  "Mérés, riportálás, fejlesztés",
];

export default function Process() {
  return (
    <Section id="folyamat" className="bg-white py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-10 lg:flex-row lg:gap-15">
        <div className="relative aspect-681/530 w-full lg:w-1/2 lg:max-w-170 lg:shrink-0">
          <Image
            src="/figma/folyamat.jpg"
            alt="Kézfogás egy sikeres üzletkötés után"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Bízd ránk az értékesítés teljes folyamatát</h2>
          <p className="text-base tracking-body">
            A kapcsolatfelvételt követően átbszéljük az üzleti céljaidat, és megtervezzük az értékesítési folyamatot.
            Ezután összeállítjuk a számodra és a feladathoz megfelelő sales csapatot. Majd közösen felkészítjük az
            értékesítőket a tervelt értékesítési feladatra. Meghatározzuk a sikerkritériumokat és átbeszéljük a méréshez és
            ripoltáláshoz szükséges információkat. Ezután a csapat elkezd dolgozni a megbeszélt folyamat szerint. Az
            eredmények folyamatosan monitorozva lesznek, az értékesítők pedig készítik a jelentéseket. Majd a tapasztalatok
            alapján fejlesztjük a folyamatot
          </p>
          <ol className="flex w-full flex-col gap-2.5">
            {steps.map((step) => (
              <li key={step} className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/ic-check.svg" alt="" width={24} height={24} className="shrink-0" />
                <span className="text-base font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <Button />
        </div>
      </div>
    </Section>
  );
}
