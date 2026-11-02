import { siteUrl } from "@/lib/site";

// Egyoldalas landing — új aloldal (impresszum, adatkezelés) esetén ide is vedd fel
export default function sitemap() {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
