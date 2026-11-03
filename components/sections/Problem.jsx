import Image from "next/image";
import Button from "@/components/ui/Button";
import HighlightTitle from "@/components/ui/HighlightTitle";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

// Cerebrium minta: fehér panel lekerekített tetővel rácsúszik a herora. Probléma + fájdalompontok egy panelben.
export default async function Problem() {
  const cms = await getCms();
  const painPoints = cms.list("home.problem.pain_points");

  return (
    <Section className="z-10 -mt-8 rounded-t-3xl bg-white pt-20 pb-20 lg:-mt-10 lg:rounded-t-4xl lg:pt-30 lg:pb-30">
      <Container className="flex flex-col gap-20 lg:gap-30">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow {...cms.attr("home.problem.eyebrow")}>{cms.text("home.problem.eyebrow")}</Eyebrow>
            <Heading>
              <HighlightTitle cms={cms} k="home.problem" highlightClass="text-primary" />
            </Heading>
          </div>
          <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="text-base text-muted lg:text-lg" {...cms.attr("home.problem.lead")}>
              {cms.text("home.problem.lead")}
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
              <Heading size="md" {...cms.attr("home.problem.sub_title")}>
                {cms.text("home.problem.sub_title")}
              </Heading>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-base text-muted lg:text-lg" {...cms.attr("home.problem.sub_lead")}>
                {cms.text("home.problem.sub_lead")}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((p, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 80}
                className="flex flex-col gap-3 border-t border-line py-6 sm:pr-8 lg:pt-8"
              >
                <span className="text-sm font-medium text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-medium tracking-heading" {...cms.attr("home.problem.pain_points", i, "title")}>
                  {p.title}
                </h3>
                <p className="text-base text-muted" {...cms.attr("home.problem.pain_points", i, "text")}>
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
