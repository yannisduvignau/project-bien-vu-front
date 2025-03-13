import React, { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Play, AlertCircle } from "lucide-react";
import GuideSection from "./components/GuideSection";
import { postAnalyseDescription, postAnalyseURL } from "@src/api/ia/analyseService";

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

const App = memo(() => {
  const [result, setResult] = useState<string>("");
  const [reliability, setReliability] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
    setResult("");
    setReliability("");
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      const response = await postAnalyseURL(formattedData);
      setResult((response as { analysis: string }).analysis);
      setReliability((response as { reliability: string }).reliability);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitDescription = async (data: FormDataDescription) => {
    setResult("");
    setReliability("");
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      const response = await postAnalyseDescription(formattedData);
      setResult((response as { analysis: string }).analysis);
      setReliability((response as { reliability: string }).reliability);
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

        {/* FORMULAIRES */}
        <div className="flex gap-10 justify-between mt-10">
          {/* Formulaire URL */}
          <div className="bg-[var(--primary-color)] rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold !mb-6 !text-white">
              Analyser une annonce à l'aide d'une URL
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
                Lancer l'analyse
              </button>
            </form>
          </div>

          {/* Formulaire Description */}
          <div className="bg-[var(--primary-color)] rounded-lg p-8 mb-12 w-full">
            <h2 className="text-3xl font-bold !mb-6 !text-white">
              Analyser une annonce à l'aide de la description
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
                Lancer l'analyse
              </button>
            </form>
          </div>
        </div>

        {/* Résultats */}
        {(result || reliability) && (
          <div className="bg-[var(--primary-color)] rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold !text-white">Résultats</h2>
              {reliability && (
                <div className="bg-[var(--background-color)] px-4 py-2 rounded-lg">
                  <span className="text-gray-400">Fiabilité: </span>
                  <span className="text-[var(--secondary-color)] font-semibold">
                    {reliability}
                  </span>
                </div>
              )}
            </div>
            <div className="bg-[var(--background-color)] rounded-lg p-6">
              <p className="text-gray-300 whitespace-pre-line">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default App;
