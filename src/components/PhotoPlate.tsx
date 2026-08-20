import Image from "next/image";
import { blurData } from "@/content/blurData";

/**
 * Plate width capped by viewport height as well as by column width.
 *
 * Width alone used to decide the height: a 3:2 plate in the 1344px column of a
 * 1440px laptop came out 896px tall — taller than the 900px screen — so the
 * frame was cut by the fold on open. The cap is applied to width rather than as
 * a max-height because max-height on a definite-width box overrides
 * aspect-ratio: the box would grow wider than the frame and object-cover would
 * crop the photograph itself. Capping width keeps the ratio exact, so the
 * photograph is never cropped — the plate just gets smaller and centres.
 *
 * min(100%, …) means the cap only binds on wide-but-short screens. Phones and
 * tall monitors are unaffected.
 */
export function widthCap(ratio: string) {
  const [w, h] = ratio.split("/").map(Number);
  if (!w || !h) return undefined;
  return `min(100%, calc(var(--plate-max-h) * ${(w / h).toFixed(4)}))`;
}

type PhotoPlateProps = {
  /** CSS aspect ratio, e.g. "16/9". */
  ratio: string;
  caption: string;
  /**
   * Path under /public. While it is absent the plate renders as a sized
   * placeholder, so layout stays final even for frames not yet shot.
   */
  src?: string;
  /** object-position, for plates whose ratio crops the source. */
  position?: string;
  /** Optional technical note shown at the right of the caption line. */
  meta?: string;
  /** Keep the caption as alt text but drop the visible caption line. */
  hideCaption?: boolean;
  /** Responsive sizes hint for the optimizer. */
  sizes?: string;
  /** Set on the first meaningful image so it is not lazy-loaded. */
  priority?: boolean;
  /**
   * Opt out of the viewport-height ceiling and fill the column instead. For
   * plates whose width is already set by the layout around them — the hero,
   * which aligns to the headline and the button, and the portrait, which is
   * sized by its grid column.
   */
  uncapped?: boolean;
  className?: string;
};

export function PhotoPlate({
  ratio,
  caption,
  src,
  position,
  meta,
  hideCaption = false,
  sizes = "100vw",
  priority = false,
  uncapped = false,
  className = "",
}: PhotoPlateProps) {
  const blur = src ? blurData[src] : undefined;

  return (
    /* The cap sits on the figure, not the frame, so the caption stays aligned. */
    <figure
      className={`mx-auto ${className}`}
      style={{ width: uncapped ? undefined : widthCap(ratio) }}
    >
      <div
        className="relative overflow-hidden bg-paper-sunk"
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes={sizes}
            priority={priority}
            placeholder={blur ? "blur" : "empty"}
            blurDataURL={blur}
            className="object-cover"
            style={position ? { objectPosition: position } : undefined}
          />
        ) : (
          <PlaceholderMark ratio={ratio} caption={caption} />
        )}
      </div>
      {hideCaption ? null : <PlateCaption caption={caption} meta={meta} />}
    </figure>
  );
}

/**
 * Click-to-play rather than an autoplaying loop: the reel is the one heavy asset
 * on the page and most visits arrive on mobile from a link.
 */
export function VideoPlate({
  ratio,
  caption,
  src,
  poster,
  meta,
  className = "",
}: {
  ratio: string;
  caption: string;
  src: string;
  poster: string;
  meta?: string;
  className?: string;
}) {
  return (
    <figure className={`mx-auto ${className}`} style={{ width: widthCap(ratio) }}>
      <div
        className="relative overflow-hidden bg-paper-sunk"
        style={{ aspectRatio: ratio }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          preload="none"
          controls
          playsInline
          aria-label={caption}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <PlateCaption caption={caption} meta={meta} />
    </figure>
  );
}

function PlateCaption({ caption, meta }: { caption: string; meta?: string }) {
  return (
    <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-label text-ink-faint">
      <span>{caption}</span>
      {meta ? <span className="shrink-0">{meta}</span> : null}
    </figcaption>
  );
}

/** Visible only for frames that have no photograph yet. */
function PlaceholderMark({ ratio, caption }: { ratio: string; caption: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center border border-line">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 11px, var(--color-line) 11px 12px)",
        }}
      />
      <span className="relative text-label text-ink-faint">
        {caption} · {ratio.replace("/", ":")}
      </span>
    </div>
  );
}
