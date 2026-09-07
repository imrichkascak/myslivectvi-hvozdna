import Image from "next/image";
import { asset } from "@/lib/media";
import { honitbaSeo } from "@/lib/seo";

export const metadata = honitbaSeo;

export default function HonitbaPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 data-reveal className="font-serif text-4xl text-pine-deep">
        Honitba Hvozdná
      </h1>
      <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
        Revír leží v katastru obce Hvozdná na Vizovicku. Spolek pečuje o zvěř,
        lesní okraje a areál, který mohou využívat i další spolky a obec.
      </p>

      <Image
        src={asset("/images/pine-stand.jpg")}
        alt="Hustý jehličnatý porost, ilustrace honitby"
        width={1600}
        height={900}
        data-reveal
        className="mt-10 h-80 w-full rounded-xl object-cover"
      />

      <section
        data-reveal
        className="mt-12 rounded-xl border-l-4 border-signal bg-paper p-6"
      >
        <h2 className="font-serif text-2xl text-signal">Když probíhá hon</h2>
        <p className="mt-3 leading-relaxed text-muted">
          V den honu je pohyb v revíru nebezpečný. Prosíme turisty, houbaře i
          cyklisty, aby se v oznámeném čase v honitbě nezdržovali. Termíny
          zveřejňujeme v aktualitách a na této stránce.
        </p>
      </section>

      <h2 data-reveal className="mt-12 font-serif text-2xl text-pine-deep">
        Co v honitbě děláme
      </h2>
      <ul data-reveal-stagger className="mt-4 list-disc space-y-2 pl-5 text-muted">
        <li>údržba areálu a přístupových cest,</li>
        <li>péče o zvěř a biotop,</li>
        <li>spolupráce s obcí Hvozdná a okolními spolky,</li>
        <li>včasné informace o lovech a uzavírkách revíru.</li>
      </ul>
    </article>
  );
}
