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

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md border border-pine/20 px-4 text-base font-medium text-pine md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zavřít" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Hlavní navigace"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1.5 border-b border-pine/15 bg-paper px-4 py-4 md:static md:flex md:flex-row md:gap-0 md:border-0 md:bg-transparent md:px-0 md:py-0`}
        >
          {nav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`flex min-h-16 items-center rounded-md px-4 py-4 text-xl font-medium md:min-h-11 md:px-3 md:py-2 md:text-sm ${
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
      </div>
    </header>
  );
}
