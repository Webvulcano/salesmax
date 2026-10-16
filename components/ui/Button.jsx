export default function Button({ href = "#kapcsolat", type, children = "Kérj ajánlatot", className = "" }) {
  const classes = `inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-12 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`;

  if (type) {
    return (
      <button type={type} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
