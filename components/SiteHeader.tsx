"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/media";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-pine/15 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-md"
          onClick={() => setOpen(false)}
        >
          <Image
            src={asset("/images/logo.jpg")}
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-pine/20"
          />
          <span className="font-serif text-lg leading-tight text-pine-deep sm:text-xl">
            {site.shortName}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            id="site-nav"
            aria-label="Hlavní navigace"
            className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1.5 border-b border-pine/15 bg-paper px-4 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0`}
          >
            {nav
              .filter((item) => item.href !== "/kontakt")
              .map((item) => {
                const current =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-16 items-center rounded-md px-4 py-4 text-xl font-medium lg:min-h-11 lg:px-3 lg:py-2 lg:text-sm ${
                      current
                        ? "text-pine-deep underline decoration-brass decoration-2 underline-offset-4"
                        : "text-muted hover:text-pine-deep"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>

          <Link
            href="/kontakt"
            aria-current={pathname.startsWith("/kontakt") ? "page" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-pine px-4 text-sm font-semibold text-paper hover:bg-pine-deep"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </Link>

          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-pine hover:bg-fog lg:hidden"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
