import Image from "next/image";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Problem() {
  return (
    <Section className="bg-tint py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-10 lg:flex-row lg:gap-25">
        <div className="flex flex-1 flex-col items-start gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Az értékesítés kiszámíthatatlan egy <span className="text-primary">profi csapat</span> nélkül
          </h2>
          <p className="pb-6 text-base tracking-body">
            Rengeteg cég Magyarországon nem azért nem tud növekedni, mert rossz minőségű szolgáltatást nyújtana. Hanem
            mert nincs egy profi csapat akik ügyfeleket hozának. Lehet, hogy a leadek megvannak, de megfelelő
            ügyfélkezelés nélkül és utánkövetés nélkül végül elúszik az üzlet. Emiatt nem tud nőni a cég bevétele. Nagyon
            fontos az is, hogy az ügyfélszerző folyamat rendesen fel legyen építve, különben azt se lehet megmondani, hogy
            hol úszott el az üzlet.
          </p>
          <Button />
        </div>
        <div className="relative aspect-619/482 w-full flex-1">
          <Image
            src="/figma/ertekesites.jpg"
            alt="Értékesítési megbeszélés laptoppal és grafikonokkal"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
