import FaqItem from "@/components/ui/FaqItem";
import JsonLd from "@/components/cms/JsonLd";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";
import { getCms } from "@/lib/cms";

export default async function Faq() {
  const cms = await getCms();
  const faqs = cms.list("home.faq.items");

  return (
    <Section id="gyik" className="bg-cream py-20 lg:py-30">
      {/* FAQPage a CMS-listából → szerkesztés után is egyezik a látható szöveggel */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }}
      />
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28">
            <Eyebrow {...cms.attr("home.faq.eyebrow")}>{cms.text("home.faq.eyebrow")}</Eyebrow>
            <Heading {...cms.attr("home.faq.title")}>{cms.text("home.faq.title")}</Heading>
          </div>
        </div>

        <div className="flex flex-col border-t border-line lg:col-span-7">
          {faqs.map(({ question, answer }, i) => (
            <FaqItem
              key={i}
              q={question}
              a={answer}
              id={`gyik-${i + 1}`}
              qAttr={cms.attr("home.faq.items", i, "question")}
              aAttr={cms.attr("home.faq.items", i, "answer")}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
