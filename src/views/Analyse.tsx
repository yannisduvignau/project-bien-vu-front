import { memo } from "react";

const Analyse = memo(() => {
  return (
    <section className="container mx-auto py-12 px-6 space-y-10">
      
      {/* 1️⃣ Voir notre guide */}
      <div className="bg-primary text-white text-center py-4 rounded-lg shadow-md">
        <a href="/guide" className="text-lg font-semibold hover:underline">
          📖 Voir notre guide d'analyse
        </a>
      </div>

      {/* 2️⃣ J'analyse l'annonce */}
      <div className="p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold text-primary mb-4">J'analyse l'annonce</h2>
        <textarea
          className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
          placeholder="Je dépose (copier/coller) l'annonce ici..."
        ></textarea>
        <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-80 transition">
          Analyser
        </button>
      </div>

      {/* 3️⃣ Le résultat de l'analyse */}
      <div className="p-6 border rounded-lg shadow-md bg-gray-100">
        <h2 className="text-2xl font-bold text-primary mb-4">Le résultat de l'analyse</h2>
        <div className="bg-white p-4 rounded-lg min-h-[150px] flex items-center justify-center text-gray-500">
           Le résultat apparaîtra ici...
        </div>
      </div>

    </section>
  );
});

export default Analyse;
