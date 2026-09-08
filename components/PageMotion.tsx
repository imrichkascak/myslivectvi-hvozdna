"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
};

export function PageMotion({ children }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        reveals.forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            delay: Number(el.dataset.revealDelay ?? 0),
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });

        const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]");
        groups.forEach((group) => {
          const items = group.querySelectorAll(":scope > *");
          gsap.from(items, {
            autoAlpha: 0,
            y: 18,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root}>{children}</div>
  );
}
