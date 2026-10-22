import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/app/data/destinations";
import CompteurVoyageurs from "@/app/components/CompteurVoyageurs";

async function DestinationDetailPage({
  params,
}: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const destination = destinations.find(
    (destination) => destination.slug === slug,
  );

  if (!destination) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/destinations"
        className="text-sm text-zinc-500 hover:text-amber-700"
      >
        ← Retour aux destinations
      </Link>

      {/* Sur ordinateur : infos à gauche, compteur à droite */}
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-amber-700">
            {destination.nom}
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            {destination.description}
          </p>
          <p className="mt-6 text-zinc-800">
            À partir de{" "}
            <span className="text-2xl font-bold">
              {destination.prix.toLocaleString("fr-FR")} FCFA
            </span>{" "}
            par personne
          </p>
        </div>

        <CompteurVoyageurs prixUnitaire={destination.prix} />
      </div>
    </div>
  );
}

export default DestinationDetailPage;
