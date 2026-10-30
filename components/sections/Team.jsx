import Image from "next/image";
import MemberDialog from "@/components/ui/MemberDialog";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/Section";

// eye: a két szem közepe + szemtávolság px-ben az eredeti fotón (w × h). Ebből számoljuk a pozíciót,
// hogy minden kártyán ugyanott legyen a szemvonal és egyforma legyen az arcméret.
const members = [
  {
    name: "Mike Ernő",
    role: "Társtulajdonos",
    photo: { src: "/munkatarsak/mike-erno.png", w: 1145, h: 1374, eye: { x: 531, y: 229, dist: 120 }, rotate: 7 }, // a pohár kilóg alul; x eltolva → kicsit balra; rotate: döntött fej egyenesítése
    bio: "Mike Ernő, oktatási és HR-vezető. Hiszem azt, hogy nyitottsággal, empátiával és kitartással bármit el lehet érni. Célom a vállalkozásunknál tevékenykedők tudásának bővítése és a csapattagok motiváltan tartása.",
  },
  {
    name: "Ivanits Péter",
    role: "Tulajdonos",
    photo: { src: "/munkatarsak/ivanits-peter.png", w: 576, h: 576, eye: { x: 257, y: 181, dist: 70 } },
    bio: "A biztosítási szektorban és a sales managementben szerzett tapasztalataim megtanítottak arra, hogyan találjam meg a közös hangot különböző emberekkel. Szeretek új kapcsolatokat kialakítani, ötleteket megosztani és olyan lehetőségeket keresni, amelyekből valami új születhet. A SalesMaxban ezt a szemléletet szeretném kamatoztatni, miközben én magam is folyamatosan fejlődöm.",
  },
  {
    name: "Erős Máté",
    role: "Junior ügyfélmenedzser",
    photo: { src: "/munkatarsak/eros-mate.png", w: 1024, h: 1536, eye: { x: 490, y: 401, dist: 156 } },
    bio: "Diákként és vállalkozóként hiszek a folyamatos fejlődésben. Fontos számomra, hogy mindig új dolgokat tanuljak, bővítsem a tudásomat, és olyan tapasztalatokat szerezzek, amelyeket a gyakorlatban is hasznosítani tudok.",
  },
  {
    name: "Guti László",
    role: "",
    photo: { src: "/munkatarsak/guti-laszlo.png", w: 1254, h: 1254, eye: { x: 593, y: 294, dist: 114 } },
    bio: "Szeretem az embereket, mindig nyitott vagyok új partnerekkel tárgyalni, hogy a lehető leghatékonyabban érjünk el együtt eredményeket. Környezetvédelmi, energetikai és pénzügyi ismereteimet mások segítésére fordítom. Céltudatos és kitartó embernek ismerem magam, és igyekszem a legtöbbet kihozni önmagamból.",
  },
];

// Szemtávolság és szemvonal a kártya szélességének arányában (margin-top % a szélességhez mér,
// így négyzetes és 4:5 kártyán is ugyanott marad)
const EYE_DIST = 0.16;
const EYE_LINE = "42%";

const photoStyle = ({ w, h, eye, rotate = 0 }) => ({
  width: `${((EYE_DIST * w) / eye.dist) * 100}%`,
  maxWidth: "none",
  height: "auto",
  marginTop: EYE_LINE,
  transform: `translate(-${(eye.x / w) * 100}%, -${(eye.y / h) * 100}%) rotate(${rotate}deg)`,
  transformOrigin: `${(eye.x / w) * 100}% ${(eye.y / h) * 100}%`, // a szemek körül forog, így a szemvonal marad
});

function Photo({ member: m, className = "", eager = false }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`}>
      <Image
        src={m.photo.src}
        alt={m.name}
        width={m.photo.w}
        height={m.photo.h}
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 160vw"
        className="absolute top-0 left-1/2"
        style={photoStyle(m.photo)}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

export default function Team() {
  return (
    <Section id="csapat" className="bg-white py-20 lg:py-30">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow>Csapatunk</Eyebrow>
            <Heading>Sales csapatunk</Heading>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base text-muted lg:text-lg">Tapasztalt értékesítők, akik a te céged növekedéséért dolgoznak.</p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 80} className="flex flex-col gap-3 sm:gap-5">
              <MemberDialog
                name={m.name}
                role={m.role}
                bio={m.bio}
                photo={<Photo member={m} className="aspect-square rounded-2xl sm:aspect-4/5" />}
                dialogPhoto={<Photo member={m} className="aspect-square h-full" eager />}
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
