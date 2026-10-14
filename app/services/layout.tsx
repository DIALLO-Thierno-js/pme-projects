import Link from "next/link";

export default function ServicesLayout({ children }: LayoutProps<"/services">) {
  return (
    // flex : menu et contenu côte à côte
    <div className="flex gap-8 px-6 py-8">
      {/* Menu latéral des services */}
      <aside className="w-48 shrink-0">
        <h2 className="mb-3 text-sm font-semibold uppercase text-zinc-500">
          Nos services
        </h2>
        <nav className="flex flex-col gap-2">
          <Link href="/services/billets" className="rounded px-3 py-2 hover:bg-zinc-100">
            Billets d&apos;avion
          </Link>
          <Link href="/services/visa" className="rounded px-3 py-2 hover:bg-zinc-100">
            Assistance visa
          </Link>
        </nav>
      </aside>

      {/* Contenu de la page en cours */}
      <div className="flex-1">{children}</div>
    </div>
  );
}