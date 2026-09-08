import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/media";
import { honitbaSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = honitbaSeo;

const toc = [
  { href: "#hon", label: "Když probíhá hon" },
  { href: "#kde", label: "Kde honitba leží" },
  { href: "#co-je", label: "Co je honitba" },
  { href: "#rok", label: "Co děláme během roku" },
  { href: "#navstevnici", label: "Pro návštěvníky lesa" },
] as const;

export default function HonitbaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
        Katastr obce Hvozdná · Vizovicko
      </p>
      <h1 className="mt-3 font-serif text-4xl text-pine-deep">
        Honitba Hvozdná
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Revír leží v katastru obce Hvozdná. {site.shortName} ho má v nájmu a
        pečuje o zvěř, lesní okraje i areál, který mohou využívat i další spolky
        a obec.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Stránka je pro sousedy a lidi, kteří sem chodí na houby, na kolo nebo
        jen projít. Nejdřív to, co potřebujete vědět hned. Pod tím je, jak
        honitba vlastně funguje, když zrovna neprobíhá hon.
      </p>

      <nav
        aria-label="Obsah stránky"
        className="mt-8 rounded-xl border border-pine/10 bg-paper p-5"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">
          Na této stránce
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {toc.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-pine underline-offset-2 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="hon"
        className="mt-12 scroll-mt-28 overflow-hidden rounded-xl border border-pine/15"
      >
        <div className="hon-stripe h-2 w-full" aria-hidden="true" />
        <div className="bg-paper p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-signal">Když probíhá hon</h2>
          <p className="mt-3 leading-relaxed text-muted">
            V den společného honu je pohyb v revíru nebezpečný. Prosíme
            turisty, houbaře i cyklisty, aby se v oznámeném čase v honitbě
            nezdržovali. Nejde o formalitu. Střela dojde dál, než si člověk
            myslí, a z terénu nevidíte, kde kdo stojí.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Termín, hodiny a o jaký lov jde, dáváme do{" "}
            <Link
              href="/aktuality"
              className="font-medium text-pine underline-offset-2 hover:underline"
            >
              aktualit
            </Link>
            . Občas to napíšeme i do{" "}
            <a
              href={site.socials[0].href}
              className="font-medium text-pine underline-offset-2 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              facebookové skupiny
            </a>
            <span className="sr-only"> (otevře se v novém okně)</span>
            . Když si nejste jistí, ten den les vynechte, nebo se zeptejte
            výboru.
          </p>
        </div>
      </section>

      <Image
        src={asset("/images/pine-stand.jpg")}
        alt="Hustý jehličnatý porost v honitbě"
        width={1600}
        height={900}
        className="mt-12 h-80 w-full rounded-xl object-cover"
      />

      <section id="kde" className="mt-12 scroll-mt-28">
        <h2 className="font-serif text-2xl text-pine-deep">
          Kde honitba leží
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Hvozdná je na Vizovicku, mezi Zlínem a Vizovicemi. Honitba se váže k
          katastru obce: lesní komplexy, okraje polí, cesty, po kterých lidé
          běžně chodí. Hranice v terénu nejsou vždycky označené u každé
          odbočky. Když jste v lese nad obcí, jste s velkou pravděpodobností v
          honitbě.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Sídlo spolku je na adrese {site.address.street}. To je právní adresa
          a zázemí areálu, ne brána, kterou se do revíru „vchází“. Areál
          udržujeme i proto, aby ho mohla použít obec nebo jiný spolek, nejen
          myslivci.
        </p>
      </section>

      <section id="co-je" className="mt-12 scroll-mt-28">
        <h2 className="font-serif text-2xl text-pine-deep">
          Co je honitba, když to není jen les
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Honitba je v českém právu souvislé území, na kterém se vykonává právo
          myslivosti. Uživatel honitby, u nás myslivecký spolek, má o zvěř
          pečovat. Lov je část práce, která je vidět. Zbytek je údržba,
          krmení, dohoda s obcí a hlídání, aby zvěř i lidé v krajině vydrželi
          vedle sebe.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Proto v honitbě potkáte krmelce, posedy, krmelné plochy a občas i
          místo, které vypadá „uklizenější“, než by les sám od sebe byl. Není
          to dekorace. Je to provoz.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Spolek honitbu nenajímá proto, aby z ní udělal uzavřený park. Les
          zůstává přístupný. Výjimkou jsou dny, kdy probíhá společný hon, a
          slušnost ve zbytku roku: nerušit zvěř u krmelce, nevylézat na posed,
          nenechávat psa volně u mláďat.
        </p>
      </section>

      <figure className="mt-12">
        <Image
          src={asset("/images/hunting-stand.jpg")}
          alt="Posed v lesním porostu"
          width={1280}
          height={900}
          className="h-80 w-full rounded-xl object-cover object-center"
        />
        <figcaption className="mt-2 text-sm text-muted">
          Posed je pracovní místo, ne rozhledna. Vylézat na něj je nebezpečné i
          mimo hon.
        </figcaption>
      </figure>

      <section id="rok" className="mt-12 scroll-mt-28">
        <h2 className="font-serif text-2xl text-pine-deep">
          Co v honitbě děláme během roku
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Společný hon je pár dní v roce. Mezi tím se seče areál, opravují
          krmelce, krmí v zimě a hlídá, aby černá zvěř neničila pole víc, než
          krajina unese. Níže je hrubý kalendář, ne jízdní řád. Počasí a zvěř
          se ho nedrží.
        </p>

        <dl className="mt-8 space-y-6">
          <div className="border-l-2 border-brass pl-4">
            <dt className="font-serif text-xl text-pine-deep">Jaro</dt>
            <dd className="mt-2 leading-relaxed text-muted">
              Rodí se mláďata, hlavně srnčí. Pes bez vodítka u srnčete dokáže
              napáchat víc škody než celý hon. V terénu se uklízí po zimě,
              kontrolují se posedy a cesty.
            </dd>
          </div>
          <div className="border-l-2 border-brass pl-4">
            <dt className="font-serif text-xl text-pine-deep">Léto</dt>
            <dd className="mt-2 leading-relaxed text-muted">
              Vysoká tráva, sečení areálu, údržba přístupových cest. Zvěř je v
              porostu, takže ji návštěvník často nevidí, i když je kousek od
              cesty.
            </dd>
          </div>
          <div className="border-l-2 border-brass pl-4">
            <dt className="font-serif text-xl text-pine-deep">Podzim</dt>
            <dd className="mt-2 leading-relaxed text-muted">
              Říje, kratší dny, častější společné hony. Na Vizovicku jde často
              o černou zvěř, která škodí na polích. Právě proto je podzim
              období, kdy se vyplatí před výletem kouknout do aktualit.
            </dd>
          </div>
          <div className="border-l-2 border-brass pl-4">
            <dt className="font-serif text-xl text-pine-deep">Zima</dt>
            <dd className="mt-2 leading-relaxed text-muted">
              Krmení u krmelců, stopy ve sněhu, klid. Zvěř se stahuje k
              potravě. Proto u krmelce nestůjte s foťákem na dva metry a
              nenechávejte tam vlastní jablka nebo pečivo. Špatné krmivo
              zvěři škodí.
            </dd>
          </div>
        </dl>
      </section>

      <figure className="mt-12">
        <Image
          src={asset("/images/krmelec-zima.jpg")}
          alt="Srnčí zvěř u krmelce v zimě"
          width={700}
          height={465}
          className="h-72 w-full rounded-xl object-cover object-[40%_center]"
        />
        <figcaption className="mt-2 text-sm text-muted">
          Krmelec v zimě. Není to krmítko pro kolemjdoucí.
        </figcaption>
      </figure>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-pine-deep">
          Jak probíhá společný hon
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Společný hon je naplánovaná akce, ne volný pohyb se zbraní po lese.
          Část lidí má určená stanoviště, část terénem prochází a zvěř se dá
          do pohybu. Proto nejde „jen na chvilku odbočit z cesty“. V tu chvíli
          jste v prostoru, který má svůj řád, a vy o něm nevíte.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Individuální lov (posed, čekaná) probíhá jindy. Celý revír se kvůli
          němu obvykle neuzavírá. I tehdy platí totéž: posed není herna, krmelec
          není pódium, pes patří k noze.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Když v dálce uslyšíte výstřely, nechoďte za zvukem. Otočte se k obci
          nebo na známou cestu a honitbu opusťte.
        </p>
      </section>

      <section id="navstevnici" className="mt-12 scroll-mt-28">
        <h2 className="font-serif text-2xl text-pine-deep">
          Pro houbaře, turisty a cyklisty
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Honitba není zakázaná zóna. Je to krajina, kterou sdílíme. Následující
          body nejsou zákoník. Jsou to věci, které ušetří zvěři stres a vám
          nedorozumění.
        </p>
        <ul className="mt-6 space-y-3 text-muted">
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Před víkendem v honitbě se podívejte do aktualit, jestli neběží
            hon.
          </li>
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Psa mějte pod kontrolou, na jaře zvlášť. Srnče leží v trávě a
            neuteče.
          </li>
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Na posed nevylézejte. Je to soukromé zařízení a pád z něj je
            zbytečný úraz.
          </li>
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Zvěř nekrmte. Jablka, chleba ani kuchyňské zbytky krmelci
            nepatří.
          </li>
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Značení, záznamy a krmná zařízení nestrhávejte. Nejsou to suvenýry.
          </li>
          <li className="rounded-lg border border-pine/10 bg-paper px-4 py-3">
            Odpadky si odneste. I igelit u krmelce zvěř sežere.
          </li>
        </ul>
      </section>

      <section
        className="mt-16 rounded-xl border border-pine/15 bg-paper p-6 sm:p-8"
      >
        <h2 className="font-serif text-2xl text-pine-deep">
          Kdy bude další hon
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Termíny nedáváme na tuhle stránku natrvalo, protože se mění. Živé
          oznámení je v aktualitách. Když potřebujete vědět něco konkrétního k
          honitbě, napište výboru.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/aktuality"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-pine px-5 text-sm font-semibold text-paper hover:bg-pine-deep"
          >
            Číst aktuality
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-pine px-5 text-sm font-semibold text-pine hover:bg-fog"
          >
            Napsat výboru
          </Link>
        </div>
      </section>
    </article>
  );
}
