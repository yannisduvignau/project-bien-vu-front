import { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
    description: string;
}

interface TraitementsProps {
  handleTraitement: (data: Record<string, unknown>) => Promise<unknown>;
  title: string;
  buttonTitle: string;
  resultTitle: string;
}

const Traitements = memo(({ handleTraitement, title, buttonTitle, resultTitle }: TraitementsProps) => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
        ...data
    }
    try {
      const response = await handleTraitement(formattedData);
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
      <section className="container mx-auto py-12 px-6 space-y-10 mt-36">
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {title}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="description"
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
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
            <button
              type="submit"
              className="btn btn-secondary w-fit flex items-center !mt-8"
            >
              <p className="text-light">{buttonTitle}</p>
            </button>
          </form>
        </div>

        {/* 3️⃣ Le résultat de l'analyse */}
        <div className="p-6 border rounded-lg shadow-md bg-gray-100">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {resultTitle}
          </h2>
          <div className="bg-white p-4 rounded-lg min-h-[150px] flex items-center justify-center text-gray-500">
            {result || "Le résultat apparaîtra ici..."}
          </div>
        </div>
      </section>
    </>
  );
});

export default Traitements;
