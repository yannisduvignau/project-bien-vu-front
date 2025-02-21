import { memo } from "react";

const Estimation = memo(() => {
  return (
    <section className="container mx-auto py-12 px-6 space-y-10">
      
      {/* Guide */}
      <div id="guide" className="bg-primary text-white text-center py-4 rounded-full">
        <a href="/guide" className="text-lg font-semibold hover:underline">
          Voir notre guide d'utilisation
        </a>
      </div>

      {/* Annonce à estimer */}
      <div className="p-6 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-4">
          J'<span style={{ color: "var(--primary-color)" }}>estime</span> l'annonce
        </h2>
        <textarea
          className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
          placeholder="Je dépose (copier/coller) l'annonce ici..."
        ></textarea>
        <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-80 transition">
          Estimer
        </button>
      </div>

      {/* Résultat de l'estimation */}
      <div className="p-6 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Le <span style={{ color: "var(--primary-color)" }}>résultat</span> de l'estimation
        </h2>
        <div className="bg-white p-4 rounded-lg min-h-[150px] flex items-center justify-center text-gray-500">
          Le résultat apparaîtra ici...
        </div>
      </div>

    </section>
  );
});

export default Estimation;
