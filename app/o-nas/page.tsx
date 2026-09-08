import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/media";
import { aboutSeo } from "@/lib/seo";

export const metadata = aboutSeo;

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p data-reveal className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
        IČO {site.ico}
      </p>
      <h1 data-reveal className="mt-3 font-serif text-4xl text-pine-deep">
        O spolku
      </h1>
      <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
        {site.name} je zapsán u {site.court}. Vznikl 28. 7. 1992. Sídlo má na
        adrese Myslivecká 38, 763 10 Hvozdná.
      </p>

      <Image
        src={asset("/images/oak-canopy.jpg")}
        alt="Jezero obklopené jehličnatým lesem a horami"
        width={1400}
        height={900}
        data-reveal
        className="mt-10 h-72 w-full rounded-xl object-cover"
      />

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Činnost
      </h2>
      <p data-reveal className="mt-4 leading-relaxed text-muted">
        Spolek je samostatnou právnickou osobou podle občanského zákoníku.
        Sdružuje členy zejména ke společnému provádění výkonu práva myslivosti
        v honitbě. Činnost se řídí právními předpisy, stanovami a provozním
        řádem. Hlavní činností je společný výkon práva myslivosti v najaté
        honitbě.
      </p>
      <p data-reveal className="mt-4 leading-relaxed text-muted">
        Klasifikace ekonomických činností: 01700 — lov a odchyt divokých zvířat
        a související činnosti. Spolek je neziskovou institucí sloužící
        domácnostem.
      </p>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Výbor spolku
      </h2>
      <p data-reveal className="mt-3 text-sm text-muted">
        Údaje podle veřejného rejstříku (stav k datu přípravy ukázky). Osobní
        adresy členů na webu neuvádíme.
      </p>
      <ul
        data-reveal-stagger
        className="mt-6 divide-y divide-pine/10 overflow-hidden rounded-xl border border-pine/10"
      >
        {site.committee.map((person) => (
          <li
            key={person.role}
            className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:justify-between"
          >
            <span className="font-medium text-pine-deep">{person.name}</span>
            <span className="text-sm text-muted">{person.role}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
