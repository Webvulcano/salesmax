"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

// TODO: valós ügyfélvéleményekre cserélni — ezek jelölt helyőrzők, ne kerüljenek így élesbe.
const testimonials = [
  { quote: "Ide kerül az első ügyfél véleménye.", author: "Ügyfél neve", company: "Cég neve" },
  { quote: "Ide kerül a második ügyfél véleménye.", author: "Ügyfél neve", company: "Cég neve" },
  { quote: "Ide kerül a harmadik ügyfél véleménye.", author: "Ügyfél neve", company: "Cég neve" },
];

function Arrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Előző vélemény" : "Következő vélemény"}
      className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-cream"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={direction === "prev" ? "/figma/chevron-left.svg" : "/figma/chevron-right.svg"}
        alt=""
        width={24}
        height={24}
        className={direction === "prev" ? "rotate-90" : "-rotate-90"}
      />
    </button>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (delta) => setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <Section id="velemenyek" className="bg-white py-16 lg:py-25">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8">
        <SectionHeading title="Vélemények" />
        <div className="flex items-center gap-2 sm:gap-8">
          <Arrow direction="prev" onClick={() => go(-1)} />
          <figure
            aria-live="polite"
            className="flex flex-1 flex-col items-center gap-4 rounded-xl border border-accent/40 bg-cream px-6 py-10 text-center sm:px-16 sm:py-12"
          >
            <blockquote className="text-lg">„{current.quote}”</blockquote>
            <figcaption className="text-base">
              <span className="font-semibold">{current.author}</span>
              <span className="text-black/60"> — {current.company}</span>
            </figcaption>
          </figure>
          <Arrow direction="next" onClick={() => go(1)} />
        </div>
        <div className="flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}. vélemény`}
              aria-current={i === index}
              className={`size-2.5 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-accent/40"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
