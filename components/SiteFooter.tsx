import Link from "next/link";
import { fullAddress, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-pine/15 bg-pine-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl">{site.shortName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/80">
            Péče o zvěř a krajinu v honitbě Hvozdná od roku 1992.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Sídlo
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {fullAddress()}
            <br />
            IČO {site.ico}
            <br />
            {site.court}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Navigace
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="underline-offset-2 hover:underline" href="/aktuality">
                Aktuality
              </Link>
            </li>
            <li>
              <Link className="underline-offset-2 hover:underline" href="/kontakt">
                Kontakt
              </Link>
            </li>
            <li>
              <Link className="underline-offset-2 hover:underline" href="/kickoff">
                Kick-off stránka
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Sociální sítě
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.socials.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-2 underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.label === "Facebook" ? <FacebookIcon /> : null}
                  {item.label}
                  <span className="sr-only"> (otevře se v novém okně)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-paper/15 px-4 py-4 text-center text-xs text-paper/70">
        Ukázkový web pro schůzku s vedením. Fotografie: Unsplash. Logo a foto
        vybavení: MS Vrchovina Hvozdná.
      </p>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
    </svg>
  );
}
