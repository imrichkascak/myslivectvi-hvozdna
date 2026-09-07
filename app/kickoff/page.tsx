import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kick-off: návrh webu",
  description:
    "Podklad ke schůzce s vedením Mysliveckého spolku Vrchovina Hvozdná. Návrh struktury webu a otevřené otázky.",
  robots: { index: false, follow: false },
};

const questions = [
  "Které telefonní číslo a e-mail smíme zveřejnit?",
  "Mají se na webu objevovat termíny honů, brigád, plesů a mysliveckých zkoušek?",
  "Chcete galerii z akcí, nebo jen textové aktuality?",
  "Má být veřejný seznam členů výboru, nebo jen kontakt na předsedu / hospodáře?",
  "Potřebujete přihlášku do spolku, stanovy ke stažení, nebo interní zónu?",
  "Jaký je vztah k obci Hvozdná a k Českomoravské myslivecké jednotě — odkazy, společné akce?",
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
        Kick-off: co může web umět
      </h1>
      <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
        Toto není finální podoba. Je to pracovní ukázka, aby vedení spolku
        vidělo strukturu, tón a možné stránky ještě před schůzkou. Veřejné
        údaje bereme z rejstříku; osobní adresy členů neuvádíme.
      </p>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Navržené stránky
      </h2>
      <ol data-reveal className="mt-4 list-decimal space-y-2 pl-5 text-muted">
        <li>
          <Link href="/" className="text-pine underline">
            Úvod
          </Link>{" "}
          — kdo jsme, poslední zprávy, sídlo
        </li>
        <li>
          <Link href="/o-nas" className="text-pine underline">
            O spolku
          </Link>{" "}
          — historie, činnost, výbor
        </li>
        <li>
          <Link href="/honitba" className="text-pine underline">
            Honitba
          </Link>{" "}
          — bezpečnost v lese, péče o krajinu
        </li>
        <li>
          <Link href="/aktuality" className="text-pine underline">
            Aktuality
          </Link>{" "}
          — hon 15. 11. 2025 a nákup vybavení z MAS
        </li>
        <li>
          <Link href="/kontakt" className="text-pine underline">
            Kontakt
          </Link>{" "}
          — adresa a mapa
        </li>
      </ol>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Otázky na schůzku
      </h2>
      <ul data-reveal-stagger className="mt-4 space-y-3">
        {questions.map((item) => (
          <li key={item} className="border border-pine/10 bg-paper px-4 py-3">
            {item}
          </li>
        ))}
      </ul>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Další krok
      </h2>
      <p data-reveal className="mt-4 leading-relaxed text-muted">
        Po schůzce upravíme texty, doplníme skutečné kontakty a fotografie z
        honitby a nasadíme web na vlastní doménu, pokud si ji spolek zvolí.
      </p>
    </article>
  );
}
