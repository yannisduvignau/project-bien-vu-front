import { useAssistant } from "@src/hooks/assistant/AssistantContext";
import { memo } from "react";

const Generation = memo(() => {
  const { handleResizeAssistant, handleChangeBulleText } = useAssistant();

  handleResizeAssistant(
    "50vh",
    "50vh",
    [1, -0.1, 2],
    30,
    "right-8",
    "bottom-10"
  );
  handleChangeBulleText("🚀 Génére des annonces immobilières ici ! 🚀");

  return (
    <section className="container mx-auto py-12 px-6 space-y-10">
      {/* Guide */}
      <div className="bg-primary text-white text-center py-4 rounded-full">
        <a href="/guide" className="text-lg font-semibold hover:underline">
          Voir notre guide de génération d'annonces
        </a>
      </div>

      {/* Générer une annonce */}
      <div className="p-6 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Je <span style={{ color: "var(--primary-color)" }}>génère</span> une
          annonce
        </h2>
        <textarea
          className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={6}
          placeholder="Décrivez votre bien immobilier ici..."
        ></textarea>
        <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-80 transition">
          Générer
        </button>
      </div>

      {/* Résultat de la génération */}
      <div className="p-6 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Le <span style={{ color: "var(--primary-color)" }}>résultat</span> de
          la génération
        </h2>
        <div className="bg-white p-4 rounded-lg min-h-[150px] flex items-center justify-center text-gray-500">
          L'annonce générée apparaîtra ici...
        </div>
      </div>
    </section>
  );
});

export default Generation;
