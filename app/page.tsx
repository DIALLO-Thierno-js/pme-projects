import Image from "next/image";
import Link from "next/link";
import { avis } from "./data/avis";
import { destinations } from "./data/destinations";

export default function Home() {
  return (
    <div className="bg-zinc-50">
      {/* ===== Bannière d'accueil ===== */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-amber-700 md:text-5xl">
            Lagune Voyages
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Votre agence de voyage à Abidjan depuis 2015
          </p>
          <Link
            href="/destinations"
            className="mt-6 inline-block rounded-full bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Voir nos destinations
          </Link>
        </div>
        <Image
          src="/thierno.jpg"
          alt="Plage d'Assinie au coucher du soleil"
          width={500}
          height={300}
          className="rounded-2xl object-cover shadow-lg"
        />
      </section>

      {/* ===== Destinations abordables ===== */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold text-zinc-800">
          Les destinations abordables
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations
            .filter((destination) => destination.prix <= 40000)
            .map((destination) => (
              <Link
                href={`/destinations/${destination.slug}`}
                key={destination.slug}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-amber-700">
                  {destination.nom}
                </h3>
                <p className="mt-2 text-zinc-600">{destination.description}</p>
                <p className="mt-4 font-bold text-zinc-800">
                  {destination.prix} FCFA
                </p>
              </Link>
            ))}
        </div>
      </section>

      {/* ===== Avis clients ===== */}
      <section className="bg-amber-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-zinc-800">
            Ce que disent nos clients
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {avis.map((avi) => (
              <div key={avi.id} className="rounded-xl bg-white p-6 shadow-sm">
                <p className="italic text-zinc-700">« {avi.message} »</p>
                <p className="mt-4 font-semibold text-zinc-800">{avi.nom}</p>
                <p className="text-sm text-zinc-500">{avi.ville}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
