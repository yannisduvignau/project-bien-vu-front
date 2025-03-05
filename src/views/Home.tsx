import { memo } from "react";
import "../index.css";

const Home = memo(() => {
  return (
    <>
    <section className="entry px-5">
      <div className="container mt-50 mb-30">
        <h1 className="with-left-underline text-left !text-5xl !mb-25"><span className="text-exerg">BienVu</span> votre outil d'annonce immobilière</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4">
          
          {/* Première colonne avec espacement entre les spans */}
          <div className="col mb-10 w-full text-left">
            <p className="flex flex-col space-y-4">  {/* Ajout de `space-y-4` pour gérer l'interligne */}
              <span className="uppercase bold text-6xl self-start">Analyser</span>
              <span className="uppercase bold text-6xl self-center">estimer</span>
              <span className="uppercase bold text-6xl self-end">générer</span>
            </p>
          </div>

          {/* Deuxième colonne (centrée horizontalement et verticalement) */}
          <div className="col mb-10 w-full flex items-center justify-center text-center">
              <p className="bold !text-2xl">des <span className="text-exerg text-4xl">annonces immobilières</span> !</p>
          </div>

        </div>
      </div>
    </section>

    <section id="about" className="about-us mt-[75px] mb-[75px] px-5">
      <div className="container mx-auto md:max-w-[900px] p-10 bg-plain">
        <h2 className="!text-3xl text-night !mb-8">À propos de BienVu</h2>

        <p className="tracking-[0.12em] leading-[2]">
          <span className="bold text-xl">BienVu</span> est <span className="bold text-xl">un outil</span> innovant d’<span className="bold text-xl">analyse</span> et de <span className="bold text-xl">génération</span> d’annonces immobilières, exploitant l’<span className="bold text-xl">intelligence artificielle</span> pour évaluer, 
            analyser et créer des descriptions de biens avec précision et efficacité. Son objectif est de guider l’utilisateur dans le choix d’un bien immobilier,
            qu’il soit destiné à l'achat, à la location, ou à la vente, en s’appuyant sur une estimation précise du prix des biens en fonction de la localisation 
            et des conditions du marché.
        </p>
      </div>
    </section>

    {/* Section Guide Line */}
    <section id="guide" className="guide-line py-16 px-5">
      <div className="container mx-auto">
        <h2 className="!text-4xl font-bold text-primary !mb-15"><span className="text-exerg">Comment</span> utiliser BienVu ?</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Instructions */}

          <div className="text-center">
            <p className="bold !text-3xl">Guide <span className="text-exerg text-4xl">étape</span> par <span className="text-exerg text-4xl">étape</span> !</p>
          </div>

          <div className="step text-center">

            <div className="flex items-center gap-4 bg-around">

              <div className="number  flex-none flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                <span className="">1</span>
              </div>

              <div className="step-text !pl-3">
                <h3 className="text-lg font-bold"><span className="text-exerg uppercase">Copiez</span> une annonce immobilière</h3>
                <p className="text-sm">(SeLoger, LeBonCoin, Century21...)</p>
              </div>

            </div>


            <div className="flex items-center gap-4 mt-4 bg-around">
              <div className="number  flex-none flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                <span>2</span>
              </div>
              <div className="step-text !pl-3">
                <h3 className="text-lg font-bold"><span className="text-exerg uppercase">Sélectionnez</span> votre outil BienVu</h3>
                <p className="text-sm">Analyser / Estimer / Générer</p>
              </div>
            </div>


            <div className="flex items-center gap-4 mt-4 bg-around">
              <div className="number  flex-none flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                <span>3</span>
              </div>
              <div className="step-text !pl-3">
                <h3 className="text-lg font-bold"><span className="text-exerg uppercase">Collez</span> l'annonce immobilière</h3>
                <p className="text-sm">Dans le champ texte "Je dépose (copier/coller)"</p>
              </div>
            </div>


            <div className="flex items-center gap-4 mt-4 bg-around">
              <div className="number  flex-none flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                <span>4</span>
              </div>
              <div className="step-text !pl-3">
                <h3 className="text-lg font-bold"><span className="text-exerg uppercase">Cliquez</span> sur envoyer l'annonce</h3>
                <p className="text-sm">pour traiter votre demande</p>
              </div>
            </div>


            <div className="flex items-center gap-4 mt-4 bg-around">
              <div className="number  flex-none flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-2xl font-bold bg-dot">
                <span>5</span>
              </div>
              <div className="step-text !pl-3">
                <h3 className="text-lg font-bold">Tadam ! Le <span className="text-exerg uppercase">résultat </span>apparaît</h3>
                <p className="text-sm">générée par l'IA</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

<section id="tools" className="px-5 py-12">
<div className="container mx-auto">
  <h2 className="!text-4xl font-bold text-primary !mb-15"><span className="text-exerg">Accèder</span> aux outils BienVu</h2>

  {/* Grid layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Carte Analyser */}
    <div className="feature-card flex flex-col items-center p-6 border bg-around">
      <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">Analyser</h3>
      <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">Comprenez les annonces !</p>
      <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
        Avec notre technologie avancée, obtenez des insights détaillés sur n'importe quelle annonce immobilière.
      </p>
      <a href="/generation" className="mt-auto bg-primary text-light bold bg-plain py-5 px-8 my-5 hover:bg-opacity-80 transition tracking-[0.15em]">
        C'est parti ! 
      </a>
    </div>

    {/* Carte Estimation */}
    <div className="feature-card flex flex-col items-center p-6 border bg-around">
      <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">Estimer</h3>
      <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">Optez pour la fiabilité !</p>
      <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
        Comparez les prix du marché et obtenez une évaluation précise du bien immobilier en quelques secondes.
      </p>
      <a href="/generation" className="mt-auto bg-primary text-light bold bg-plain py-5 px-8 my-5 hover:bg-opacity-80 transition tracking-[0.15em]">
        C'est parti !
      </a>
    </div>

    {/* Carte Génération */}
    <a href="/generation" className="feature-card flex flex-col items-center p-6 border bg-around">
      <h3 className="!text-4xl font-bold text-exerg uppercase !my-5">Générer</h3>
      <p className="text-lg text-center bold mt-2 !mb-15 tracking-[0.1em]">Magnifiez vos annonces !</p>
      <p className="!text-sm mt-4 !mb-15 tracking-[0.08em]">
        Grâce à l'intelligence artificielle, créez des descriptions d'annonces attractives et optimisées en quelques secondes.
      </p>
      <a href="/generation" className="mt-auto bg-primary text-light bold bg-plain py-5 px-8 my-5 hover:bg-opacity-80 transition tracking-[0.15em]">
        C'est parti !
      </a>
    </a>

  </div>
</div>
</section>
</>

  );
});

export default Home;
