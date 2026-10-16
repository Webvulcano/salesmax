import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";

// TODO: valós csapattagok (név, pozíció, fotó) — a Figmában még placeholder.
const members = [
  { name: "Csapattag neve", role: "Pozíció", photo: "/figma/csapat-tag.png" },
  { name: "Csapattag neve", role: "Pozíció", photo: "/figma/csapat-tag.png" },
  { name: "Csapattag neve", role: "Pozíció", photo: "/figma/csapat-tag.png" },
];

export default function Team() {
  return (
    <Section id="csapat" className="bg-white pb-16 lg:pb-25">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-15">
        <SectionHeading
          title="Sales csapatunk"
          text="Tapasztalt értékesítők, akik a te céged növekedéséért dolgoznak."
        />
        <ul className="grid w-full grid-cols-1 gap-15 md:grid-cols-3">
          {members.map((m, i) => (
            <li key={i} className="flex flex-col items-center gap-2.5 text-center">
              <div className="relative size-60 overflow-hidden rounded-full border-5 border-accent bg-white sm:size-75">
                <Image src={m.photo} alt={m.name} fill sizes="300px" className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-base tracking-body">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
