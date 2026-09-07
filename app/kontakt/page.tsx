import type { Metadata } from "next";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt na Myslivecký spolek Vrchovina Hvozdná, sídlo Myslivecká 38, Hvozdná 763 10.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 data-reveal className="font-serif text-4xl text-pine-deep">
        Kontakt
      </h1>
      <p data-reveal className="mt-4 max-w-2xl text-muted">
        Telefon a e-mail doplníme po schůzce s vedením. Zatím zveřejňujeme sídlo
        z veřejného rejstříku.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section data-reveal>
          <h2 className="font-serif text-2xl text-pine-deep">Sídlo</h2>
          <address className="mt-4 not-italic leading-relaxed text-muted">
            {site.name}
            <br />
            {fullAddress()}
            <br />
            {site.address.country}
          </address>
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-muted">IČO</dt>
            <dd className="font-medium">{site.ico}</dd>
            <dt className="text-muted">Rejstřík</dt>
            <dd className="font-medium">{site.court}</dd>
            <dt className="text-muted">Vznik</dt>
            <dd className="font-medium">28. 7. 1992</dd>
          </dl>
        </section>

        <section data-reveal>
          <h2 className="font-serif text-2xl text-pine-deep">Mapa</h2>
          <iframe
            title={`Mapa sídla spolku, ${fullAddress()}`}
            src={site.mapEmbed}
            className="mt-4 h-80 w-full border border-pine/15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-3 text-sm">
            <a
              className="text-pine underline underline-offset-2"
              href={site.mapLink}
            >
              Otevřít větší mapu na OpenStreetMap
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
