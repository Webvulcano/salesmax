import Image from "next/image";
import Button from "@/components/ui/Button";
import HighlightTitle from "@/components/ui/HighlightTitle";
import { Container, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

export default async function OutsourceCta() {
  const cms = await getCms();

  return (
    <Section dark className="overflow-hidden bg-ink py-24 lg:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/kiszervezheto-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <Container>
        <div className="mx-auto flex max-w-240 flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-light tracking-display text-balance text-white lg:text-6xl">
            <HighlightTitle cms={cms} k="home.outsource_cta" />
          </h2>
          <p className="max-w-160 text-base text-white/75 lg:text-lg" {...cms.attr("home.outsource_cta.text")}>
            {cms.text("home.outsource_cta.text")}
          </p>
          <Button />
        </div>
      </Container>
    </Section>
  );
}
