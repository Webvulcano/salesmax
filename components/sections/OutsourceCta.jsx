import Image from "next/image";
import Button from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export default function OutsourceCta() {
  return (
    <Section dark className="overflow-hidden bg-ink py-24 lg:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/kiszervezheto-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <Container>
        <div className="mx-auto flex max-w-240 flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-light tracking-display text-balance text-white lg:text-6xl">
            Pedig mindez <span className="text-accent">kiszervezhető</span> lenne
          </h2>
          <p className="max-w-160 text-base text-white/75 lg:text-lg">
            Az elvesztett lehetőségeknek ára van. A kevesebb lezárt üzlet kieső bevételt jelent a cégnek. Az
            ügyfélszerzés drágább, a növekedés lassabb.
          </p>
          <Button />
        </div>
      </Container>
    </Section>
  );
}
