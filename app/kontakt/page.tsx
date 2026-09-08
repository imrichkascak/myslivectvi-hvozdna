import { ContactForm } from "@/components/ContactForm";
import { contactSeo } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata = contactSeo;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <h1 data-reveal className="font-serif text-4xl text-pine-deep">
        Kontakt
      </h1>
      <p data-reveal className="mt-3 max-w-2xl text-muted">
        Napište výboru, nebo nás najděte na adrese z rejstříku. Telefon
        zveřejníme po schůzce s vedením.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <section data-reveal className="flex flex-col">
          <h2 className="font-serif text-2xl text-pine-deep">Napsat spolku</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Ozveme se na e-mail, který uvedete.
          </p>
          <div className="mt-4 flex-1">
            <ContactForm />
          </div>
        </section>

        <section data-reveal className="flex min-h-[28rem] flex-col lg:min-h-0">
          <h2 className="font-serif text-2xl text-pine-deep">Sídlo a mapa</h2>
          <div className="relative mt-4 min-h-[22rem] flex-1 overflow-hidden rounded-xl border border-pine/15 lg:min-h-[28rem]">
            <iframe
              title={`Mapa sídla spolku, ${fullAddress()}`}
              src={site.mapEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-x-0 bottom-0 bg-paper/92 p-4 backdrop-blur-sm">
              <address className="not-italic text-sm leading-relaxed text-ink">
                {site.name}
                <br />
                {fullAddress()}
              </address>
              <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                <div>
                  <dt className="inline">IČO </dt>
                  <dd className="inline font-medium text-ink">{site.ico}</dd>
                </div>
                <div>
                  <dt className="sr-only">Rejstřík</dt>
                  <dd className="inline">{site.court}</dd>
                </div>
              </dl>
              <p className="mt-2 text-sm">
                <a
                  className="text-pine underline underline-offset-2"
                  href={site.mapLink}
                >
                  Otevřít větší mapu na OpenStreetMap
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
