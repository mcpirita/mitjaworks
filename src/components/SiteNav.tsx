import { site } from "@/content/en";

export type NavLink = {
  href: string;
  label: string;
};

type SiteNavProps = {
  /** Section or page links. Empty on pages that have nothing to jump to. */
  links: NavLink[];
  /** Where the brand leads: the top of this page, or back to the home page. */
  brandHref: string;
  contactHref: string;
};

/**
 * Floating pill navigation. Deliberately JS-free: on small screens the section
 * links collapse and only the brand and the contact action remain, which keeps
 * the page interactive the moment the HTML lands.
 *
 * Every link comes from the page, because the anchors differ per page.
 */
export function SiteNav({ links, brandHref, contactHref }: SiteNavProps) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-gutter">
      <nav className="flex items-center gap-1 rounded-full border border-line bg-paper/80 p-1.5 pl-5 shadow-[0_1px_3px_rgba(18,17,15,0.04),0_8px_24px_-12px_rgba(18,17,15,0.15)] backdrop-blur-md">
        <a
          href={brandHref}
          className="mr-2 text-sm font-medium tracking-tight whitespace-nowrap"
        >
          {site.brand}
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contactHref}
          className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
        >
          {site.nav.contact}
        </a>
      </nav>
    </header>
  );
}
