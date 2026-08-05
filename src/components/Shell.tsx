import type { ReactNode } from "react";

/** Content column, aligned to the fixed guide rules behind the page. */
export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-gutter md:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** Small monospaced section marker: index plus label. */
export function SectionMark({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-label text-ink-faint">
      <span>{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
  );
}
