"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

// GYIK harmonika-elem: a válasz animálva nyílik/csukódik (grid-rows 0fr → 1fr)
export default function FaqItem({ q, a, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full cursor-pointer items-center gap-6 py-6 text-left"
        >
          <span className="flex-1 text-lg font-normal tracking-heading">{q}</span>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300 ${open ? "rotate-45 bg-primary text-white ring-primary" : "ring-ink/15"}`}
          >
            <Plus size={16} aria-hidden />
          </span>
        </button>
      </h3>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p
            className={`max-w-150 pb-6 text-base text-muted transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
