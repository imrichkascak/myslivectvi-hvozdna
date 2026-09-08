"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import { asset } from "@/lib/media";

type Props = {
  photos: GalleryPhoto[];
};

export function PhotoGallery({ photos }: Props) {
  const labelId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const photo = index === null ? null : photos[index];
  const total = photos.length;

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => {
        if (current === null || total === 0) return current;
        return (current + delta + total) % total;
      });
    },
    [total],
  );

  const openAt = (nextIndex: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setIndex(nextIndex);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      setIndex(null);
      triggerRef.current?.focus();
    };

    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      } else if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, index, step, total]);

  return (
    <>
      <ul
        data-reveal-stagger
        className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3"
      >
        {photos.map((item, photoIndex) => (
          <li key={item.id} className="mb-3 break-inside-avoid">
            <button
              type="button"
              className="group block w-full cursor-zoom-in overflow-hidden rounded-lg text-left focus-visible:outline-offset-4"
              onClick={(event) => openAt(photoIndex, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`Otevřít fotografii: ${item.caption}`}
            >
              <Image
                src={asset(item.src)}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gallery-dialog m-0 h-full max-h-none w-full max-w-none border-0 bg-pine-deep p-0 text-paper open:fixed open:inset-0"
        aria-labelledby={labelId}
      >
        {photo ? (
          <div className="flex h-dvh flex-col">
            <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5">
              <p id={labelId} className="min-w-0 truncate text-sm">
                <span className="tabular-nums text-paper/70">
                  {index! + 1} / {total}
                </span>
                <span className="mx-2 text-paper/40" aria-hidden>
                  ·
                </span>
                {photo.caption}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md text-paper hover:bg-paper/10"
                onClick={close}
                aria-label="Zavřít galerii"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              <button
                type="button"
                className="absolute top-1/2 left-2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-md text-paper hover:bg-paper/10 sm:left-4"
                onClick={() => step(-1)}
                aria-label="Předchozí fotografie"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                className="absolute top-1/2 right-2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-md text-paper hover:bg-paper/10 sm:right-4"
                onClick={() => step(1)}
                aria-label="Další fotografie"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>

            <p className="px-4 py-3 text-center text-xs text-paper/55">
              Šipky listují, Esc zavře
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      className={`h-6 w-6 ${direction === "left" ? "rotate-180" : ""}`}
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
