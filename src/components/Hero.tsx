import { site } from "@/content/en";
import { PhotoPlate } from "./PhotoPlate";
import { Shell } from "./Shell";

export function Hero() {
  return (
    <section id="top" className="pt-28 md:pt-32">
      <Shell>
        <p
          className="rise text-label text-ink-faint"
          style={{ animationDelay: "0.05s" }}
        >
          {site.hero.label}
        </p>

        {/* Two lines held apart across the column: the second sits flush right. */}
        <h1 className="mt-5 text-display text-[clamp(2.5rem,6.4vw,5.5rem)] font-medium">
          <span
            className="rise block text-ink-soft"
            style={{ animationDelay: "0.15s" }}
          >
            {site.hero.titleTop}
          </span>
          <span
            className="rise block md:text-right"
            style={{ animationDelay: "0.25s" }}
          >
            {site.hero.titleBottom}
          </span>
        </h1>

        {/*
          * The photograph follows the headline directly. It used to sit below
          * the lede and the buttons, which spent about 200px before it and
          * pushed it under the fold on a laptop — the site opened on a band of
          * sky. What the frame gives up in reading order it wins back by being
          * the first thing an agency actually sees.
          */}
        <div className="rise mt-8 md:mt-10" style={{ animationDelay: "0.4s" }}>
          <PhotoPlate
            src={site.hero.frame.src}
            ratio={site.hero.frame.ratio}
            caption={site.hero.frame.caption}
            sizes="(min-width: 1600px) 1520px, 100vw"
            priority
          />
        </div>

        {/*
          * Delivery time and single-visit coverage stay on the page: after the
          * photographs themselves they are what an agency weighs first. Moved,
          * not dropped.
          */}
        <div
          className="rise mt-8 flex flex-col gap-8 border-t border-line pt-6 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "0.55s" }}
        >
          <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed text-ink-soft text-balance">
            {site.hero.lede}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line px-4 py-2 text-label text-ink-soft">
              {site.hero.delivery}
            </span>
            <a
              href="#contact"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              {site.hero.cta}
            </a>
          </div>
        </div>
      </Shell>
    </section>
  );
}
