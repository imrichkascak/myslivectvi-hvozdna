import Link from "next/link";
import { kickoffSeo } from "@/lib/seo";

export const metadata = kickoffSeo;

const pages = [
  {
    href: "/",
    label: "Úvod",
    detail:
      "jelen v říji, péče o honitbu, karusel fotogalerie, aktuality a sídlo",
  },
  {
    href: "/o-nas",
    label: "O nás",
    detail: "vznik 1992, činnost, výbor podle rejstříku (jména a funkce)",
  },
  {
    href: "/honitba",
    label: "Honitba",
    detail:
      "bezpečnost v den honu, kde revír leží, roční cyklus a pravidla pro návštěvníky",
  },
  {
    href: "/fotogalerie",
    label: "Fotogalerie",
    detail: "lightbox, stejné snímky jako na úvodu",
  },
  {
    href: "/aktuality",
    label: "Aktuality",
    detail: "hon 15. 11. 2025 a nákup vybavení z MAS",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    detail: "formulář na výbor, sídlo a mapa OpenStreetMap",
  },
] as const;

const done = [
  "Veřejný výbor: jména a funkce z rejstříku, bez osobních adres.",
  "Termíny honů a zprávy z areálu patří do aktualit, ne na stránku Honitba.",
  "Fotogalerie i textové aktuality — obojí.",
  "Kontaktní formulář (Resend). Telefon zatím nezveřejňujeme.",
  "Odkaz na facebookovou skupinu spolku.",
  "Ukázka běží na myslivectvi-hvozdna.vercel.app. Kick-off má noindex.",
];

const questions = [
  "Které telefonní číslo a veřejný e-mail smíme uvést vedle formuláře?",
  "Jsou jména a funkce ve výboru aktuální, nebo je potřeba opravit?",
  "Máme nahradit ilustrační fotky (Unsplash a podobně) snímky z honitby?",
  "Potřebujete přihlášku do spolku, stanovy ke stažení, nebo interní zónu?",
  "Jaký je vztah k obci Hvozdná a k Českomoravské myslivecké jednotě — odkazy, společné akce?",
  "Chcete vlastní doménu, nebo zatím stačí adresa na Vercelu?",
];

export default function KickoffPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p
        data-reveal
        className="text-xs font-semibold tracking-[0.18em] text-brass uppercase"
      >
        Interní podklad
      </p>
      <h1 data-reveal className="mt-3 font-serif text-4xl text-pine-deep">
        Kick-off: stav webu před schůzkou
      </h1>
      <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
        Ukázka už není prázdná kostra. Má tón, strukturu a stránky, které
        sousedé i členové dokážou použít. Stále to není finální provoz: chybí
        telefon, vlastní fotky a rozhodnutí o doméně. Osobní adresy členů
        neuvádíme.
      </p>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Co už web umí
      </h2>
      <ul data-reveal-stagger className="mt-4 space-y-3">
        {done.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-pine/10 bg-paper px-4 py-3 text-muted"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Stránky
      </h2>
      <ol data-reveal className="mt-4 list-decimal space-y-2 pl-5 text-muted">
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href} className="text-pine underline">
              {page.label}
            </Link>{" "}
            — {page.detail}
          </li>
        ))}
      </ol>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Otázky na schůzku
      </h2>
      <ul data-reveal-stagger className="mt-4 space-y-3">
        {questions.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-pine/10 bg-paper px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Další krok
      </h2>
      <p data-reveal className="mt-4 leading-relaxed text-muted">
        Po schůzce doplníme skutečné kontakty, ověříme výbor, vyměníme
        ilustrační fotografie za snímky z honitby a nasadíme web na vlastní
        doménu, pokud si ji spolek zvolí.
      </p>
    </article>
  );
}
