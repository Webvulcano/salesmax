import { Inter_Tight } from "next/font/google";
import SiteAnalytics from "@/components/analytics/SiteAnalytics";
import CmsBridge from "@/components/cms/CmsBridge";
import { getCms } from "@/lib/cms";
import "./globals.css";
import { siteUrl, siteName } from "@/lib/site";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

// Ikonok + OG kép fájl-alapúak (app/favicon.ico, icon.png, apple-icon.png, opengraph-image.jpg)
// Title + description az Ügyfél Adminból (Google-megjelenés szekció).
export async function generateMetadata() {
  const cms = await getCms();
  const title = cms.text("home.seo.title");
  const description = cms.text("home.seo.description");
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: siteName,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "hu_HU",
      url: "/",
      siteName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport = {
  themeColor: "#141210",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={`${interTight.variable} antialiased`}>
      <head>
        {/* JS nélkül ne maradjon láthatatlan a beúszó tartalom */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        {children}
        {/* Ügyfél Admin vizuális szerkesztő híd — csak az admin iframe-jében aktív */}
        <CmsBridge />
        {/* Vercel Web Analytics + Speed Insights + kattintásmérés, lazy — Ügyfél Admin (analytics-site) Analitika oldala ebből olvas */}
        <SiteAnalytics />
      </body>
    </html>
  );
}
