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

  // const filteredSteps = steps.filter((_, index) => index !== 1);

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
        {/* Guide Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold !mb-8 text-[#132540]">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="bg-[var(--primary-color)] p-6 rounded-lg hover:bg-[var(--primary-color-hover)] transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-[#132540] text-xl font-bold mr-2">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold !text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="!text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
