"use client";

import { useRef, useState } from "react";
import { Check, Mail } from "lucide-react";

// Kattintásra vágólapra másolja az emailt; ikon pipára vált + "Kimásolva" címke beúszik.
// Ha a Clipboard API nem elérhető (http helyi IP-n) vagy elutasít → textarea + execCommand fallback.
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    // nincs Clipboard API / engedély → fallback
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  el.remove();
}

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  const onClick = async () => {
    await copy(email);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={copied ? `${email} kimásolva` : `${email} másolása`}
      className="inline-flex cursor-pointer items-center gap-3 text-base text-white hover:text-accent"
    >
      <span className="relative size-4.5 text-accent">
        <Mail
          size={18}
          strokeWidth={1.5}
          aria-hidden
          className={`absolute inset-0 transition-all duration-300 ${copied ? "scale-50 opacity-0" : "scale-100 opacity-100"}`}
        />
        <Check
          size={18}
          strokeWidth={2}
          aria-hidden
          className={`absolute inset-0 transition-all duration-300 ${copied ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        />
      </span>
      {email}
      <span
        aria-hidden={!copied}
        className={`rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent transition-all duration-300 ease-out-soft ${copied ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
      >
        Kimásolva
      </span>
    </button>
  );
}
