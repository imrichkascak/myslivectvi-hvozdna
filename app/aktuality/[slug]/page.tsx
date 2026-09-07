import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/posts";
import { asset } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Aktualita nenalezena" };
  return pageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    path: `/aktuality/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
    images: [
      {
        url: asset(post.image),
        alt: post.imageAlt,
      },
    ],
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p data-reveal className="text-sm">
        <Link href="/aktuality" className="text-pine underline-offset-2 hover:underline">
          ← Zpět na aktuality
        </Link>
      </p>
      <header data-reveal className="mt-6">
        <p className="text-xs tracking-wide text-brass uppercase">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h1 className="mt-3 font-serif text-4xl text-pine-deep">{post.title}</h1>
      </header>
      <Image
        src={asset(post.image)}
        alt={post.imageAlt}
        width={1400}
        height={900}
        className="mt-8 h-80 w-full rounded-xl object-cover"
        priority
        data-reveal
      />
      {post.imageCredit ? (
        <p className="mt-2 text-xs text-muted">{post.imageCredit}</p>
      ) : null}
      <div
        data-reveal
        className="mt-8 space-y-4 text-lg leading-relaxed text-muted"
      >
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
