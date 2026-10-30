"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { links } from "@/lib/nav";

// Foundation minta: középen áttetsző blur-pill (desktop), mobilon csak az Ajánlat gomb.

// Igaz, ha a navbar alatt épp sötét szekció van (data-nav="dark") → fehér szöveges pill
function useOverDark() {
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const y = 40; // navbar függőleges közepe
      const dark = [...document.querySelectorAll('[data-nav="dark"]')].some(
        (el) => {
          const r = el.getBoundingClientRect();
          return r.top <= y && r.bottom >= y;
        },
      );
      setOverDark(dark);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return overDark;
}

export default function Navbar() {
  const overDark = useOverDark();

  const pill = overDark
    ? "bg-black/25 text-white ring-white/10"
    : "bg-white/70 text-ink ring-ink/10";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 lg:px-10">
      <nav className="relative mx-auto flex max-w-content items-center justify-between gap-4">
        <a href="#" aria-label="Salesmax — kezdőlap" className="shrink-0">
          <Image
            src="/figma/logo.png"
            alt="Salesmax"
            width={1080}
            height={185}
            priority
            className="h-auto w-40 lg:w-48"
          />
        </a>

        {/* Desktop: középre zárt áttetsző pill */}
        <ul
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-md p-1 ring-1 backdrop-blur-md transition-colors duration-300 lg:flex ${pill}`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block rounded-sm px-3.5 py-1.5 text-sm font-medium transition-colors ${overDark ? "hover:bg-white/15" : "hover:bg-ink/5"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button className="text-sm">Kapcsolat</Button>
        </div>

        {/* Mobil: csak Ajánlat pill */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#kapcsolat"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Ajánlat ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
