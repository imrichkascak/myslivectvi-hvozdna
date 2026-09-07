import { Literata, Sora } from "next/font/google";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/DemoBanner";
import { PageMotion } from "@/components/PageMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin", "latin-ext"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Honitba Hvozdná`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Myslivecký spolek Vrchovina Hvozdná pečuje o honitbu v obci Hvozdná na Zlínsku. Aktuality o honech, bezpečnost v lese a kontakt na výbor.",
  applicationName: site.shortName,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "myslivost",
  keywords: [
    "Myslivecký spolek Vrchovina Hvozdná",
    "myslivost Hvozdná",
    "honitba Hvozdná",
    "hon Hvozdná",
    "MS Vrchovina",
  ],
  openGraph: {
    locale: "cs_CZ",
    type: "website",
    siteName: site.name,
    title: `${site.name} | Honitba Hvozdná`,
    description:
      "Myslivecký spolek Vrchovina Hvozdná pečuje o honitbu v obci Hvozdná na Zlínsku. Aktuality o honech, bezpečnost v lese a kontakt na výbor.",
    images: [
      {
        url: "/images/jelen-ruj.jpg",
        width: 1024,
        height: 682,
        alt: "Jelen v říji — Myslivecký spolek Vrchovina Hvozdná",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Honitba Hvozdná`,
    description:
      "Myslivecký spolek Vrchovina Hvozdná pečuje o honitbu v obci Hvozdná na Zlínsku. Aktuality o honech, bezpečnost v lese a kontakt na výbor.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: site.name,
  legalName: site.name,
  foundingDate: site.founded,
  taxID: site.ico,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.zip,
    addressCountry: "CZ",
  },
  areaServed: "Hvozdná",
  url: SITE_URL,
  description:
    "Myslivecký spolek Vrchovina Hvozdná pečuje o honitbu v obci Hvozdná na Zlínsku.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${sora.variable} ${literata.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#obsah" className="skip-link">
          Přeskočit na obsah
        </a>
        <DemoBanner />
        <SiteHeader />
        <main id="obsah" className="flex-1">
          <PageMotion>{children}</PageMotion>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
