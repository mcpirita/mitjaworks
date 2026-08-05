import { site } from "@/content/en";
import { SectionMark, Shell } from "./Shell";

const channels = [
  {
    key: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    key: site.contact.phoneLabel,
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    key: site.contact.instagramLabel,
    value: site.contact.instagram,
    href: site.contact.instagramHref,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="pt-28 pb-16 md:pt-40">
      <Shell>
        <SectionMark index={site.contact.index} label={site.contact.label} />

        <h2 className="mt-6 text-display text-[clamp(2.25rem,6vw,5rem)] font-medium">
          {site.contact.title}
        </h2>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft text-balance">
          {site.contact.lede}
        </p>

        {/* No form: an agency writes faster than it fills in fields. */}
        <ul className="mt-14 border-t border-line">
          {channels.map((channel) => (
            <li key={channel.key} className="border-b border-line">
              <a
                href={channel.href}
                className="group flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:gap-8"
                {...(channel.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="text-label text-ink-faint md:w-32">
                  {channel.key}
                </span>
                <span className="text-xl tracking-tight underline decoration-line decoration-1 underline-offset-[6px] transition-colors group-hover:decoration-ink md:text-2xl">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-20 flex flex-col gap-2 text-label text-ink-faint md:flex-row md:justify-between">
          <span>
            {site.brand} — {site.footer.rights}
          </span>
          <span>Tallinn, Estonia</span>
        </footer>
      </Shell>
    </section>
  );
}
