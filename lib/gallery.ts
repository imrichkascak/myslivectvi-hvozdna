export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Czech common name shown on the homepage carousel chip. */
  label: string;
  width: number;
  height: number;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "jelen-ruj",
    src: "/images/jelen-ruj.jpg",
    alt: "Jelen v říji v podzimní trávě",
    caption: "Jelen v říji",
    label: "Jelen evropský",
    width: 1024,
    height: 682,
  },
  {
    id: "krmelec-zima",
    src: "/images/krmelec-zima.jpg",
    alt: "Srnčí zvěř u krmelce v zimě",
    caption: "Krmelec v zimě",
    label: "Srnec obecný",
    width: 700,
    height: 465,
  },
  {
    id: "hunting-stand",
    src: "/images/hunting-stand.jpg",
    alt: "Posed v lesním porostu",
    caption: "Posed",
    label: "Posed",
    width: 1280,
    height: 1333,
  },
  {
    id: "wild-boar-snow",
    src: "/images/wild-boar-snow.jpg",
    alt: "Divočák ve sněhu",
    caption: "Černá zvěř",
    label: "Prase divoké",
    width: 1024,
    height: 682,
  },
  {
    id: "oak-canopy",
    src: "/images/oak-canopy.jpg",
    alt: "Jezero obklopené jehličnatým lesem a horami",
    caption: "Horské jezero",
    label: "Horské jezero",
    width: 2000,
    height: 1380,
  },
  {
    id: "pine-stand",
    src: "/images/pine-stand.jpg",
    alt: "Horský jehličnatý les a jezero při soumraku",
    caption: "Horský les",
    label: "Horský les",
    width: 2000,
    height: 1125,
  },
  {
    id: "forest-path",
    src: "/images/forest-path.jpg",
    alt: "Lesní cesta mezi stromy",
    caption: "Cesta honitbou",
    label: "Lesní cesta",
    width: 2000,
    height: 1332,
  },
  {
    id: "deer",
    src: "/images/deer.jpg",
    alt: "Jelen v lese",
    caption: "Jelen",
    label: "Jelen",
    width: 1600,
    height: 2390,
  },
  {
    id: "areal",
    src: "/images/blog-vybaveni.jpg",
    alt: "Vybavení mysliveckého areálu",
    caption: "Areál spolku",
    label: "Areál spolku",
    width: 2016,
    height: 1512,
  },
];

const homeCarouselIds = [
  "hunting-stand",
  "wild-boar-snow",
  "oak-canopy",
  "pine-stand",
  "forest-path",
  "deer",
] as const;

export const homeCarouselPhotos = homeCarouselIds.map((id) => {
  const photo = galleryPhotos.find((item) => item.id === id);
  if (!photo) {
    throw new Error(`Missing carousel photo: ${id}`);
  }
  return photo;
});
