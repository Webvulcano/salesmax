// Szekció-keret + közös fejléc elemek. dark=true: a navbar világos (fehér szöveg) módra vált fölötte.
export function Section({ id, dark = false, className = "", children }) {
  return (
    <section id={id} data-nav={dark ? "dark" : undefined} className={`relative isolate w-full px-4 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-content ${className}`}>{children}</div>;
}

// Kis uppercase címke (szekció-eyebrow)
export function Eyebrow({ light = false, className = "", children }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-sm font-medium uppercase tracking-label ${light ? "text-white/70" : "text-muted"} ${className}`}
    >
      {children}
    </p>
  );
}

const headingSizes = {
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  md: "text-2xl sm:text-3xl lg:text-4xl",
};

// Nagy, vékony headline — szoros betűköz
export function Heading({ as: Tag = "h2", size = "lg", light = false, className = "", children }) {
  return (
    <Tag
      className={`font-light tracking-heading text-balance ${headingSizes[size]} ${light ? "text-white" : "text-ink"} ${className}`}
    >
      {children}
    </Tag>
  );
}
