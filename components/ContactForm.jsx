"use client";

// Kapcsolat-űrlap, lépésenként (server action: app/actions/contact.js → SimplyForms). Sikeres küldés után köszönő üzenet.
// 3 választós kérdés (kattintásra továbblép) → opcionális kifejtős üzenet → elérhetőségek + hozzájárulás.
// enabled=false (nincs SIMPLYFORMS_FORM_ID): "karbantartás alatt" üzenet az űrlap helyett.
import { useActionState, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import Button from "@/components/ui/Button";

const field =
  "h-13 w-full rounded-lg bg-white/8 px-4 text-base text-white ring-1 ring-inset ring-white/15 placeholder:text-white/50 outline-none transition-colors focus:bg-white/12 focus:ring-2 focus:ring-accent";

function Error({ id, msg }) {
  return msg ? (
    <p id={id} className="mt-1.5 text-sm font-medium text-red-200">
      {msg}
    </p>
  ) : null;
}

function Notice({ title, children }) {
  return (
    <div role="status" className="flex min-h-80 w-full flex-1 flex-col items-center justify-center px-6 py-10 text-center text-white">
      <p className="text-xl font-normal tracking-heading">{title}</p>
      <p className="mt-2 text-base text-white/70">{children}</p>
    </div>
  );
}

const questions = [
  {
    name: "segitseg",
    label: "Miben segíthetünk?",
    options: ["Teljes értékesítés kiszervezése", "Leadgenerálás, időpont-egyeztetés", "Sales csapat fejlesztése", "Egyéb"],
  },
  {
    name: "csapat",
    label: "Van most értékesítő a cégnél?",
    options: ["Nincs", "1–2 fő", "Saját sales csapatunk van"],
  },
  {
    name: "inditas",
    label: "Mikor indulnátok?",
    options: ["Minél előbb", "1–3 hónapon belül", "Csak tájékozódom"],
  },
];

const STEPS = questions.length + 2; // + üzenet + elérhetőségek
const LAST = STEPS - 1;

function StepTitle({ children }) {
  return <p className="text-xl font-normal tracking-heading text-white">{children}</p>;
}

export default function ContactForm({ enabled }) {
  const [state, action, pending] = useActionState(sendContact, null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const e = state?.errors ?? {};
  const v = state?.values ?? {};

  if (!enabled) {
    return <Notice title="Az űrlap karbantartás alatt">Kérjük, próbáld újra később.</Notice>;
  }

  if (state?.ok) {
    return <Notice title="Köszönjük, megkaptuk!">Hamarosan felvesszük veled a kapcsolatot.</Notice>;
  }

  const choose = (name, value) => {
    setAnswers((a) => ({ ...a, [name]: value }));
    setStep((s) => s + 1);
  };

  // Szerverhiba esetén (validáció) az utolsó lépésen vagyunk, mert csak onnan lehet küldeni
  const show = (i) => (i === step ? "flex" : "hidden");

  return (
    <form action={action} noValidate className="relative flex w-full flex-col gap-6">
      {/* honeypot: rejtett, botcsapda */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {questions.map((q) => (
        <input key={q.name} type="hidden" name={q.name} value={answers[q.name] ?? ""} />
      ))}

      {/* Fejléc: vissza + lépésszámláló + progress */}
      <div className="flex flex-col gap-3">
        <div className="flex h-8 items-center justify-between text-sm text-white/60">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex cursor-pointer items-center gap-1.5 hover:text-white"
            >
              <ArrowLeft size={16} aria-hidden /> Vissza
            </button>
          ) : (
            <span />
          )}
          <span className="tabular-nums">
            {step + 1} / {STEPS}
          </span>
        </div>
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-accent transition-[width] duration-500 ease-out-soft"
            style={{ width: `${((step + 1) / STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* 1–3: választós kérdések */}
      {questions.map((q, i) => (
        <fieldset key={q.name} className={`${show(i)} flex-col gap-4`}>
          <legend className="contents">
            <StepTitle>{q.label}</StepTitle>
          </legend>
          <div className="flex flex-col gap-2.5">
            {q.options.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => choose(q.name, o)}
                aria-pressed={answers[q.name] === o}
                className={`w-full cursor-pointer rounded-lg px-4 py-3.5 text-left text-base text-white ring-1 ring-inset transition-colors ${answers[q.name] === o ? "bg-accent/15 ring-accent" : "bg-white/8 ring-white/15 hover:bg-white/12 hover:ring-white/30"}`}
              >
                {o}
              </button>
            ))}
          </div>
        </fieldset>
      ))}

      {/* 4: opcionális kifejtős */}
      <div className={`${show(questions.length)} flex-col gap-4`}>
        <label htmlFor="uzenet">
          <StepTitle>
            Szeretnél még valamit hozzátenni? <span className="text-white/50">(nem kötelező)</span>
          </StepTitle>
        </label>
        <textarea
          id="uzenet"
          name="uzenet"
          rows={5}
          placeholder="Pl. mivel foglalkozik a cég, kiket szeretnétek elérni…"
          defaultValue={v.uzenet}
          className={`${field} h-37 resize-none py-3.5`}
        />
        <Button type="button" onClick={() => setStep(LAST)} className="self-start">
          Tovább
        </Button>
      </div>

      {/* 5: elérhetőségek */}
      <div className={`${show(LAST)} flex-col gap-4`}>
        <StepTitle>Hová küldhetjük az ajánlatot?</StepTitle>
        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="nev">Név</label>
            <input
              id="nev"
              name="nev"
              type="text"
              required
              autoComplete="name"
              placeholder="Név"
              defaultValue={v.nev}
              aria-invalid={!!e.nev}
              aria-describedby="nev-err"
              className={field}
            />
            <Error id="nev-err" msg={e.nev} />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="E-mail"
              defaultValue={v.email}
              aria-invalid={!!e.email}
              aria-describedby="email-err"
              className={field}
            />
            <Error id="email-err" msg={e.email} />
          </div>
          <div>
            <label className="sr-only" htmlFor="telefon">Telefonszám</label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Telefonszám"
              defaultValue={v.telefon}
              aria-invalid={!!e.telefon}
              aria-describedby="telefon-err"
              className={field}
            />
            <Error id="telefon-err" msg={e.telefon} />
          </div>
          <div>
            <label className="sr-only" htmlFor="ceg">Cégnév</label>
            <input
              id="ceg"
              name="ceg"
              type="text"
              autoComplete="organization"
              placeholder="Cégnév"
              defaultValue={v.ceg}
              className={field}
            />
          </div>
        </div>

        {/* TODO: link az adatkezelési tájékoztatóra, ha elkészül az oldal */}
        <label className="mt-1 flex cursor-pointer items-start gap-3 text-sm text-white/70">
          <input
            type="checkbox"
            name="consent"
            defaultChecked={false}
            className="mt-0.5 size-4 shrink-0 accent-primary"
            aria-invalid={!!e.consent}
            aria-describedby="consent-err"
          />
          <span>Hozzájárulok, hogy a megadott adataimat a megkeresésem megválaszolása céljából kezeljétek.</span>
        </label>
        <Error id="consent-err" msg={e.consent} />

        {state?.error && (
          <p role="alert" className="rounded-lg bg-red-500/30 px-5 py-3 text-sm text-white">
            {state.error}
          </p>
        )}

        <Button type="submit" disabled={pending} className="self-start">
          {pending ? "Küldés…" : "Ajánlatot kérek"}
        </Button>
      </div>
    </form>
  );
}
