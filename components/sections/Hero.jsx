import Image from "next/image";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate flex w-full flex-col items-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src="/figma/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navbar />

      <div className="flex w-full flex-col items-center gap-10 px-4 py-16 text-center text-white sm:px-8 lg:p-20">
        <h1 className="max-w-280 text-2xl font-bold tracking-display sm:text-4xl lg:text-5xl">
          Egyedi igényekre szabott értékesítési szolgáltatás
        </h1>
        <p className="max-w-248 text-base tracking-body">
          Teljes körű személyre szabott értékesítési szolgáltatást végünk a vállalkozás céljaihoz igazítva. Célunk olyan
          vállalkozókkal dolgozni, akinek szeretnének több ügyfelet és nagyobb forgalmat generálni. Segítünk kkv-knak és
          multis cégeknek hogy segítsünk a lehető legtöbb ügyfelet megszerezni nekik hogy nagyobb forgalomr tehessenek szert
        </p>
        <Button />
      </div>
    </section>
  );
}
