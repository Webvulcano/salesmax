import { ArrowUpRight } from "lucide-react";

// Pill gomb (Foundation / Neverhack minta). variant: primary (arany) | light (áttetsző, sötét háttéren) | outline (világos háttéren)
const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  light: "bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-md hover:bg-white/20",
  outline: "text-ink ring-1 ring-inset ring-ink/15 hover:ring-ink/40",
};

const arrowVariants = {
  primary: "bg-white/20",
  light: "bg-white/15",
  outline: "bg-primary text-white",
};

export default function Button({
  href = "#kapcsolat",
  type,
  disabled,
  variant = "primary",
  arrow = true,
  onClick,
  children = "Kérj ajánlatot",
  className = "",
}) {
  const classes = `group inline-flex shrink-0 items-center justify-center gap-3 rounded-full py-2 pl-6 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60 ${arrow ? "pr-2" : "pr-6"} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="py-1">{children}</span>
      {arrow && (
        <span
          aria-hidden
          className={`flex size-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${arrowVariants[variant]}`}
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (type) {
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {content}
    </a>
  );
}
