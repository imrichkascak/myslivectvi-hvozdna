import Link from "next/link";

export function DemoBanner() {
  return (
    <p className="bg-brass px-4 py-2 text-center text-sm text-pine-deep">
      Toto je ukázkový web před schůzkou s vedením spolku.{" "}
      <Link href="/kickoff" className="font-semibold underline underline-offset-2">
        Otevřít kick-off stránku
      </Link>
    </p>
  );
}
