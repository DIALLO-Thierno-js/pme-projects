import Link from "next/link";
import { destinations } from "@/app/data/destinations";

function DestinationPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-zinc-800">Nos destinations</h1>
      <p className="mt-3 text-lg text-zinc-600">
        Découvrez nos escapades en Côte d&apos;Ivoire et ailleurs.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            href={`/destinations/${destination.slug}`}
            key={destination.slug}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-amber-700">
              {destination.nom}
            </h2>
            <p className="mt-2 text-zinc-600">{destination.description}</p>
            <p className="mt-4 font-bold text-zinc-800">
              {destination.prix.toLocaleString("fr-FR")} FCFA
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DestinationPage;
