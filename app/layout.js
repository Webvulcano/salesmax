import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Salesmax — Egyedi igényekre szabott értékesítési szolgáltatás",
  description:
    "Teljes körű, személyre szabott értékesítési szolgáltatás kkv-knak és nagyvállalatoknak: leadgenerálás, időpont-egyeztetés, értékesítés és utánkövetés.",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
