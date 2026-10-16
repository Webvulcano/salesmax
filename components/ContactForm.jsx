"use client";

import Button from "@/components/ui/Button";

const field =
  "h-15 w-full bg-white/40 px-5 text-base text-white placeholder:text-white/80 outline-none transition-colors focus:bg-white/50 focus:ring-2 focus:ring-accent";

export default function ContactForm() {
  // TODO: beküldés bekötése (Resend / Formspree), ha megvan a címzett email.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-2.5">
      <div className="flex w-full flex-col gap-2.5 pb-5">
        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
          <label className="sr-only" htmlFor="nev">Név</label>
          <input id="nev" name="nev" type="text" required autoComplete="name" placeholder="Név" className={field} />
          <label className="sr-only" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="E-mail" className={field} />
          <label className="sr-only" htmlFor="telefon">Telefonszám</label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" placeholder="Telefonszám" className={field} />
          <label className="sr-only" htmlFor="ceg">Cégnév</label>
          <input id="ceg" name="ceg" type="text" autoComplete="organization" placeholder="Cégnév" className={field} />
        </div>
        <label className="sr-only" htmlFor="uzenet">Üzenet</label>
        <textarea
          id="uzenet"
          name="uzenet"
          rows={5}
          placeholder="Miben segíthetünk?"
          className={`${field} h-37 resize-none py-4`}
        />
      </div>
      <Button type="submit" />
    </form>
  );
}
