import { Literata, Sora } from "next/font/google";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/DemoBanner";
import { PageMotion } from "@/components/PageMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
  metadataBase: new URL("https://myslivectvi-hvozdna.vercel.app"),
  title: {
    default: `${site.name} | Myslivost Hvozdná`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Oficiální ukázkové stránky Mysliveckého spolku Vrchovina Hvozdná. Honitba v katastru obce Hvozdná, aktuality o honech, péče o zvěř a krajinu.",
  keywords: [
    "myslivost Hvozdná",
    "Myslivecký spolek Vrchovina Hvozdná",
    "honitba Hvozdná",
    "myslivci Zlínsko",
    "MS Vrchovina",
  ],
  openGraph: {
    locale: "cs_CZ",
    type: "website",
    siteName: site.name,
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
  description: site.activity,
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
