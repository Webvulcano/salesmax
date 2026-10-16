import Image from "next/image";

// Teljes szélességű szekció, opcionális háttérképpel + 60%-os fekete overlay-jel (Figma minta).
export function Section({ id, bgImage, className = "", children }) {
  return (
    <section id={id} className={`relative isolate w-full scroll-mt-4 px-4 sm:px-8 lg:px-20 ${className}`}>
      {bgImage && (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src={bgImage} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      {children}
    </section>
  );
}

export function SectionHeading({ title, text, light = false, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-5 text-center ${light ? "text-white" : "text-black"} ${className}`}>
      <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
      {text && <p className="max-w-160 text-base tracking-body">{text}</p>}
    </div>
  );
}
