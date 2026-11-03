// CMS manifest: mely szövegeket szerkesztheti az ügyfél az Ügyfél Adminban (analytics-site).
// Alapértékek: content/site.js. A kulcsok véglegesek — átnevezés = új mező, a régi archiválódik
// (a mentett tartalma a DB-ben marad, de nem használt).
// Tagok (ügyfél e-mailek) a gitignore-olt cms.members.local.json-be mennek, ide SOHA.
// Sync: (admin repo) npx tsx scripts/sync-manifest.mjs <ez a fájl> --print-secret

import { CONTACT, CONTACT_INFO, FAQ, FOOTER, HERO, OUTSOURCE_CTA, PROBLEM, PROCESS, SEO, SERVICES, TEAM, WHY } from "./content/site.js";

const text = (key, label, def, maxLength = 90) => ({ key, label, type: "text", maxLength, default: def });
const area = (key, label, def, maxLength = 600) => ({ key, label, type: "textarea", maxLength, default: def });
const list = (key, label, itemFields, def) => ({ key, label, type: "list", itemFields, default: def });
const it = (key, label, type = "text", extra = {}) => ({ key, label, type, ...extra });

// Cím arany kiemeléssel: eleje + kiemelt rész + vége (bármelyik lehet üres)
const highlightTitle = (d) => [
  text("title_start", "Cím eleje", d.titleStart, 80),
  text("title_highlight", "Cím kiemelt (arany) része", d.titleHighlight, 40),
  text("title_end", "Cím vége", d.titleEnd, 60),
];

const manifest = {
  site: {
    slug: "salesmax",
    name: "Salesmax",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://salesmaxhungary.hu",
    revalidatePath: "/api/revalidate",
  },
  locales: [{ code: "hu", label: "Magyar" }],
  members: [],
  analytics: {
    vercel: {
      projectId: "prj_4NDUGyBDwsHLjJO81NxHKlg6cxiR",
      teamId: "team_3e4PonEWGDktxZ3jN5cVjuN8",
      // Valódi konverziók (lib/analytics.js eseménynevei); a többi esemény (Kapcsolat gomb) = érdeklődés.
      conversions: ["Telefonhívás", "Email", "Űrlapküldés"],
    },
  },
  pages: [
    {
      key: "home",
      label: "Főoldal",
      path: "/",
      sections: [
        {
          key: "seo",
          label: "Google-megjelenés",
          fields: [
            { key: "title", label: "Oldal címe (Google, böngészőfül)", type: "text", maxLength: 70, hidden: true, default: SEO.title },
            { key: "description", label: "Leírás (Google találati lista)", type: "textarea", maxLength: 160, hidden: true, default: SEO.description },
          ],
        },
        {
          key: "contact_info",
          label: "Elérhetőségek",
          fields: [
            text("phone", "Telefonszám", CONTACT_INFO.phone, 30),
            text("email", "E-mail", CONTACT_INFO.email, 80),
          ],
        },
        {
          key: "hero",
          label: "Nyitó rész",
          fields: [
            text("eyebrow", "Felirat a cím felett", HERO.eyebrow, 40),
            ...highlightTitle(HERO),
            area("lead", "Bevezető (mobilon rejtett)", HERO.lead, 500),
            text("cta_secondary", "Második gomb felirata", HERO.ctaSecondary, 30),
          ],
        },
        {
          key: "problem",
          label: "A probléma",
          fields: [
            text("eyebrow", "Felirat a cím felett", PROBLEM.eyebrow, 40),
            ...highlightTitle(PROBLEM),
            area("lead", "Bevezető", PROBLEM.lead, 800),
            text("sub_title", "Alcím", PROBLEM.subTitle, 80),
            area("sub_lead", "Alcím szövege", PROBLEM.subLead, 300),
            list("pain_points", "Fájdalompontok", [it("title", "Cím", "text", { maxLength: 60 }), it("text", "Szöveg", "textarea", { maxLength: 250 })], PROBLEM.painPoints),
          ],
        },
        {
          key: "outsource_cta",
          label: "Kiszervezhető (sötét sáv)",
          fields: [...highlightTitle(OUTSOURCE_CTA), area("text", "Szöveg", OUTSOURCE_CTA.text, 300)],
        },
        {
          key: "process",
          label: "Folyamat",
          fields: [
            text("eyebrow", "Felirat a cím felett", PROCESS.eyebrow, 40),
            text("title", "Cím", PROCESS.title, 80),
            list("steps", "Lépések", [it("title", "Lépés", "text", { maxLength: 60 }), it("text", "Leírás", "textarea", { maxLength: 300 })], PROCESS.steps),
          ],
        },
        {
          key: "services",
          label: "Szolgáltatások",
          fields: [
            text("eyebrow", "Felirat a cím felett", SERVICES.eyebrow, 40),
            text("title", "Cím", SERVICES.title, 80),
            text("title_tail", "Cím folytatása (mobilon rejtett, pont nélkül)", SERVICES.titleTail, 80),
            list(
              "items",
              "Szolgáltatások",
              [it("icon", "Ikon", "text", { maxLength: 30, hidden: true }), it("title", "Cím", "text", { maxLength: 40 }), it("text", "Szöveg", "textarea", { maxLength: 150 })],
              SERVICES.items,
            ),
          ],
        },
        {
          key: "why",
          label: "Rólunk (miért szervezd ki)",
          fields: [
            text("eyebrow", "Felirat a cím felett", WHY.eyebrow, 40),
            text("title", "Cím", WHY.title, 80),
            area("lead", "Bevezető", WHY.lead, 500),
            list(
              "reasons",
              "Érvek",
              [it("icon", "Ikon", "text", { maxLength: 30, hidden: true }), it("title", "Cím", "text", { maxLength: 50 }), it("text", "Szöveg", "textarea", { maxLength: 300 })],
              WHY.reasons,
            ),
          ],
        },
        {
          key: "team",
          label: "Csapatunk",
          fields: [
            text("eyebrow", "Felirat a cím felett", TEAM.eyebrow, 40),
            text("title", "Cím", TEAM.title, 60),
            area("lead", "Bevezető", TEAM.lead, 200),
            list(
              "members",
              "Vezetők",
              [
                it("photo", "Fotó", "text", { maxLength: 40, hidden: true }),
                it("name", "Név", "text", { maxLength: 50 }),
                it("role", "Pozíció", "text", { maxLength: 50 }),
                it("bio", "Bemutatkozás", "textarea", { maxLength: 600 }),
              ],
              TEAM.members,
            ),
          ],
        },
        {
          key: "faq",
          label: "Gyakori kérdések",
          fields: [
            text("eyebrow", "Felirat a cím felett", FAQ.eyebrow, 40),
            text("title", "Cím", FAQ.title, 60),
            list("items", "Kérdések", [it("question", "Kérdés", "text", { maxLength: 140 }), it("answer", "Válasz", "textarea", { maxLength: 900 })], FAQ.items),
          ],
        },
        {
          key: "contact",
          label: "Kapcsolat",
          fields: [
            text("eyebrow", "Felirat a cím felett", CONTACT.eyebrow, 40),
            text("title", "Cím", CONTACT.title, 80),
            area("text", "Szöveg", CONTACT.text, 500),
          ],
        },
        {
          key: "footer",
          label: "Lábléc",
          fields: [text("copyright", "Copyright sor", FOOTER.copyright, 80)],
        },
      ],
    },
  ],
};

export default manifest;
