import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/lib/posts";
import { asset } from "@/lib/media";
import { homeSeo } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata = homeSeo;

export default function HomePage() {
  return (
    <>
      <section
        data-parallax-section
        className="relative min-h-[70vh] overflow-hidden"
      >
        <div
          data-parallax
          className="absolute -top-[12%] left-0 h-[124%] w-full will-change-transform"
        >
          <Image
            src={asset("/images/hunting-stand.jpg")}
            alt="Posed na okraji lesa, honitba Mysliveckého spolku Vrchovina Hvozdná"
            fill
            priority
            className="object-cover object-[72%_center]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-16 sm:px-6">
          <div
            data-reveal
            className="max-w-xl rounded-xl border border-pine/10 bg-paper/90 p-6 shadow-sm sm:p-10"
          >
            <div className="flex items-center gap-4">
              <Image
                src={asset("/images/logo.jpg")}
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-cover ring-1 ring-pine/20"
              />
              <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
                Myslivecký spolek · od roku 1992
              </p>
            </div>
            <h1 className="mt-3 font-serif text-4xl leading-[1.05] text-pine-deep sm:text-5xl">
              Krajina, zvěř a lidé z Vrchoviny
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {site.name} sdružuje myslivce k péči o honitbu v katastru obce
              Hvozdná. Stránky slouží sousedům, obci i členům — srozumitelně a
              včas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/aktuality"
                className="inline-flex min-h-11 items-center rounded-md bg-pine px-5 py-2 text-sm font-semibold text-paper hover:bg-pine-deep"
              >
                Číst aktuality
              </Link>
              <Link
                href="/honitba"
                className="inline-flex min-h-11 items-center rounded-md border border-pine px-5 py-2 text-sm font-semibold text-pine hover:bg-fog"
              >
                Honitba a bezpečnost
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div data-reveal>
          <h2 className="font-serif text-3xl text-pine-deep">Proč jsme tady</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Hlavní činností spolku je společný výkon práva myslivosti v najaté
            honitbě. Vedle lovu jde o údržbu areálu, ochranu zvěře a spolupráci
            s obcí při kulturních akcích.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="border-l-2 border-brass pl-4">
              Péče o honitbu v katastru Hvozdné
            </li>
            <li className="border-l-2 border-brass pl-4">
              Informace o honech pro návštěvníky lesa
            </li>
            <li className="border-l-2 border-brass pl-4">
              Areál otevřený i dalším spolkům a obci
            </li>
          </ul>
        </div>
        <Image
          src={asset("/images/deer.jpg")}
          alt="Srnec ve volné krajině, ilustrační fotografie zvěře"
          width={800}
          height={1000}
          data-reveal
          data-reveal-delay="0.08"
          className="h-[28rem] w-full rounded-xl object-cover"
        />
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div data-reveal className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-pine-deep">Aktuality</h2>
            <Link
              href="/aktuality"
              className="min-h-11 text-sm font-semibold text-pine underline-offset-4 hover:underline"
            >
              Všechny zprávy
            </Link>
          </div>
          <ul data-reveal-stagger className="mt-8 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="h-full overflow-hidden rounded-xl border border-pine/10 bg-fog">
                  <Link href={`/aktuality/${post.slug}`} className="block">
                    <Image
                      src={asset(post.image)}
                      alt={post.imageAlt}
                      width={1200}
                      height={800}
                      className="h-52 w-full object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xs tracking-wide text-brass uppercase">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-pine-deep">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-pine/15">
          <div className="hon-stripe h-2 w-full" aria-hidden="true" />
          <div className="bg-paper p-6 sm:p-10">
            <h2 className="font-serif text-3xl text-pine-deep">Sídlo spolku</h2>
            <p className="mt-3 text-muted">
              {fullAddress()}
              <br />
              IČO {site.ico}
              <br />
              {site.court}
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex min-h-11 items-center rounded-md bg-signal px-5 text-sm font-semibold text-paper hover:bg-pine-deep"
            >
              Kontakt a mapa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
