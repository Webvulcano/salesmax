"use server";

// Kapcsolat-űrlap: validálás → SimplyForms (ő küldi az értesítő e-mailt).
// Env: SIMPLYFORMS_FORM_ID (publikus form ID, API key nem kell). Amíg nincs megadva, a Contact
// szekció az űrlap helyett "karbantartás alatt" üzenetet mutat, ide el sem jut kérés.

const clean = (v, max) =>
  String(v ?? "")
    .trim()
    .slice(0, max);

export async function sendContact(_prev, formData) {
  // honeypot: emberek nem töltik ki (rejtett mező), botok igen → csendben "siker"
  if (clean(formData.get("website"), 200)) return { ok: true };

  const data = {
    nev: clean(formData.get("nev"), 120),
    email: clean(formData.get("email"), 200),
    telefon: clean(formData.get("telefon"), 40),
    ceg: clean(formData.get("ceg"), 160),
    uzenet: clean(formData.get("uzenet"), 5000),
    segitseg: clean(formData.get("segitseg"), 120),
    csapat: clean(formData.get("csapat"), 120),
    inditas: clean(formData.get("inditas"), 120),
  };

  const errors = {};
  if (!data.nev) errors.nev = "Add meg a neved.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Adj meg egy érvényes e-mail címet.";
  if (data.telefon.replace(/\D/g, "").length < 8) errors.telefon = "Adj meg egy telefonszámot.";
  if (formData.get("consent") !== "on") errors.consent = "Az adatkezeléshez hozzá kell járulnod.";
  if (Object.keys(errors).length) return { ok: false, errors, values: data };

  const sent = await sendToSimplyForms(data);
  if (!sent) {
    return {
      ok: false,
      values: data,
      error: "Nem sikerült elküldeni az üzenetet. Próbáld újra később.",
    };
  }
  return { ok: true };
}

async function sendToSimplyForms({ nev, email, telefon, ceg, uzenet, segitseg, csapat, inditas }) {
  const formId = process.env.SIMPLYFORMS_FORM_ID;
  if (!formId) {
    console.error("[kapcsolat-űrlap] Hiányzó SIMPLYFORMS_FORM_ID");
    return false;
  }

  // A kulcsok nevei jelennek meg az értesítő e-mailben
  const body = new FormData();
  body.append("subject", `Űrlapkitöltés: ${nev}${ceg ? ` (${ceg})` : ""}`);
  body.append("Név", nev);
  body.append("Cégnév", ceg);
  body.append("E-mail", email);
  body.append("Telefon", telefon);
  body.append("Miben segíthetünk", segitseg || "—");
  body.append("Értékesítők most", csapat || "—");
  body.append("Indulás", inditas || "—");
  body.append("Üzenet", uzenet || "—");
  // "_" előtag: nem jelenik meg a levélben, csak Reply-To lesz → a válasz a kitöltőhöz megy
  body.append("_replyto", email);

  try {
    const res = await fetch(`https://api.simplyforms.app/v1/forms/${formId}`, { method: "POST", body });
    if (!res.ok) {
      console.error("[kapcsolat-űrlap] SimplyForms hiba:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[kapcsolat-űrlap] SimplyForms hiba:", err);
    return false;
  }
}
