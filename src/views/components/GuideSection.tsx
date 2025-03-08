import { useState } from "react";

// Définition du type pour les étapes du guide
interface Step {
  title: string;
  description: string;
}

// Définition des props du composant
interface GuideSectionProps {
  title?: string;
  steps: Step[];
}

const GuideSection: React.FC<GuideSectionProps> = ({ title = "Voir notre guide", steps }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filteredSteps = steps.filter((_, index) => index !== 1);

  return (
    <div className="text-center">
      {/* Bouton */}
      <div
        className="bg-primary text-light text-center py-4 bg-plain cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
      </div>

      {/* Contenu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 bg-around mt-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Guide étape par étape</h3>

          <div className="space-y-4 mt-5">
            {filteredSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-around p-3 rounded-lg mx-auto max-w-[600px]"
              >
                {/* Numéro*/}
                <div className="number flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                  <span>{index + 1}</span>
                </div>

                {/* Texte */}
                <div className="step-text flex-1 text-center">
                  <h3 className="text-lg font-bold">
                    <span className="text-exerg uppercase">{step.title}</span>
                  </h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
