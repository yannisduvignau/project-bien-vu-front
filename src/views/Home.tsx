import { memo } from "react";
import "../index.css";
const logoAnalyse = "/public/img/analyse.svg";
const logoStep = "/public/img/step.svg";
import { Link } from "react-router-dom";
import { useAssistant } from "@src/hooks/assistant/AssistantContext";
// import { steps } from "@src/steps";

const Home = memo(() => {
  const { handleResizeAssistant, handleChangeBulleText } = useAssistant();

  handleResizeAssistant(
    "15vh",
    "15vh",
    [0.8, -0.3, 1.5],
    22,
    "right-6",
    "bottom-16"
  );
  handleChangeBulleText("🚀 <strong>Bienvenu sur BienVu</strong> 🚀</br> Avec moi, <a href='/analyse'><strong>analyse</strong></a>, <a href='/estimation'><strong>estime</strong></a> et <a href='/generation'><strong>génére</strong></a> tes annonces immobilières !");

  return (
    <>
      <section className="entry px-5 h-[50vh]">
        <div className="mt-28 md:mt-0">
          <div className="md:min-h-96 min-h-auto flex md:!mt-80 relative gap-7">
            <div>
              <h1 className="text-left !text-5xl">
                <span className="text-exerg">BienVu</span>, l’IA au service de
                vos annonces immobilières
              </h1>
              <p className="tracking-[0.12em] leading-[1.5] max-w-auto md:max-w-[800px] !mt-8">
                BienVu révolutionne vos annonces immobilières grâce à
                l'intelligence artificielle. Analysez, estimez et générez des
                descriptions précises pour vos biens immobiliers en toute
                simplicité.
              </p>

              <Link
                to="/"
                className="btn btn-secondary w-fit flex items-center !mt-8"
              >
                <p className="text-light">Découvrir plus en détails</p>
              </Link>
            </div>
            <img
              src={logoAnalyse}
              alt=""
              className="hidden lg:block w-[500px]"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="about-us mt-[75px] mb-[75px] px-5 flex flex-col gap-10"
      >
        <div className="md:block hidden relative mb-20">
          <hr className="text-[var(--secondary-color)]" />
          <p className="separateur absolute left-1/2 transform -translate-x-1/2 -top-3 bg-[var(--background-color)] !px-30">
            ✨ VENEZ DÉCOUVRIR L'APPLICATION ✨
          </p>
        </div>

        <div className="container p-10 bg-plain mt-12 md:mt-0">
          <h2 className="!text-3xl text-light !mb-8">À propos de BienVu</h2>

          <p className="tracking-[0.12em] leading-[1.5]  text-light">
            BienVu est un outil innovant d’analyse et de génération d’annonces
            immobilières qui exploite l’intelligence artificielle pour analyser,
            évaluer et générer des descriptions précises et efficaces. Il permet
            aux utilisateurs d’optimiser leur choix immobilier – achat, location
            ou vente – grâce à une estimation fiable des prix, basée sur la
            localisation et les tendances du marché.
          </p>
        </div>
        {/* <img src={logoAnalyse} alt="" className="hidden md:block w-96" /> */}
      </section>

      {/* <section className="entry px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4">
          {/* Première colonne avec espacement entre les spans */}
      {/* <div className="col mb-10 w-full text-left">
            <p className="flex flex-col space-y-4">
              {" "}
              {/* Ajout de `space-y-4` pour gérer l'interligne */}
      {/* <h1 className="uppercase bold !text-5xl self-start">Analyser</h1>
              <h1 className="uppercase bold !text-5xl self-center">estimer</h1>
              <h1 className="uppercase bold !text-5xl self-end">générer</h1>
            </p>
          </div> */}

      {/* Deuxième colonne (centrée horizontalement et verticalement) */}
      {/* <div className="col mb-10 w-full flex items-center justify-center text-center">
            <p className="bold !text-2xl">
              des{" "}
              <span className="text-exerg text-4xl">annonces immobilières</span>{" "}
              !
            </p>
          </div>
        </div>
      </section> */}

      {/* Section Guide Line */}
      <section id="guide" className="guide-line py-16 px-5">
        <div className="container mx-auto">
          <h2 className="!text-4xl font-bold text-primary !mb-15">
            <span className="text-exerg">Comment</span> utiliser BienVu ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Instructions */}

            <div className="flex md:flex-col items-center gap-y-7">
              <p className="bold !text-2xl text-center">
                Guide <span className="text-exerg">étape</span> par{" "}
                <span className="text-exerg">étape</span> !
              </p>
              <img
                src={logoStep}
                alt=""
                className="hidden md:block w-[400px]"
              />
            </div>

            <div className="step text-center flex flex-col gap-4">
              {/* {steps.map(({ number, title, text }, key) => (
                <div className="flex bg-around" key={key}>
                  <div className="number">
                    <span className="">{number}</span>
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <div className="step-text !pl-3">
                      <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: title }}/>
                      <p className="text-sm">{text}</p>
                    </div>
                  </div>
                </div>
              ))} */}

              <div className="flex bg-around">
                <div className="number">
                  <span className="">1</span>
                </div>

                <div className="flex items-center justify-center w-full">
                  <div className="step-text !pl-3">
                    <h3 className="text-lg font-bold">
                      <span className="text-exerg uppercase">Copiez</span> une
                      annonce immobilière
                    </h3>
                    <p className="text-sm">
                      (SeLoger, LeBonCoin, Century21...)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-around">
                <div className="number">
                  <span>2</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="step-text !pl-3">
                    <h3 className="text-lg font-bold">
                      <span className="text-exerg uppercase">Sélectionnez</span>{" "}
                      votre outil BienVu
                    </h3>
                    <p className="text-sm">Analyser / Estimer / Générer</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-around">
                <div className="number">
                  <span>3</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="step-text !pl-3">
                    <h3 className="text-lg font-bold">
                      <span className="text-exerg uppercase">Collez</span>{" "}
                      l'annonce immobilière
                    </h3>
                    <p className="text-sm">
                      Dans le champ texte "Déposer l'annonce ici:"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-around">
                <div className="number">
                  <span>4</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="step-text !pl-3">
                    <h3 className="text-lg font-bold">
                      <span className="text-exerg uppercase">Cliquez</span> sur
                      envoyer l'annonce
                    </h3>
                    <p className="text-sm">pour traiter votre demande</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-around">
                <div className="number">
                  <span>5</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="step-text !pl-3">
                    <h3 className="text-lg font-bold">
                      Tadam ! Le{" "}
                      <span className="text-exerg uppercase">résultat </span>
                      apparaît
                    </h3>
                    <p className="text-sm">générée par l'IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="px-5 py-12">
        <div className="container mx-auto">
          <h2 className="!text-4xl font-bold text-primary !mb-15">
            <span className="text-exerg">Accèder</span> aux outils BienVu
          </h2>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte Analyser */}
            <div className="feature-card flex flex-col items-center p-6 border bg-around">
              <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">
                Analyser
              </h3>
              <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">
                Comprenez les annonces !
              </p>
              <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
                Avec notre technologie avancée, obtenez des insights détaillés
                sur n'importe quelle annonce immobilière.
              </p>
              <Link
                to="/analiser"
                className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center hover:scale-105"
              >
                C'est parti !
              </Link>
            </div>

            {/* Carte Estimation */}
            <div className="feature-card flex flex-col items-center p-6 border bg-around">
              <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">
                Estimer
              </h3>
              <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">
                Optez pour la fiabilité !
              </p>
              <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
                Comparez les prix du marché et obtenez une évaluation précise du
                bien immobilier en quelques secondes.
              </p>
              <Link
                to="/estimation"
                className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center hover:scale-105"
              >
                C'est parti !
              </Link>
            </div>

            {/* Carte Génération */}
            <a
              href="/generation"
              className="feature-card flex flex-col items-center p-6 border bg-around"
            >
              <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">
                Générer
              </h3>
              <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">
                Magnifiez vos annonces !
              </p>
              <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
                Grâce à l'intelligence artificielle, créez des descriptions
                d'annonces attractives et optimisées en quelques secondes.
              </p>
              <Link
                to="/generation"
                className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center hover:scale-105"
              >
                C'est parti !
              </Link>
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export default Home;
