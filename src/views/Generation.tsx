import { useAssistant } from "@src/hooks/assistant/AssistantContext";
import { memo } from "react";
import GuideSection from "../views/components/GuideSection";

const steps: { title: string; description: string }[] = [
  { title: "Copiez", description: "Copiez une annonce immobilière (SeLoger, LeBonCoin, Century21...)" },
  { title: "Sélectionnez", description: "Sélectionnez votre outil BienVu : Analyser / Estimer / Générer" },
  { title: "Collez", description: 'Collez l\'annonce dans "Je dépose (copier/coller)"' },
  { title: "Cliquez", description: "Cliquez sur envoyer l'annonce pour traiter votre demande" },
  { title: "Résultat", description: "Tadam ! Le résultat apparaît généré par l'IA" },
];

const Generation: React.FC = memo(() => {
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
    <section className="container mx-auto py-12 px-6 space-y-10 mt-25">
      
      {/* Guide */}
      <GuideSection title="Voir notre guide" steps={steps} />

      {/* Générer une annonce */}
      <div className="p-6 bg-around">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Je <span style={{ color: "var(--primary-color)" }}>génère</span> une
          annonce
        </h2>
        <textarea
          className="w-full text-classic p-4 mt-8 bg-plain-transp bg-around outline-none placeholder-secondary"
          rows={6}
          placeholder="Je dépose (copier/coller) l'annonce ici..."
        ></textarea>


        <button className="mt-5 bg-primary text-light bold bg-plain py-5 px-8 my-5 hover:bg-opacity-80 transition tracking-[0.15em]">
          Générer
        </button>
      </div>

      {/* Résultat de la génération */}
      <div className="p-6 bg-around">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Le <span style={{ color: "var(--primary-color)" }}>résultat</span> de
          la génération
        </h2>
        <div className="text-classic b-around px-6 py-4 min-h-[150px] flex items-center justify-start mt-8 bg-plain-transp">
          L'annonce générée apparaîtra ici...
        </div>
      </div>
    </section>
  );
});

export default Generation;
