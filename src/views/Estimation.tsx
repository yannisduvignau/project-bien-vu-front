import {
  postEstimationDescription,
  postEstimationURL,
} from "@src/api/ia/estimationService";
// import { useAssistant } from "@src/hooks/assistant/AssistantContext";
import { Play, AlertCircle } from "lucide-react";
import { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import GuideSection from "../views/components/GuideSection";

interface FormDataDescription {
  description: string;
}

interface FormDataUrl {
  url: string;
}

interface StepsProps {
  title: string;
  description: string;
}

const steps: StepsProps[] = [
  {
    title: "Copiez",
    description:
      "Copiez une annonce immobilière (SeLoger, LeBonCoin, Century21...)",
  },
  {
    title: "Sélectionnez",
    description:
      "Sélectionnez votre outil BienVu : Analyser / Estimer / Générer",
  },
  {
    title: "Collez",
    description: 'Collez l\'annonce dans "Je dépose (copier/coller)"',
  },
  {
    title: "Cliquez",
    description: "Cliquez sur envoyer l'annonce pour traiter votre demande",
  },
  {
    title: "Résultat",
    description: "Tadam ! Le résultat apparaît généré par l'IA",
  },
];

const Estimation = memo(() => {
  const [confiance, setConfiance] = useState<string>("");
  const [prix_min, setPrixMin] = useState<number>(0);
  const [prix_max, setPrixMax] = useState<number>(0);
  const [prix_moy, setPrixMoy] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  // const { handleResizeAssistant, handleChangeBulleText } = useAssistant();

  // handleResizeAssistant(
  //   "15vh",
  //   "15vh",
  //   [0.8, -0.3, 1.5],
  //   22,
  //   "right-6",
  //   "bottom-16"
  // );
  // handleChangeBulleText("🚀 Estime la valeur de tes biens ici ! 🚀");

  // Formulaire URL
  const {
    handleSubmit: handleSubmitUrl,
    formState: { errors: errorsUrl },
    control: controlUrl,
  } = useForm<FormDataUrl>({
    defaultValues: {
      url: "",
    },
  });

  // Formulaire Description
  const {
    handleSubmit: handleSubmitDescription,
    formState: { errors: errorsDescription },
    control: controlDescription,
  } = useForm<FormDataDescription>({
    defaultValues: {
      description: "",
    },
  });

  const onSubmitUrl = async (data: FormDataUrl) => {
    setConfiance("");
    setPrixMin(0);
    setPrixMax(0);
    setPrixMoy(0);
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      const response = await postEstimationURL(formattedData);
      setConfiance((response as { confiance: string }).confiance);
      setPrixMin((response as { prix_min: number }).prix_min);
      setPrixMax((response as { prix_max: number }).prix_max);
      setPrixMoy((response as { prix_moyen: number }).prix_moyen);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitDescription = async (data: FormDataDescription) => {
    setConfiance("");
    setPrixMin(0);
    setPrixMax(0);
    setPrixMoy(0);
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      const response = await postEstimationDescription(formattedData);
      setConfiance((response as { confiance: string }).confiance);
      setPrixMin((response as { prix_min: number }).prix_min);
      setPrixMax((response as { prix_max: number }).prix_max);
      setPrixMoy((response as { prix_moyen: number }).prix_moyen);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white mt-25">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-[#132540] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="container mx-auto px-6 py-12">
        {/* Guide */}
        <GuideSection title="Voir notre guide" steps={steps} />
        {/* Guide Steps */}
        {/* <div className="mb-16">
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
        </div> */}

        {/* FORMULAIRES */}
        <div className="flex gap-10 justify-between mt-10">
          {/* Formulaire URL */}
          <div className="bg-[var(--primary-color)] rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold !mb-6 !text-white">
              Estimer une annonce à l'aide d'une URL
            </h2>
            <form onSubmit={handleSubmitUrl(onSubmitUrl)} className="space-y-6">
              <Controller
                name="url"
                control={controlUrl}
                rules={{ required: "Ce champ est requis" }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      className="w-full bg-[var(--background-color)] text-[var(--secondary-color)] rounded-lg p-4 focus:ring-2 focus:ring-[#132540] focus:outline-none"
                      placeholder="Collez votre URL ici..."
                    />
                    {errorsUrl.url && (
                      <p className="mt-2 !text-white flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {errorsUrl.url.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <button
                type="submit"
                className="bg-[#132540] text-white px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-[#132540] transition-colors duration-300"
              >
                <Play size={20} className="mr-2" />
                Lancer l'estimation
              </button>
            </form>
          </div>

          {/* Formulaire Description */}
          <div className="bg-[var(--primary-color)] rounded-lg p-8 mb-12 w-full">
            <h2 className="text-3xl font-bold !mb-6 !text-white">
            Estimer une annonce à l'aide de la description
            </h2>
            <form
              onSubmit={handleSubmitDescription(onSubmitDescription)}
              className="space-y-6"
            >
              <Controller
                name="description"
                control={controlDescription}
                rules={{ required: "Ce champ est requis" }}
                render={({ field }) => (
                  <div>
                    <textarea
                      {...field}
                      className="w-full bg-[var(--background-color)] text-[var(--secondary-color)] rounded-lg p-4 min-h-[200px] focus:ring-2 focus:ring-[#132540] focus:outline-none"
                      placeholder="Collez votre description ici..."
                    />
                    {errorsDescription.description && (
                      <p className="mt-2 !text-white flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {errorsDescription.description.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <button
                type="submit"
                className="bg-[#132540] text-white px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-[#132540] transition-colors duration-300"
              >
                <Play size={20} className="mr-2" />
                Lancer l'estimation
              </button>
            </form>
          </div>
        </div>

        {/* Résultats */}
        {(prix_min || prix_max || prix_moy || confiance) && (
          <div className="bg-[var(--primary-color)] rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold !text-white">Résultats</h2>
              {confiance && (
                <div className="bg-[var(--background-color)] px-4 py-2 rounded-lg">
                  <span className="text-gray-400">Fiabilité: </span>
                  <span className="text-[var(--secondary-color)] font-semibold">
                    {confiance}
                  </span>
                </div>
              )}
            </div>
            <div className="bg-[var(--background-color)] rounded-lg p-6">
              <p className="text-gray-300 whitespace-pre-line">
                <strong>Prix Minimum :</strong> {prix_min} €{" "}
                <br />
                <strong>Prix Maximum :</strong> {prix_max} €{" "}
                <br />
                <strong>Prix Moyen :</strong> {prix_moy} €
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Estimation;
