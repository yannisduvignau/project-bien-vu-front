import { useAssistant } from "@src/hooks/assistant/AssistantContext";
import { memo, useState } from "react";
import GuideSection from "../views/components/GuideSection";
import { Controller, useForm } from "react-hook-form";
import { postGeneration } from "@src/api/ia/generationService";

interface FormData {
  description: string;
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

const Generation: React.FC = memo(() => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { handleResizeAssistant, handleChangeBulleText } = useAssistant();

  handleResizeAssistant(
    "15vh",
    "15vh",
    [0.8, -0.3, 1.5],
    22,
    "right-6",
    "bottom-16"
  );
  // handleChangeBulleText("🚀 Génére des annonces immobilières ici ! 🚀");

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      const response = await postGeneration(formattedData);
      setResult((response as { analysis: string }).analysis);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-20">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}
      <section className="container mx-auto py-12 px-6 space-y-10 mt-25">
        {/* Guide */}
        <GuideSection title="Voir notre guide" steps={steps} />

        {/* Générer une annonce */}
        <div className="p-6 bg-around">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Je <span style={{ color: "var(--primary-color)" }}>génère</span> une
            annonce
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Ce champ est requis" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full text-classic p-4 mt-8 bg-plain-transp bg-around outline-none placeholder-secondary"
                  rows={6}
                  placeholder="Je dépose (copier/coller) l'annonce ici..."
                ></textarea>
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-secondary w-fit flex items-center !mt-8"
            >
              <p className="text-light">Générer</p>
            </button>
          </form>
        </div>

        {/* Résultat de la génération */}
        <div className="p-6 bg-around">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Le <span style={{ color: "var(--primary-color)" }}>résultat</span>{" "}
            de la génération
          </h2>
          <div className="text-classic b-around px-6 py-4 min-h-[150px] flex items-center justify-start mt-8 bg-plain-transp">
            {result || "Le résultat apparaîtra ici..."}
          </div>
        </div>
      </section>
    </>
  );
});

export default Generation;
