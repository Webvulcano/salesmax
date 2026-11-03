// Az oldal alapszövegei. A CMS-manifest (cms.manifest.js) ezeket adja alapértéknek;
// élesben a szöveg az Ügyfél Adminból jön (lib/cms.js), ez csak az első feltöltés.
// Kiemelt (arany) címrész: titleStart + titleHighlight + titleEnd külön mező, hogy a szerkesztő is lássa.

import { siteTitle, siteDescription } from "../lib/site.js";

export const SEO = { title: siteTitle, description: siteDescription };

export const CONTACT_INFO = {
  phone: "+36 70 639 6046",
  email: "info@salesmaxhungary.hu",
};

export const HERO = {
  eyebrow: "Kiszervezett értékesítés",
  titleStart: "Egyedi igényekre szabott",
  titleHighlight: "értékesítési",
  titleEnd: "szolgáltatás",
  lead: "Teljes körű, személyre szabott értékesítési szolgáltatást végzünk a vállalkozás céljaihoz igazítva. Célunk olyan vállalkozókkal dolgozni, akik szeretnének több ügyfelet és nagyobb forgalmat generálni. Segítünk kkv-knak és multis cégeknek a lehető legtöbb ügyfelet megszerezni, hogy nagyobb forgalomra tehessenek szert.",
  ctaSecondary: "Hogyan dolgozunk",
};

export const PROBLEM = {
  eyebrow: "A probléma",
  titleStart: "Az értékesítés kiszámíthatatlan egy",
  titleHighlight: "profi csapat",
  titleEnd: "nélkül",
  lead: "Rengeteg cég Magyarországon nem azért nem tud növekedni, mert rossz minőségű szolgáltatást nyújtana, hanem mert nincs egy profi csapat, akik ügyfeleket hoznának. Lehet, hogy a leadek megvannak, de megfelelő ügyfélkezelés és utánkövetés nélkül végül elúszik az üzlet. Emiatt nem tud nőni a cég bevétele. Nagyon fontos az is, hogy az ügyfélszerző folyamat rendesen fel legyen építve, különben azt se lehet megmondani, hogy hol úszott el az üzlet.",
  subTitle: "Bevételi lehetőségektől úsztok el",
  subLead: "Ha az értékesítés nem működik rendszerként, a növekedés is megtorpan. A növekedéshez tudatos értékesítési rendszer kell.",
  painPoints: [
    { title: "Kieső árbevétel", text: "Értékes érdeklődők úsznak el, akikkel óriási üzleteket lehetett volna kötni." },
    { title: "Magas ügyfélszerzési költség", text: "Égetitek a pénzt hirdetésekre anélkül, hogy bármi eredményt is hozna." },
    { title: "Kiszámíthatatlan bevétel", text: "Hullámzó a bevételetek, és így nem lehet előre tervezni." },
    { title: "Lassuló növekedés", text: "A kihasználatlan sales lehetőségek idővel a vállalkozás növekedését is visszafogják." },
    {
      title: "Túlterhelt cégvezető",
      text: "Ahelyett, hogy olyan dolgokkal foglalkozhatnál, amik tényleg fontosak a vállalkozás fejlesztése szempontjából, továbbra is neked kell az értékesítéssel bajlódnod.",
    },
  ],
};

export const OUTSOURCE_CTA = {
  titleStart: "Pedig mindez",
  titleHighlight: "kiszervezhető",
  titleEnd: "lenne",
  text: "Az elvesztett lehetőségeknek ára van. A kevesebb lezárt üzlet kieső bevételt jelent a cégnek. Az ügyfélszerzés drágább, a növekedés lassabb.",
};

// A src folyamat-bekezdése lépésenként szétbontva
export const PROCESS = {
  eyebrow: "Folyamat",
  title: "Bízd ránk az értékesítés teljes folyamatát",
  steps: [
    { title: "Megismerjük a céged", text: "A kapcsolatfelvételt követően átbeszéljük az üzleti céljaidat, és megtervezzük az értékesítési folyamatot." },
    { title: "Összeállítjuk a megfelelő sales csapatot", text: "Ezután összeállítjuk a számodra és a feladathoz megfelelő sales csapatot." },
    { title: "Közösen felkészítjük az értékesítőket", text: "Majd közösen felkészítjük az értékesítőket a tervezett értékesítési feladatra." },
    { title: "Felépítjük a működés kereteit", text: "Meghatározzuk a sikerkritériumokat, és átbeszéljük a méréshez és riportáláshoz szükséges információkat." },
    { title: "Elindítjuk az értékesítést", text: "Ezután a csapat elkezd dolgozni a megbeszélt folyamat szerint." },
    {
      title: "Mérés, riportálás, fejlesztés",
      text: "Az eredmények folyamatosan monitorozva lesznek, az értékesítők pedig készítik a jelentéseket. Majd a tapasztalatok alapján fejlesztjük a folyamatot.",
    },
  ],
};

// icon: lucide ikon neve (components/sections/Services.jsx ICONS), az adminban rejtett
export const SERVICES = {
  eyebrow: "Szolgáltatások",
  title: "Az ügyfélszerzés teljes folyamatát lefedjük",
  titleTail: "— egyben vagy akár csak egy-egy lépését",
  items: [
    { icon: "Target", title: "Leadgenerálás", text: "Potenciális ügyfelek azonosítása és megszerzése." },
    { icon: "PhoneCall", title: "Cold outreach", text: "Telefonos, LinkedIn- vagy e-mailes megkeresések." },
    { icon: "CalendarCheck", title: "Időpont-egyeztetés", text: "Kvalifikált sales meetingek szervezése." },
    { icon: "Handshake", title: "Értékesítés", text: "Sales meetingek és üzletkötés." },
    { icon: "Repeat", title: "Utánkövetés", text: "A még nem döntött érdeklődők szisztematikus kezelése." },
    { icon: "Compass", title: "Sales stratégia", text: "Célcsoport, ajánlat, sales folyamat és kommunikáció kialakítása." },
    { icon: "Database", title: "CRM", text: "Pipeline és utánkövetési rendszer kialakítása." },
    { icon: "GraduationCap", title: "Sales csapat fejlesztése", text: "Tréning, folyamatok, KPI-ok és teljesítménymérés." },
  ],
};

// icon: lucide ikon neve (components/sections/WhyOutsource.jsx ICONS), az adminban rejtett
export const WHY = {
  eyebrow: "Rólunk",
  title: "Miért szervezd ki az értékesítést?",
  lead: "Bízd rá a feladatot egy hozzáértő csapatra ahelyett, hogy feleslegesen égetnéd a pénzt, és azzal vesztegetnéd az idődet, hogy saját sales csapatot építesz. Mi azért vagyunk, hogy ezt a felesleges macerát levegyük a válladról.",
  reasons: [
    { icon: "Users", title: "Kész csapatunk van", text: "Nem kell magadnak nekiállnod értékesítőket keresni. Megvan a kész csapatunk." },
    {
      icon: "Workflow",
      title: "Kialakított folyamat",
      text: "Segítünk kialakítani az ügyfélszerzés folyamatát. Átbeszéljük a sikerkritériumokat, a riportálási rendszert és az egész ügyfélszerző folyamatot.",
    },
    {
      icon: "ChartNoAxesCombined",
      title: "Mérhető teljesítmény",
      text: "A sikerkritériumok és KPI-k meghatározásával pontos képet adunk arról, hogy mennyit ért a céged árbevétele szempontjából a munkánk.",
    },
  ],
};

// photo: kulcs a components/sections/Team.jsx PHOTOS-ában (fotó + szem-igazítás), az adminban rejtett.
// Rejtett tagok (Erős Máté, Guti László) fotói/adatai a Team.jsx-ben vannak, visszahozáskor ide kell új elem.
export const TEAM = {
  eyebrow: "Csapatunk",
  title: "Vezetőink",
  lead: "Tapasztalt értékesítők, akik a te céged növekedéséért dolgoznak.",
  members: [
    {
      photo: "mike-erno",
      name: "Mike Ernő",
      role: "Társtulajdonos",
      bio: "Mike Ernő, oktatási és HR-vezető. Hiszem azt, hogy nyitottsággal, empátiával és kitartással bármit el lehet érni. Célom a vállalkozásunknál tevékenykedők tudásának bővítése és a csapattagok motiváltan tartása.",
    },
    {
      photo: "ivanits-peter",
      name: "Ivanits Péter",
      role: "Tulajdonos",
      bio: "A biztosítási szektorban és a sales managementben szerzett tapasztalataim megtanítottak arra, hogyan találjam meg a közös hangot különböző emberekkel. Szeretek új kapcsolatokat kialakítani, ötleteket megosztani és olyan lehetőségeket keresni, amelyekből valami új születhet. A SalesMaxban ezt a szemléletet szeretném kamatoztatni, miközben én magam is folyamatosan fejlődöm.",
    },
  ],
};

export const FAQ = {
  eyebrow: "GYIK",
  title: "Gyakori kérdések",
  items: [
    {
      question: "Milyen cégeknek érdemes kiszervezni az értékesítést?",
      answer:
        "Minden olyan kkv-nak és nagyvállalatnak, amely több ügyfelet és kiszámíthatóbb bevételt szeretne, de nincs ideje, kapacitása vagy tapasztalata saját sales csapatot felépíteni és menedzselni. Akkor is megéri, ha vannak érdeklődőitek, de az utánkövetés és az üzletkötés nem működik rendszerként.",
    },
    {
      question: "A teljes értékesítési folyamatot át kell adnunk nektek?",
      answer:
        "Nem feltétlenül. Átvehetjük a teljes folyamatot a leadgenerálástól az üzletkötésig, de csak egy-egy részét is — például az időpont-egyeztetést vagy az utánkövetést. Az első konzultáción közösen döntjük el, mire van szükségetek.",
    },
    {
      question: "Hogyan tanulják meg az értékesítők a mi termékünket vagy szolgáltatásunkat?",
      answer:
        "Indulás előtt közösen felkészítjük az értékesítőket: megismerik a termékedet vagy szolgáltatásodat, a célcsoportot, az ajánlatot és a leggyakoribb kifogásokat. A felkészítést a tapasztalatok alapján folyamatosan finomítjuk.",
    },
    {
      question: "Hogyan követhetjük nyomon az értékesítők munkáját és az eredményeket?",
      answer:
        "Az elején közösen meghatározzuk a sikerkritériumokat és a KPI-okat. Az értékesítők rendszeresen jelentést készítenek, az eredményeket folyamatosan monitorozzuk, így mindig pontos képet kapsz arról, hol tart a folyamat.",
    },
    {
      question: "Mennyi idő alatt tud elindulni az értékesítés?",
      answer:
        "Ez a feladat összetettségétől függ. Az ingyenes konzultáción átbeszéljük a céljaidat, és megmondjuk, mennyi idő alatt tudunk elindulni.",
    },
  ],
};

export const CONTACT = {
  eyebrow: "Kapcsolat",
  title: "Ne pazarold tovább az idődet",
  text: "Bízd rá az értékesítést egy profi csapatra ahelyett, hogy felesleges pénzt, időt, energiát áldoznál egy olyan dologra, ami nem is biztos, hogy megtérül. Vedd fel velünk a kapcsolatot, és kérj egy ingyenes konzultációt, amelyben átbeszéljük a céged kihívásait.",
};

export const FOOTER = {
  copyright: "© 2026 Salesmax. Minden jog fenntartva.",
};
