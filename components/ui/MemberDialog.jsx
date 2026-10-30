"use client";

import { useRef } from "react";
import { X } from "lucide-react";

// Csapattag-kártya tartalma + natív <dialog> popup (kép, név, pozíció, leírás).
// Megnyitás: kártyakép, vagy mobilon a "Részletek" gomb. Mindig kifér a képernyőre (nincs görgetés):
// ha kell, a kép zsugorodik. Háttérre kattintás és Esc bezárja; nyitva a háttér nem görget.
export default function MemberDialog({ name, role, bio, photo, dialogPhoto }) {
  const ref = useRef(null);
  const open = () => {
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button type="button" onClick={open} aria-label={`${name} részletei`} className="block w-full cursor-pointer">
        {photo}
      </button>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-normal tracking-heading sm:text-xl">{name}</h3>
        {role && <p className="text-sm font-medium text-primary">{role}</p>}
      </div>
      <p className="hidden text-base text-muted sm:block">{bio}</p>
      {/* Mobil: leírás helyett popup */}
      <button
        type="button"
        onClick={open}
        className="self-start rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink sm:hidden"
      >
        Részletek
      </button>

      <dialog
        ref={ref}
        aria-label={name}
        onClose={() => (document.body.style.overflow = "")}
        onClick={(e) => e.target === ref.current && ref.current.close()}
        className="m-auto max-h-[92svh] w-[calc(100%-2rem)] max-w-md flex-col overflow-hidden rounded-2xl bg-white p-0 text-ink backdrop:bg-ink/50 backdrop:backdrop-blur-sm open:flex"
      >
        <div className="relative flex min-h-0 shrink">
          {dialogPhoto}
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Bezár"
            className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-ink text-white"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
        <div className="flex shrink-0 flex-col gap-3 p-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-normal tracking-heading">{name}</h3>
            {role && <p className="text-sm font-medium text-primary">{role}</p>}
          </div>
          <p className="text-sm text-muted">{bio}</p>
        </div>
      </dialog>
    </>
  );
}
