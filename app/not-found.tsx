import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl text-pine-deep">Stránka se nenašla</h1>
      <p className="mt-4 text-muted">
        Odkaz neexistuje nebo byl přesunut. Vraťte se na úvod spolku.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-pine px-5 text-sm font-semibold text-paper"
      >
        Zpět na úvod
      </Link>
    </div>
  );
}
