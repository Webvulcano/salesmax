import ProcessSteps from "@/components/sections/ProcessSteps";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

// Szerver oldal: CMS-szöveg + attribútumok; az aktív-lépés logika a client ProcessSteps-ben.
export default async function Process() {
  const cms = await getCms();
  const steps = cms.list("home.process.steps").map((s, i) => ({
    title: s.title,
    text: s.text,
    titleAttr: cms.attr("home.process.steps", i, "title"),
    textAttr: cms.attr("home.process.steps", i, "text"),
  }));

  return (
    <Section id="folyamat" className="bg-white py-20 lg:py-30">
      <ProcessSteps
        steps={steps}
        header={
          <>
            <Eyebrow {...cms.attr("home.process.eyebrow")}>{cms.text("home.process.eyebrow")}</Eyebrow>
            <Heading size="md" {...cms.attr("home.process.title")}>
              {cms.text("home.process.title")}
            </Heading>
          </>
        }
      />
    </Section>
  );
}
