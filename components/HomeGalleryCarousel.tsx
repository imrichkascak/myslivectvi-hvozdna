"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import { asset } from "@/lib/media";

type Props = {
  photos: GalleryPhoto[];
  children: ReactNode;
};

export function HomeGalleryCarousel({ photos, children }: Props) {
  const listId = useId();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(photos.length > 1);

  const updateEdges = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanPrev(scroller.scrollLeft > 8);
    setCanNext(maxScroll > 8 && scroller.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    updateEdges();
    scroller.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    const resizeObserver = new ResizeObserver(updateEdges);
    resizeObserver.observe(scroller);
    const images = [...scroller.querySelectorAll("img")];
    images.forEach((image) => image.addEventListener("load", updateEdges));
    return () => {
      scroller.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
      resizeObserver.disconnect();
      images.forEach((image) => image.removeEventListener("load", updateEdges));
    };
  }, [updateEdges]);

  const scrollBySlide = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slides = [...scroller.querySelectorAll<HTMLElement>(":scope > li")];
    const pad = Number.parseFloat(getComputedStyle(scroller).paddingInlineStart);
    const origin = scroller.scrollLeft + pad;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
    const next =
      direction === 1
        ? slides.find((slide) => slide.offsetLeft > origin + 16)
        : [...slides].reverse().find((slide) => slide.offsetLeft < origin - 16);

    if (next) {
      scroller.scrollTo({ left: next.offsetLeft - pad, behavior });
    } else if (direction === 1) {
      scroller.scrollTo({ left: scroller.scrollWidth, behavior });
    } else {
      scroller.scrollTo({ left: 0, behavior });
    }
    requestAnimationFrame(updateEdges);
  };

  return (
    <div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-6">
        <div className="min-w-0">{children}</div>
        <div className="flex shrink-0 items-center gap-2 sm:pb-0.5">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-pine text-pine hover:bg-fog disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => scrollBySlide(-1)}
            disabled={!canPrev}
            aria-controls={listId}
            aria-label="Předchozí fotografie"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-pine text-pine hover:bg-fog disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => scrollBySlide(1)}
            disabled={!canNext}
            aria-controls={listId}
            aria-label="Další fotografie"
          >
            <ChevronIcon direction="right" />
          </button>
          <Link
            href="/fotogalerie"
            className="ml-1 inline-flex min-h-11 items-center rounded-md bg-pine px-5 text-sm font-semibold text-paper hover:bg-pine-deep"
          >
            Celá fotogalerie
          </Link>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        id={listId}
        aria-label="Ukázka fotogalerie"
        tabIndex={0}
        className="scrollbar-none mt-8 flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain scroll-ps-[max(1rem,calc((100%-72rem)/2+1rem))] pr-4 pl-[max(1rem,calc((100%-72rem)/2+1rem))] focus-visible:outline-offset-4 sm:scroll-ps-[max(1.5rem,calc((100%-72rem)/2+1.5rem))] sm:pr-6 sm:pl-[max(1.5rem,calc((100%-72rem)/2+1.5rem))]"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollBySlide(1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollBySlide(-1);
          } else if (event.key === "Home") {
            event.preventDefault();
            scrollerRef.current?.scrollTo({ left: 0 });
          } else if (event.key === "End") {
            event.preventDefault();
            const scroller = scrollerRef.current;
            scroller?.scrollTo({ left: scroller.scrollWidth });
          }
        }}
      >
        {photos.map((photo) => (
          <li
            key={photo.id}
            className="h-[22rem] shrink-0 snap-start sm:h-[28rem] lg:h-[32rem]"
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
          >
            <figure className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50rem, 90vw"
              />
              <figcaption className="glass-chip absolute bottom-3 left-3 rounded-xl px-3 py-1.5 font-serif text-sm font-semibold sm:bottom-4 sm:left-4 sm:px-3.5 sm:py-2 sm:text-base">
                {photo.label}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
