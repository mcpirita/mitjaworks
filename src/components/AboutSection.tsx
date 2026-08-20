import { site } from "@/content/en";
import { PhotoPlate } from "./PhotoPlate";
import { SectionMark, Shell } from "./Shell";

export function AboutSection() {
  return (
    <section id="about" className="pt-28 md:pt-40">
      <Shell>
        <SectionMark index={site.about.index} label={site.about.label} />

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="reveal md:col-span-4">
            <PhotoPlate
              src={site.about.portrait.src}
              ratio={site.about.portrait.ratio}
              caption={site.about.portrait.caption}
              sizes="(min-width: 768px) 33vw, 100vw"
              hideCaption
              uncapped
            />
            <p className="mt-6 text-lg font-medium tracking-tight">
              {site.about.signature}
            </p>
            <p className="text-label text-ink-faint">{site.about.role}</p>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-display text-[clamp(1.75rem,3.5vw,3rem)] font-medium">
              {site.about.title}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {site.about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[58ch] text-lg leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
