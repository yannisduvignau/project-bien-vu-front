import { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Home, Square, MapPin, Loader2, Building2, ArrowRight } from "lucide-react";
import GuideSection from "./components/GuideSection";
import { postGeneration } from "@src/api/ia/generationService";

interface FormData {
  type: string;
  surface: string;
  pieces: string;
  ville: string;
}

interface StepsProps {
  title: string;
  description: string;
}

const steps: StepsProps[] = [
  {
    title: "Copiez",
    description: "Copiez une annonce immobilière (SeLoger, LeBonCoin, Century21...)",
  },
  {
    title: "Sélectionnez",
    description: "Sélectionnez votre outil BienVu : Analyser / Estimer / Générer",
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

const propertyTypes = [
  "Appartement",
  "Maison",
  "Studio",
  "Loft",
  "Villa"
];

const App = memo(() => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormData>({
    defaultValues: {
      type: "",
      surface: "",
      pieces: "",
      ville: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setResult("");
    setLoading(true);
    const formattedData = {
      ...data,
    };
    try {
      // Simulated API call
      const response = await postGeneration(formattedData);
      setResult((response as { annonce: string }).annonce);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white mt-25">
      {loading && (
        <div className="fixed inset-0 bg-[var(--background-color)] bg-opacity-100 flex items-center justify-center z-30">
          <div className="w-16 h-16 border-4 border-[var(--secondary-color)] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="container mx-auto px-6 py-12">
        {/* Guide */}
        <GuideSection title="Voir notre guide" steps={steps} />

        {/* Generation Form */}
        <div className="bg-[var(--primary-color)] rounded-lg p-8 mb-12 mt-10">
          <h2 className="text-3xl font-bold mb-8 !text-white">Générer une annonce</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Property Type */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold mb-2 !text-white">Type de bien</label>
              <Controller
                name="type"
                control={control}
                rules={{ required: "Veuillez sélectionner un type de bien" }}
                render={({ field }) => (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => field.onChange(type)}
                        className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${
                          field.value === type
                            ? "bg-[#132540] text-white"
                            : "!bg-white hover:bg-zinc-700 text-[#132540]"
                        }`}
                      >
                        <Building2 size={24} />
                        <span>{type}</span>
                      </button>
                    ))}
                  </div>
                )}
              />
              {errors.type && (
                <p className="text-red-500 text-sm mt-2">{errors.type.message}</p>
              )}
            </div>

            {/* Surface & Pieces */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2 !text-white">Surface (m²)</label>
                <Controller
                  name="surface"
                  control={control}
                  rules={{ required: "La surface est requise" }}
                  render={({ field }) => (
                    <div className="relative">
                      <Square className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        {...field}
                        type="number"
                        className="w-full bg-[var(--background-color)] text-[var(--secondary-color)] rounded-lg p-4 pl-12 focus:ring-2 focus:ring-[#132540] focus:outline-none"
                        placeholder="Surface"
                      />
                    </div>
                  )}
                />
                {errors.surface && (
                  <p className="text-red-500 text-sm mt-2">{errors.surface.message}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2 !text-white">Nombre de pièces</label>
                <Controller
                  name="pieces"
                  control={control}
                  rules={{ required: "Le nombre de pièces est requis" }}
                  render={({ field }) => (
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        {...field}
                        type="number"
                        className="w-full bg-[var(--background-color)] text-[var(--secondary-color)] rounded-lg p-4 pl-12 focus:ring-2 focus:ring-[#132540] focus:outline-none"
                        placeholder="Nombre de pièces"
                      />
                    </div>
                  )}
                />
                {errors.pieces && (
                  <p className="text-red-500 text-sm mt-2">{errors.pieces.message}</p>
                )}
              </div>
            </div>

            {/* Ville */}
            <div>
              <label className="block text-lg font-semibold mb-2 !text-white">Ville</label>
              <Controller
                name="ville"
                control={control}
                rules={{ required: "La ville est requise" }}
                render={({ field }) => (
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      {...field}
                      className="w-full bg-[var(--background-color)] text-[var(--secondary-color)] rounded-lg p-4 pl-12 focus:ring-2 focus:ring-[#132540] focus:outline-none"
                      placeholder="Ville"
                    />
                  </div>
                )}
              />
              {errors.ville && (
                <p className="text-red-500 text-sm mt-2">{errors.ville.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#132540]  !text-white p-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#132540] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Générer l'annonce
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-[var(--primary-color)] rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 !text-white">Résultat</h2>
            <div className="bg-[var(--background-color)] rounded-lg p-6">
              <p className="text-gray-300 whitespace-pre-line">{result}</p>
            </div>
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
});

export default App;