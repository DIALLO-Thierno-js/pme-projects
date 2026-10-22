"use client";
import { useState } from "react";

function CompteurVoyageurs({ prixUnitaire }: { prixUnitaire: number }) {
  const [nombreVoyageurs, setNombreVoyageurs] = useState(1);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="font-semibold text-zinc-800">Nombre de voyageurs</p>

      {/* Les boutons − et + autour du nombre */}
      <div className="mt-3 flex items-center gap-4">
        <button
          onClick={() => setNombreVoyageurs(nombreVoyageurs - 1)}
          disabled={nombreVoyageurs <= 1}
          className="h-10 w-10 rounded-full border border-zinc-300 text-xl font-bold hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          −
        </button>
        <span className="w-8 text-center text-2xl font-bold">
          {nombreVoyageurs}
        </span>
        <button
          onClick={() => setNombreVoyageurs(nombreVoyageurs + 1)}
          disabled={nombreVoyageurs >= 10}
          className="h-10 w-10 rounded-full border border-zinc-300 text-xl font-bold hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>
      </div>

      {/* Le prix total, recalculé à chaque clic */}
      <div className="mt-6 border-t border-zinc-200 pt-4">
        <p className="text-sm text-zinc-500">Prix total</p>
        <p className="text-3xl font-bold text-amber-700">
          {(prixUnitaire * nombreVoyageurs).toLocaleString("fr-FR")} FCFA
        </p>
      </div>
    </div>
  );
}

export default CompteurVoyageurs;
