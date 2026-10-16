import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Salesmax — Egyedi igényekre szabott értékesítési szolgáltatás",
  description:
    "Teljes körű, személyre szabott értékesítési szolgáltatás kkv-knak és nagyvállalatoknak: leadgenerálás, időpont-egyeztetés, értékesítés és utánkövetés.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={`${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
