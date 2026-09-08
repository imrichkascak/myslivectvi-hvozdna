import Image from "next/image";
import Link from "next/link";
import { HomeGalleryCarousel } from "@/components/HomeGalleryCarousel";
import { homeCarouselPhotos } from "@/lib/gallery";
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
        className="relative overflow-hidden bg-fog"
      >
        <div className="relative aspect-[4/5] min-h-72 max-h-[28rem] w-full overflow-hidden bg-fog sm:aspect-[16/10] sm:max-h-[36rem] md:absolute md:inset-0 md:aspect-auto md:h-full md:max-h-none md:min-h-0">
          <div
            data-parallax
            className="absolute -top-[12%] left-0 h-[124%] w-full origin-top will-change-transform"
          >
            <Image
              src={asset("/images/jelen-ruj.jpg")}
              alt="Jelen v říji, řev v podzimní trávě, ilustrační fotografie honitby"
              fill
              priority
              className="object-cover object-[70%_40%] md:object-[62%_38%]"
              sizes="100vw"
            />
          </div>
          <div
            className="hero-veil pointer-events-none absolute inset-x-0 -bottom-px h-[40%] md:inset-0 md:bottom-0 md:h-full"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto -mt-10 flex max-w-6xl items-end bg-fog px-4 pb-16 sm:px-6 md:mt-0 md:min-h-[calc(100dvh-5.5rem)] md:bg-transparent md:pt-28 md:pb-20 lg:pb-24">
          <div data-parallax-copy className="max-w-xl will-change-transform">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase lg:hidden">
              Od roku 1992
            </p>
            <h1 className="mt-3 font-serif text-[2.15rem] leading-[1.08] text-pine-deep sm:text-5xl lg:mt-0">
              Myslivecký spolek
              <span className="block">Vrchovina Hvozdná</span>
            </h1>
            <p className="mt-3 font-serif text-xl leading-snug text-pine sm:mt-4 sm:text-2xl">
              Krajina, zvěř a lidé z Vrchoviny
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Sdružujeme myslivce k péči o honitbu v katastru obce Hvozdná.
              Stránky slouží sousedům, obci i členům — srozumitelně a včas.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/aktuality"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-pine px-5 py-2 text-sm font-semibold text-paper hover:bg-pine-deep sm:w-auto"
              >
                Číst aktuality
              </Link>
              <Link
                href="/honitba"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-pine px-5 py-2 text-sm font-semibold text-pine hover:bg-fog sm:w-auto"
              >
                Honitba a bezpečnost
              </Link>
            </div>
          </div>
          <p className="hidden text-xs font-semibold tracking-[0.18em] text-brass uppercase lg:absolute lg:right-6 lg:bottom-24 lg:block">
            Od roku 1992
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-[clamp(4.5rem,10vh,8rem)] pb-[clamp(5rem,11vh,8.5rem)] sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
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
            src={asset("/images/krmelec-zima.jpg")}
            alt="Srnčí zvěř u krmelce v zimě, ilustrace péče o honitbu"
            width={700}
            height={465}
            data-reveal
            data-reveal-delay="0.08"
            className="h-[28rem] w-full rounded-xl object-cover object-[40%_center]"
          />
      </section>

      <section className="overflow-x-clip bg-paper pt-[clamp(5rem,11vh,8.5rem)] pb-[clamp(5rem,11vh,8.5rem)]">
        <HomeGalleryCarousel photos={homeCarouselPhotos}>
          <div data-reveal>
            <h2 className="font-serif text-3xl text-pine-deep">Fotogalerie</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Snímky z honitby a areálu. Listujte šipkami nebo tahem.
            </p>
          </div>
        </HomeGalleryCarousel>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-[clamp(5rem,11vh,8.5rem)] pb-[clamp(5rem,11vh,8.5rem)] sm:px-6">
        <div data-reveal className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl leading-none text-pine-deep">
            Aktuality
          </h2>
          <Link
            href="/aktuality"
            className="inline-flex min-h-11 items-end text-sm font-semibold leading-none text-pine underline-offset-4 hover:underline"
          >
            Všechny zprávy
          </Link>
        </div>
        <ul data-reveal-stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="h-full overflow-hidden rounded-xl border border-pine/10 bg-paper">
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
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-[clamp(5rem,11vh,8.5rem)] pb-[clamp(5.5rem,12vh,9rem)] sm:px-6">
        <div data-reveal>
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
        </div>
      </section>
    </>
  );
}
