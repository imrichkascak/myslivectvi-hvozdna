import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Aktuality",
  description:
    "Zprávy Mysliveckého spolku Vrchovina Hvozdná: hony, vybavení areálu a dění v honitbě.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 data-reveal className="font-serif text-4xl text-pine-deep">
        Aktuality
      </h1>
      <p data-reveal className="mt-4 max-w-2xl text-muted">
        Oznámení honů, projekty a dění ve spolku. Chcete sem i pozvánky na
        brigády nebo společenské akce? Napište to na kick-off schůzce.
      </p>
      <ul data-reveal-stagger className="mt-10 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="grid gap-6 border-b border-pine/10 pb-10 md:grid-cols-[16rem_1fr]">
              <Link href={`/aktuality/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={640}
                  height={420}
                  className="h-44 w-full object-cover"
                />
              </Link>
              <div>
                <p className="text-xs tracking-wide text-brass uppercase">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h2 className="mt-2 font-serif text-2xl">
                  <Link
                    href={`/aktuality/${post.slug}`}
                    className="text-pine-deep hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
