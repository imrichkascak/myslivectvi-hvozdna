export const site = {
  name: "Myslivecký spolek Vrchovina Hvozdná",
  shortName: "MS Vrchovina Hvozdná",
  ico: "48472964",
  founded: "1992-07-28",
  legalForm: "Spolek",
  court: "Krajský soud v Brně, sp. zn. L 2176",
  address: {
    street: "Myslivecká 38",
    city: "Hvozdná",
    zip: "763 10",
    country: "Česká republika",
  },
  region: "Zlínský kraj, Vizovicko",
  activity:
    "Společný výkon práva myslivosti v najaté honitbě, péče o zvěř a krajinu v katastru obce Hvozdná.",
  committee: [
    { role: "Předseda spolku", name: "Ing. Lubomír Miškolci" },
    { role: "Místopředseda spolku", name: "Jiří Kadlčák" },
    { role: "Jednatel spolku", name: "Štěpán Gavenda" },
    { role: "Myslivecký hospodář", name: "Michal Vašek" },
    { role: "Finanční hospodář", name: "Pavel Manďák" },
  ],
  // Myslivecká ev. č. 38, RÚIAN / katastr (49.24360 N, 17.74241 E)
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=17.722%2C49.232%2C17.763%2C49.256&layer=mapnik&marker=49.24360%2C17.74241",
  mapLink:
    "https://www.openstreetmap.org/?mlat=49.24360&mlon=17.74241#map=15/49.24360/17.74241",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/groups/1118263047179236/",
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "Úvod" },
  { href: "/o-nas", label: "O spolku" },
  { href: "/honitba", label: "Honitba" },
  { href: "/fotogalerie", label: "Fotogalerie" },
  { href: "/aktuality", label: "Aktuality" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function fullAddress() {
  return `${site.address.street}, ${site.address.zip} ${site.address.city}`;
}
