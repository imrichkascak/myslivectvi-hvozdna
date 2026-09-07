"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
          className="flex min-h-11 items-center gap-3 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.jpg"
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
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-pine/20 px-3 text-sm font-medium text-pine md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zavřít" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Hlavní navigace"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-pine/15 bg-paper px-4 py-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:px-0 md:py-0`}
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
                className={`min-h-11 px-3 py-2 text-sm font-medium ${
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
