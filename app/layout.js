import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteUrl, siteName, siteTitle, siteDescription } from "@/lib/site";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

// Ikonok + OG kép fájl-alapúak (app/favicon.ico, icon.png, apple-icon.png, opengraph-image.jpg)
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

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
        {/* Vercel Web Analytics + Speed Insights — csak Vercelen gyűjt, lokálban debug módban fut */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
