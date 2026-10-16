import { Section } from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <Section id="kapcsolat" bgImage="/figma/cta-bg.jpg" className="py-16 lg:px-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-250 flex-col items-center gap-10">
        <div className="flex flex-col gap-2 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Ne pazarold tovább az idődet</h2>
          <p className="text-base tracking-body">
            Bízd rá az értékesítést egy profi csapatra ahelyett, hogy felesleges pénzt, időt, energiát áldoznál egy olyan
            dologra, ami nem is biztos, hogy megtérül. Vedd fel velünk a kapcsolatot és kérj egy ingyenes konzultációt
            amiben átbeszéljük a céged kihívásait
          </p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
