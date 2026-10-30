"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

// A src folyamat-bekezdése lépésenként szétbontva
const steps = [
  {
    title: "Megismerjük a céged",
    text: "A kapcsolatfelvételt követően átbeszéljük az üzleti céljaidat, és megtervezzük az értékesítési folyamatot.",
  },
  {
    title: "Összeállítjuk a megfelelő sales csapatot",
    text: "Ezután összeállítjuk a számodra és a feladathoz megfelelő sales csapatot.",
  },
  {
    title: "Közösen felkészítjük az értékesítőket",
    text: "Majd közösen felkészítjük az értékesítőket a tervezett értékesítési feladatra.",
  },
  {
    title: "Felépítjük a működés kereteit",
    text: "Meghatározzuk a sikerkritériumokat, és átbeszéljük a méréshez és riportáláshoz szükséges információkat.",
  },
  {
    title: "Elindítjuk az értékesítést",
    text: "Ezután a csapat elkezd dolgozni a megbeszélt folyamat szerint.",
  },
  {
    title: "Mérés, riportálás, fejlesztés",
    text: "Az eredmények folyamatosan monitorozva lesznek, az értékesítők pedig készítik a jelentéseket. Majd a tapasztalatok alapján fejlesztjük a folyamatot.",
  },
];

const num = (i) => String(i + 1).padStart(2, "0");

// Cerebrium minta: bal oldalt sticky lépéslista, jobb oldalt görgő kártyák. Az aktív lépés = a képernyő
// közepén lévő kártya. Mobilon nincs sticky / lista, csak a kártyák egymás alatt.
export default function Process() {
  const [active, setActive] = useState(0);
  const cards = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    cards.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="folyamat" className="bg-white py-20 lg:py-30">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28">
            <Eyebrow>Folyamat</Eyebrow>
            <Heading size="md">Bízd ránk az értékesítés teljes folyamatát</Heading>

            <ol className="mt-4 hidden w-full flex-col lg:flex">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#lepes-${i + 1}`}
                    aria-current={active === i ? "step" : undefined}
                    className={`flex items-baseline gap-4 py-2 text-lg tracking-heading transition-colors duration-300 ${active === i ? "text-ink" : "text-ink/25 hover:text-ink/60"}`}
                  >
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${active === i ? "text-primary" : ""}`}
                    >
                      {num(i)}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>

            <Button variant="outline" className="mt-4" />
          </div>
        </div>

        {/* Doboz helyett editorial sorok: hajszálvonal felül, ami aktív lépésnél balról "betöltődik" */}
        <ol className="flex flex-col lg:col-span-7">
          {steps.map((s, i) => (
            <li
              key={s.title}
              id={`lepes-${i + 1}`}
              data-index={i}
              ref={(el) => {
                cards.current[i] = el;
              }}
              className={`relative grid scroll-mt-28 grid-cols-[3rem_1fr] gap-x-4 border-t border-line pt-6 pb-12 transition-opacity duration-500 sm:grid-cols-[5rem_1fr] lg:min-h-80 lg:pt-8 ${active === i ? "" : "lg:opacity-40"}`}
            >
              <span
                aria-hidden
                className={`absolute -top-px left-0 h-px w-full origin-left bg-primary transition-transform duration-700 ease-out-soft ${active === i ? "scale-x-100" : "scale-x-0"}`}
              />
              <span className="pt-1 text-sm font-medium tabular-nums text-primary">
                {num(i)}
                <span className="text-ink/25"> / {num(steps.length - 1)}</span>
              </span>
              <div className="flex max-w-120 flex-col gap-4">
                <h3 className="text-xl font-normal tracking-heading lg:text-3xl">{s.title}</h3>
                <p className="text-base text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
