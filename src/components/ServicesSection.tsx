import { site } from "@/content/en";
import { SectionMark, Shell } from "./Shell";

export function ServicesSection() {
  return (
    <section id="services" className="pt-28 md:pt-40">
      <Shell>
        <SectionMark index={site.services.index} label={site.services.label} />
        <h2 className="mt-6 text-display text-[clamp(2rem,5vw,4rem)] font-medium">
          {site.services.title}
        </h2>

        <ul className="mt-14 border-t border-line">
          {site.services.items.map((item, i) => (
            <li
              key={item.name}
              className="reveal grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="text-label text-ink-faint md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium tracking-tight md:col-span-4 md:text-2xl">
                {item.name}
              </h3>
              <p className="max-w-[52ch] leading-relaxed text-ink-soft md:col-span-7">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {site.services.terms.map((term) => (
            <div key={term.key}>
              <dt className="text-label text-ink-faint">{term.key}</dt>
              <dd className="mt-2 text-lg font-medium tracking-tight text-balance">
                {term.value}
              </dd>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}
