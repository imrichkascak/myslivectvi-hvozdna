import Link from "next/link";
import { fullAddress, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-pine/15 bg-pine-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
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
      </div>
      <p className="border-t border-paper/15 px-4 py-4 text-center text-xs text-paper/70">
        Ukázkový web pro schůzku s vedením. Fotografie lesa a zvěře: Unsplash.
        Logo a foto vybavení: MS Vrchovina Hvozdná.
      </p>
    </footer>
  );
}
