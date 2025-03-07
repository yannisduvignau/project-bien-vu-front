import { memo } from "react";
import GuideSection from "../views/components/GuideSection";

const steps: { title: string; description: string }[] = [
  { title: "Copiez", description: "Copiez une annonce immobilière (SeLoger, LeBonCoin, Century21...)" },
  { title: "Sélectionnez", description: "Sélectionnez votre outil BienVu : Analyser / Estimer / Générer" },
  { title: "Collez", description: 'Collez l\'annonce dans "Je dépose (copier/coller)"' },
  { title: "Cliquez", description: "Cliquez sur envoyer l'annonce pour traiter votre demande" },
  { title: "Résultat", description: "Tadam ! Le résultat apparaît généré par l'IA" },
];

const Analyse: React.FC = memo(() => {
  return (
    <section className="container mx-auto py-12 px-6 space-y-10 mt-25">
      
      {/* Guide */}
      <GuideSection title="Voir notre guide" steps={steps} />

      {/* Annonce à analyser */}
      <div className="p-6 border bg-around">
        <h2 className="text-2xl font-bold text-primary mb-4">
          J'<span style={{ color: "var(--primary-color)" }}>analyse</span> l'annonce
        </h2>
        <textarea
          className="w-full text-classic p-4 mt-8 bg-plain-transp bg-around outline-none placeholder-secondary"
          rows={6}
          placeholder="Je dépose (copier/coller) l'annonce ici..."
        ></textarea>
        <button className="mt-5 bg-primary text-light bold bg-plain py-5 px-8 my-5 hover:bg-opacity-80 transition tracking-[0.15em]">
          Analyser
        </button>
      </div>

      {/* Le résultat de l'analyse */}
      <div className="p-6 border bg-around ">
        <h2 className="text-2xl font-bold text-primary mb-4">Le <span style={{ color: "var(--primary-color)" }}>résultat</span> de l'analyse</h2>
        <div className="text-classic b-around px-6 py-4 min-h-[150px] flex items-center justify-start mt-8 bg-plain-transp">
           Le résultat apparaîtra ici...
        </div>
      </div>

    </section>
  );
});

export default Analyse;
