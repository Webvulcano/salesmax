import Image from "next/image";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

// Full-bleed fotó + sötét overlay. Alul a fehér panel rácsúszik (Problem).
export default function Hero() {
  return (
    <section data-nav="dark" className="relative isolate flex min-h-svh w-full flex-col justify-end bg-ink">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-ink/40" />
      </div>

      <div className="mx-auto w-full max-w-content px-4 pt-32 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="flex max-w-240 flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:gap-8">
          <Eyebrow light>Kiszervezett értékesítés</Eyebrow>
          <h1 className="text-4xl font-light tracking-display text-balance text-white sm:text-5xl lg:text-6xl">
            Egyedi igényekre szabott <span className="text-accent">értékesítési</span> szolgáltatás
          </h1>
          <p className="hidden max-w-160 text-base sm:block text-white/75 lg:text-lg">
            Teljes körű, személyre szabott értékesítési szolgáltatást végzünk a vállalkozás céljaihoz igazítva. Célunk
            olyan vállalkozókkal dolgozni, akik szeretnének több ügyfelet és nagyobb forgalmat generálni. Segítünk
            kkv-knak és multis cégeknek a lehető legtöbb ügyfelet megszerezni, hogy nagyobb forgalomra tehessenek szert.
          </p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button />
            <Button href="#folyamat" variant="light">
              Hogyan dolgozunk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
