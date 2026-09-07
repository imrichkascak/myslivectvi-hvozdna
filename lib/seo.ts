import type { Metadata } from "next";
import { site } from "@/lib/site";

export const SITE_URL = "https://myslivectvi-hvozdna.vercel.app";

const defaultOgImage = {
  url: "/images/jelen-ruj.jpg",
  width: 1024,
  height: 682,
  alt: "Jelen v říji — Myslivecký spolek Vrchovina Hvozdná",
};

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Homepage: plný titulek bez šablony „| MS …“. */
  absoluteTitle?: string;
  robots?: Metadata["robots"];
  ogType?: "website" | "article";
  images?: NonNullable<NonNullable<Metadata["openGraph"]>["images"]>;
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  robots,
  ogType = "website",
  images,
  publishedTime,
}: PageSeoInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const ogTitle = absoluteTitle ?? `${title} | ${site.shortName}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      type: ogType,
      locale: "cs_CZ",
      url: canonical,
      siteName: site.name,
      title: ogTitle,
      description,
      images: images ?? [defaultOgImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export const homeSeo = pageMetadata({
  title: site.name,
  absoluteTitle: `${site.name} | Honitba Hvozdná`,
  path: "/",
  description:
    "Myslivecký spolek Vrchovina Hvozdná pečuje o honitbu v obci Hvozdná na Zlínsku. Aktuality o honech, bezpečnost v lese a kontakt na výbor.",
});

export const aboutSeo = pageMetadata({
  title: "O spolku",
  path: "/o-nas",
  description:
    "MS Vrchovina Hvozdná vznikl 28. 7. 1992. Sídlo Myslivecká 38, IČO 48472964. Výbor spolku a společný výkon práva myslivosti ve Hvozdné.",
});

export const honitbaSeo = pageMetadata({
  title: "Honitba a bezpečnost v lese",
  path: "/honitba",
  description:
    "Honitba v katastru obce Hvozdná: jak se chovat v lese v den honu, kdy nevstupovat do revíru a kde sledovat oznámení MS Vrchovina Hvozdná.",
});

export const newsSeo = pageMetadata({
  title: "Aktuality a oznámení honů",
  path: "/aktuality",
  description:
    "Zprávy Mysliveckého spolku Vrchovina Hvozdná: termíny honů, projekty areálu a dění v honitbě ve Hvozdné na Vizovicku.",
});

export const contactSeo = pageMetadata({
  title: "Kontakt a sídlo",
  path: "/kontakt",
  description:
    "Kontakt na MS Vrchovina Hvozdná: sídlo Myslivecká 38, 763 10 Hvozdná, IČO 48472964. Mapa a údaje zapsané u Krajského soudu v Brně.",
});

export const kickoffSeo = pageMetadata({
  title: "Kick-off: návrh webu",
  path: "/kickoff",
  description:
    "Interní podklad ke schůzce s vedením MS Vrchovina Hvozdná. Není určen k indexaci ve vyhledávačích.",
  robots: { index: false, follow: false },
});
