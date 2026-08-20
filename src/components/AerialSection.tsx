import { site } from "@/content/en";
import { PhotoPlate, VideoPlate, widthCap } from "./PhotoPlate";
import { Shell } from "./Shell";

/**
 * The one inverted section on the page. Drone work is the differentiator, so it
 * gets the visual break rather than being another row of frames.
 */
export function AerialSection() {
  const { reel, frames, credit } = site.aerial;

  return (
    <section
      id="aerial"
      className="mt-28 bg-ink py-24 text-paper md:mt-40 md:py-32"
    >
      <Shell>
        <div className="flex items-center gap-3 text-label text-paper/60">
          <span>{site.aerial.index}</span>
          <span className="h-px w-8 bg-paper/20" />
          <span>{site.aerial.label}</span>
        </div>

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-display text-[clamp(2rem,5vw,4rem)] font-medium">
            {site.aerial.title}
          </h2>
          <p className="max-w-[42ch] leading-relaxed text-paper/60 text-balance">
            {site.aerial.lede}
          </p>
        </div>

        {/* Re-point the shared tokens so plates read correctly on ink. */}
        <div
          style={
            {
              "--color-paper-sunk": "#1c1a17",
              "--color-line": "#2f2c28",
              "--color-ink-faint": "#8b857c",
            } as React.CSSProperties
          }
        >
          <div
            className="reveal mx-auto mt-12 md:mt-16"
            style={{ width: widthCap(reel.ratio) }}
          >
            <VideoPlate
              src={reel.src}
              poster={reel.poster}
              ratio={reel.ratio}
              caption={reel.caption}
              meta={reel.meta}
            />
          </div>

          <div
            className="reveal mx-auto mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
            style={{ width: widthCap(reel.ratio) }}
          >
            {frames.map((frame) => (
              <PhotoPlate
                key={frame.src}
                src={frame.src}
                ratio={frame.ratio}
                caption={frame.caption}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>

          <p
            className="mx-auto mt-6 text-label text-ink-faint"
            style={{ width: widthCap(reel.ratio) }}
          >
            {credit}
          </p>
        </div>
      </Shell>
    </section>
  );
}
