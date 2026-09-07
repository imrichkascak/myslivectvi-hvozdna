export type Post = {
  slug: string;
  title: string;
  /** Kratší titulek pro <title> a Open Graph, pokud je článek dlouhý. */
  seoTitle?: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "hon-na-divoke-prasata-15-11-2025",
    title: "Hon na divoké prasata 15. 11. 2025",
    date: "2025-11-10",
    excerpt:
      "V sobotu 15. 11. 2025 se v revíru katastru obce Hvozdná uskuteční hon na divoké prasata. Žádáme návštěvníky lesa, aby se v uvedeném čase v revíru nezdržovali.",
    image: "/images/wild-boar-snow.jpg",
    imageAlt:
      "Dospělý divočák ve sněhu, ilustrační fotografie k oznámení honu",
    body: [
      "Myslivecký spolek Vrchovina Hvozdná dne 15. 11. 2025 uskuteční hon na divoké prasata. Lov se uskuteční v revíru katastru obce Hvozdná od 8:00 do 15:00 hod.",
      "Žádáme návštěvníky lesa, aby se v tomto čase nezdržovali v revíru. Pohyb v honitbě během honu je životu nebezpečný.",
      "Za pochopení děkujeme. V případě potřeby informací se obraťte na mysliveckého hospodáře spolku.",
    ],
  },
  {
    slug: "nakup-vybaveni-pro-spolek",
    title: "Nákup vybavení pro Myslivecký spolek Vrchovina Hvozdná",
    seoTitle: "Nákup vybavení pro honitbu",
    date: "2025-09-01",
    excerpt:
      "Díky spolupráci s MAS Vizovicko a Slušovicko jsme pořídili techniku na údržbu areálu. Projekt spolufinancovala Evropská unie.",
    image: "/images/blog-vybaveni.jpg",
    imageAlt:
      "Nové vybavení spolku na trávníku: křovinořezy, sekačka, motorová pila a další nářadí",
    body: [
      "Díky spolupráci s MAS Vizovicko a Slušovicko jsme mohli realizovat projekt „Nákup vybavení pro myslivecký spolek ve Hvozdné“, který byl spolufinancován Evropskou unií a podpořen díky realizaci Strategie komunitně vedeného místního rozvoje MAS Vizovicko a Slušovicko, o.p.s. na období 2021–2027.",
      "Cílem projektu je nákup vybavení pro myslivecký spolek ve Hvozdné — konkrétně 2 křovinořezy, ruční foukač, vyvětvovací pila, sekačka a motorová pila.",
      "Díky realizaci projektu bude mít žadatel kvalitní a dostatečné vybavení pro údržbu svého areálu, který bude moci využívat nejen pro své činnosti, ale také ho budou moci využívat ostatní spolky nebo obec pro kulturní a společenské akce. Nové vybavení také značně ulehčí pracovní námahu a sníží časovou náročnost údržby areálu.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
