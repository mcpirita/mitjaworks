import { site, work } from "@/content/en";
import { PhotoPlate, widthCap } from "./PhotoPlate";
import { SectionMark, Shell } from "./Shell";

export function WorkSection() {
  return (
    <section id="work" className="pt-28 md:pt-40">
      <Shell>
        <SectionMark index={site.work.index} label={site.work.label} />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-display text-[clamp(2rem,5vw,4rem)] font-medium">
            {site.work.title}
          </h2>
          <p className="text-label text-ink-faint">{site.work.note}</p>
        </div>
      </Shell>

      <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-40">
        {work.map((item) => {
          const [lead, ...rest] = item.frames;
          /* An odd tail would leave a half-empty row; let the last frame run full width. */
          const tailSpansFull = rest.length % 2 === 1;

          return (
            <article key={item.slug}>
              <Shell>
                {/*
                 * The case is bound to the width of its own lead plate. Once the
                 * lead is capped by viewport height it can end up narrower than
                 * the two-up row beneath it, which reads as the lead being the
                 * lesser frame.
                 */}
                <div
                  className="mx-auto"
                  style={{ width: widthCap(lead.ratio) }}
                >
                  <header className="flex flex-col gap-3 border-b border-line pb-5 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {item.name}
                      </h3>
                      <span className="text-label text-ink-faint">
                        {item.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-label text-ink-faint">
                      <span>{item.type}</span>
                      <span>{item.tags.join(" · ")}</span>
                      <span>{item.year}</span>
                    </div>
                  </header>

                  <div className="reveal mt-8">
                    <PhotoPlate
                      src={lead.src}
                      ratio={lead.ratio}
                      caption={lead.caption}
                      position={lead.position}
                      sizes="(min-width: 1600px) 1520px, 100vw"
                    />
                  </div>

                  <div className="reveal mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {rest.map((frame, i) => {
                      const isLast = i === rest.length - 1;
                      const full = tailSpansFull && isLast;

                      return (
                        <PhotoPlate
                          key={frame.src}
                          src={frame.src}
                          ratio={frame.ratio}
                          caption={frame.caption}
                          position={frame.position}
                          className={full ? "sm:col-span-2" : undefined}
                          sizes={
                            full
                              ? "(min-width: 1600px) 1520px, 100vw"
                              : "(min-width: 640px) 50vw, 100vw"
                          }
                        />
                      );
                    })}
                  </div>

                  {item.credit ? (
                    <p className="mt-6 text-label text-ink-faint">
                      {item.credit}
                    </p>
                  ) : null}
                </div>
              </Shell>
            </article>
          );
        })}
      </div>
    </section>
  );
}
