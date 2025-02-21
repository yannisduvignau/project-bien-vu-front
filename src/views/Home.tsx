import { memo } from "react";
import "../index.css";
import "../App.css";

const Home = memo(() => {
  return (
    <>
      <section className="entry">
        <div className="container">
          <h1 className="with-left-underline text-4xl"><span style={{color : 'var(--primary-color)'}}>BienVu</span> votre outil d'annonce immobilière</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4">
            
            <div className="col w-full text-left p-5">
              <p className="flex flex-col space-y-12">
                <span className="uppercase bold text-6xl self-start">Analyser</span>
                <span className="uppercase bold text-6xl self-center">estimer</span>
                <span className="uppercase bold text-6xl self-end">générer</span>
              </p>
            </div>

            <div className="col w-full flex items-center justify-center">
              <p>
                <span className="bold text-1.5xl text-center">des <span className="text-3xl" style={{color : 'var(--primary-color)'}}>annonces immobilières</span> !</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="about-us">

        <div className="container in-card-plain">

          <h2 className="text-3xl">à propos de  BienVu</h2>

          <p>
            <span className="bold text-xl">BienVu</span> est <span className="bold text-xl">un outil </span> 
            innovant d’<span className="bold text-xl">analyse</span> et de <span className="bold text-xl">génération </span>
            d’annonces immobilières, exploitant l’<span className="bold text-xl">intelligence artificielle</span> pour évaluer, 
            analyser et créer des descriptions de biens avec précision et efficacité. 
          </p>

          <p>
            <br/>Son objectif est de vous guider dans le choix d’un bien immobilier,
            qu’il soit destiné à l'achat, à la location, ou à la vente, en s’appuyant 
            sur une estimation précise du prix des biens en fonction de la localisation 
            et des conditions du marché.
          </p>
        
        </div>

      </section>

      <section id="guide" className="guideline">
        <div className="container mx-auto">
          <h2 className="text-4xl">Comment <span style={{color : 'var(--primary-color)'}}>j'utilise BienVu ?</span></h2>

          <div className="guidline-tab grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4">
            
              <div className="col w-full flex items-center justify-center">
                <p>
                  <span className="bold text-4xl text-center">Guide <span style={{color : 'var(--primary-color)'}}>étape</span> par <span style={{color : 'var(--primary-color)'}}>étape</span> !</span>
                </p>
              </div>

            <div className="col w-full text-left">

              <div id="step-1" className="step flex items-center gap-4 border-primary p-10">
    
                {/* Numéro */}
                <div className="number flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold doted">
                  <span className="text-3xl">1</span>
                </div>

                {/* Texte */}
                <div className="step-text flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold"><span className="uppercase" style={{color : 'var(--primary-color)'}}>Copiez</span> une annonce immobilière</h3>
                  <p className="text-" style={{ color: 'var(--contrast-color)' }}>
                    (SeLoger.com, LeBonCoin, Century21, ...)
                  </p>
                </div>


              </div>

              <div id="step-2" className="step flex items-center gap-4 border-primary p-10 mt-5">
    
                {/* Numéro */}
                <div className="number flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold doted">
                  <span className="text-3xl">2</span>
                </div>

                {/* Texte */}
                <div className="step-text flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold"><span className="uppercase" style={{color : 'var(--primary-color)'}}>Sélectionnez</span> votre outil BienVu</h3>
                  <p className="text-sm" style={{ color: 'var(--contrast-color)' }}>
                    Analyser / Estimation / Génération
                  </p>
                </div>
              
              </div>

              <div id="step-3" className="step flex items-center gap-4 border-primary p-10 mt-5">
    
                {/* Numéro */}
                <div className="number flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold doted">
                  <span className="text-3xl">3</span>
                </div>

                {/* Texte */}
                <div className="step-text flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold"><span className="uppercase" style={{color : 'var(--primary-color)'}}>Collez</span> l'annonce immobilière</h3>
                  <p className="text-sm" style={{ color: 'var(--contrast-color)' }}>
                    Dans le champ texte " Déposer l'annonce ici : " 
                  </p>
                </div>
  
              </div>

              <div id="step-4" className="step flex items-center gap-4 border-primary p-10 mt-5">
    
                {/* Numéro */}
                <div className="number flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold doted">
                  <span className="text-3xl">4</span>
                </div>

                {/* Texte */}
                <div className="step-text flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold"><span className="uppercase" style={{color : 'var(--primary-color)'}}>Cliquez</span> sur envoyer l'annonce</h3>
                  <p className="text-sm" style={{ color: 'var(--contrast-color)' }}>
                    pour traiter votre demande
                  </p>
                </div>

              </div>

              <div id="step-5" className="step flex items-center gap-4 border-primary p-10 mt-5">
    
                {/* Numéro */}
                <div className="number flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold doted">
                  <span className="text-3xl">5</span>
                </div>

                {/* Texte */}
                <div className="step-text flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold">Tadam ! Le <span className="uppercase" style={{color : 'var(--primary-color)'}}>résultat</span> apparaît</h3>
                  <p className="text-sm" style={{ color: 'var(--contrast-color)' }}>
                    Généree par l'IA
                  </p>
                </div>

              </div>

            </div>

            

              
          </div>
        
        </div>
      </section>

      <section id="try" className="tryline">
        <div className="container mx-auto">
          <h2 className="text-4xl">Essayez <span style={{color : 'var(--primary-color)'}}>dès maintenant les fonctionnalités de BienVu ?</span></h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Carte Analyser */}
      <div className="feature-card flex flex-col items-center p-6 border-primary bg-primary">
        <h3 className="text-2xl font-bold text-primary">Analyser</h3>
        <p className="text-lg font-semibold text-gray-700 mt-2">Analysez les annonces en un instant !</p>
        <p className="text-sm text-gray-600 mt-4">
          Avec notre technologie avancée, obtenez des informations détaillées sur n'importe quelle annonce immobilière.
        </p>
        <a href="/analyse" className="mt-auto bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition">
          Essayez
        </a>
      </div>

      {/* Carte Estimation */}
      <div className="feature-card flex flex-col items-center p-6 border-primary bg-primary">
        <h3 className="text-2xl font-bold text-primary">Estimation</h3>
        <p className="text-lg font-semibold text-gray-700 mt-2">Obtenez une estimation fiable !</p>
        <p className="text-sm text-gray-600 mt-4">
          Comparez les prix du marché et obtenez une évaluation précise du bien immobilier en quelques secondes.
        </p>
        <a href="/estimation" className="mt-auto bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition">
          Essayez
        </a>
      </div>

      {/* Carte Génération */}
      <div className="feature-card flex flex-col items-center p-6 border-primary bg-primary">
        <h3 className="text-2xl font-bold text-primary">Génération</h3>
        <p className="text-lg font-semibold text-gray-700 mt-2">Générez des annonces automatiquement !</p>
        <p className="text-sm text-gray-600 mt-4">
          Grâce à l'intelligence artificielle, créez des descriptions d'annonces attractives et optimisées en quelques clics.
        </p>
        <a href="/generation" className="mt-auto bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition">
          Essayez
        </a>
      </div>

    </div>
        
        </div>
      </section>
    </>
    
  );
});

export default Home;