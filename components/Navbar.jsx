"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#rolunk", label: "Rólunk" },
  { href: "#csapat", label: "Csapatunk" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-20 w-full px-4 py-6 sm:px-8 lg:px-20">
      <nav className="flex items-center gap-4">
        <a href="#" aria-label="Salesmax — kezdőlap" className="shrink-0">
          <Image src="/figma/logo.png" alt="Salesmax" width={100} height={17} priority />
        </a>

        <div className="hidden flex-1 items-center justify-end gap-12 lg:flex">
          <ul className="flex items-center gap-12 text-base font-semibold text-white">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button>Kapcsolat</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          className="ml-auto p-2 text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div id="mobil-menu" className="absolute inset-x-4 top-full rounded-xl bg-black/90 p-6 backdrop-blur sm:inset-x-8 lg:hidden">
          <ul className="flex flex-col gap-5 text-lg font-semibold text-white">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={close} className="mt-6">
            <Button className="w-full">Kapcsolat</Button>
          </div>
        </div>
      )}
    </header>
  );
}
