/**
 * Fixed architectural rules running the full height of the page, behind all
 * content — the drafting-grid motif from the reference. Decorative only.
 */
export function GuideRules() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="hidden h-full w-full max-w-[1600px] border-x border-line md:block" />
    </div>
  );
}
