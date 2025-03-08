import { postAnalyse } from "@src/api/ia/analyseService";
import { useAssistant } from "@src/hooks/assistant/AssistantContext";
import { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  text: string;
}

const Analyse = memo(() => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { handleResizeAssistant, handleChangeBulleText } = useAssistant();

  handleResizeAssistant("50vh", "50vh", [1, -0.1, 2], 30, "right-8", "bottom-10");
  handleChangeBulleText("🚀 Analyse tes annonces immobilières ici ! 🚀");

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await postAnalyse(data.text);
      setResult((response as { data: { result: string } }).data.result);
      reset();
    } catch (error) {
      console.error("Erreur lors de l'analyse:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}
      <section className="container mx-auto py-12 px-6 space-y-10 mt-36">
        {/* 2️⃣ J'analyse l'annonce */}
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-primary mb-4">
            J'analyse l'annonce
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="text"
              control={control}
              rules={{ required: "Ce champ est requis" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={6}
                  placeholder="Je dépose (copier/coller) l'annonce ici..."
                />
              )}
            />
            {errors.text && (
              <p className="text-red-500 text-sm">{errors.text.message}</p>
            )}
            <button
              type="submit"
              className="btn btn-secondary w-fit flex items-center !mt-8"
            >
              <p className="text-light">Analyser</p>
            </button>
          </form>
        </div>

        {/* 3️⃣ Le résultat de l'analyse */}
        <div className="p-6 border rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Le résultat de l'analyse
          </h2>
          <div className="bg-white p-4 rounded-lg min-h-[150px] flex items-center justify-center text-gray-500">
            {result || "Le résultat apparaîtra ici..."}
          </div>
        </div>
      </section>
    </>
  );
});

export default Analyse;
