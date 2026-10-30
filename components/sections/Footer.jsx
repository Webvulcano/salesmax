import Image from "next/image";
import { links } from "@/lib/nav";

// TODO: impresszum (cégnév, székhely, adószám, e-mail) — az ügyféladatok még hiányoznak (ugyfel.md)
// TODO: adatkezelési tájékoztató link, ha elkészül az oldal
export default function Footer() {
  return (
    <footer data-nav="dark" className="w-full bg-ink px-4 pt-16 pb-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-start">
          <a href="#" aria-label="Salesmax — kezdőlap">
            <Image src="/figma/logo.png" alt="Salesmax" width={1080} height={185} className="h-auto w-40" />
          </a>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:gap-8">
            {[...links, { href: "#kapcsolat", label: "Kapcsolat" }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-base text-white/70 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/50">© 2026 Salesmax. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}
