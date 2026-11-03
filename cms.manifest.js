// CMS manifest: Ügyfél Admin (analytics-site). Salesmaxnál egyelőre CSAK analitika — nincs szerkeszthető mező.
// Tagok (ügyfél e-mailek) a gitignore-olt cms.members.local.json-be mennek, ide SOHA.
// Sync: (admin repo) npx tsx scripts/sync-manifest.mjs <ez a fájl>

const manifest = {
  site: {
    slug: "salesmax",
    name: "Salesmax",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://salesmaxhungary.hu",
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
  pages: [{ key: "home", label: "Főoldal", path: "/", sections: [] }],
};

export default manifest;
