// Oldal-szintű adatok — metadata, manifest, robots, sitemap innen olvassa.
// URL: NEXT_PUBLIC_SITE_URL (éles domain) → Vercel production URL → localhost
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3123");

export const siteName = "Salesmax";
export const PHONE = "+36 70 639 6046";
export const EMAIL = "info@salesmaxhungary.hu";
export const siteTitle = "Salesmax — Egyedi igényekre szabott értékesítési szolgáltatás";
export const siteDescription =
  "Teljes körű, személyre szabott értékesítési szolgáltatás kkv-knak és nagyvállalatoknak: leadgenerálás, időpont-egyeztetés, értékesítés és utánkövetés.";
