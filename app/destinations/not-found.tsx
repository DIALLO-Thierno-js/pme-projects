import Link from "next/link";
import { destinations } from "../data/destinations";

function DestinationNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* ===== Message principal ===== */}
      <div className="text-center">
        <p className="text-6xl">🧭</p>
        <h1 className="mt-4 text-3xl font-bold text-zinc-800">
          Cette destination n&apos;existe pas encore
        </h1>
        <p className="mt-3 text-zinc-600">
          Mais nous avons d&apos;autres belles escapades à vous proposer !
        </p>
      </div>

      {/* ===== Liste des destinations ===== */}
      <h2 className="mt-12 mb-6 text-2xl font-bold text-zinc-800">
        Découvrez nos destinations disponibles
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            href={`/destinations/${destination.slug}`}
            key={destination.slug}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold text-amber-700">
              {destination.nom}
            </h3>
            <p className="mt-2 text-zinc-600">{destination.description}</p>
          </Link>
        ))}
      </div>

      {/* ===== Retour à l'accueil ===== */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block rounded-full bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

export default DestinationNotFound;