// Cím arany kiemeléssel a CMS-ből: <k>.title_start + <k>.title_highlight + <k>.title_end (cms.manifest.js highlightTitle).
// Külön span-ok, hogy a szerkesztőben mindhárom rész kattintható legyen.
export default function HighlightTitle({ cms, k, highlightClass = "text-accent" }) {
  return (
    <>
      <span {...cms.attr(`${k}.title_start`)}>{cms.text(`${k}.title_start`)}</span>{" "}
      <span className={highlightClass} {...cms.attr(`${k}.title_highlight`)}>
        {cms.text(`${k}.title_highlight`)}
      </span>{" "}
      <span {...cms.attr(`${k}.title_end`)}>{cms.text(`${k}.title_end`)}</span>
    </>
  );
}
