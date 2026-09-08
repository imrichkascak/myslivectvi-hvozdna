import { PhotoGallery } from "@/components/PhotoGallery";
import { galleryPhotos } from "@/lib/gallery";
import { gallerySeo } from "@/lib/seo";

export const metadata = gallerySeo;

export default function GalleryPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p data-reveal className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
        Honitba Hvozdná
      </p>
      <h1 data-reveal className="mt-3 font-serif text-4xl text-pine-deep">
        Fotogalerie
      </h1>
      <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Snímky z honitby a areálu spolku. Kliknutím otevřete fotografii, listovat
        lze šipkami.
      </p>
      <PhotoGallery photos={galleryPhotos} />
    </article>
  );
}
