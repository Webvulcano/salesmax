// Strukturált adat (schema.org JSON-LD) — Google / AI keresők ebből olvassák a cég- és GYIK-adatokat
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
