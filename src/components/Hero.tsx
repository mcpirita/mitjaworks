import { site } from "@/content/en";
import { PhotoPlate } from "./PhotoPlate";
import { Shell } from "./Shell";

export function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40">
      <Shell>
        <p
          className="rise text-label text-ink-faint"
          style={{ animationDelay: "0.05s" }}
        >
          {site.hero.label}
        </p>

        <h1 className="mt-6 max-w-[18ch] text-display text-[clamp(2.75rem,8vw,7rem)] font-medium">
          <span
            className="rise block text-ink-soft"
            style={{ animationDelay: "0.15s" }}
          >
            {site.hero.titleTop}
          </span>
          <span className="rise block" style={{ animationDelay: "0.25s" }}>
            {site.hero.titleBottom}
          </span>
        </h1>

        <div
          className="rise mt-10 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft text-balance">
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

        <div className="rise mt-12 md:mt-16" style={{ animationDelay: "0.55s" }}>
          <PhotoPlate
            src={site.hero.frame.src}
            ratio={site.hero.frame.ratio}
            caption={site.hero.frame.caption}
            sizes="(min-width: 1600px) 1520px, 100vw"
            priority
          />
        </div>
      </Shell>
    </section>
  );
}
