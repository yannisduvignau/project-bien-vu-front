// steps.ts
export interface Steps {
  number: number;
  title: string;
  text: string;
}

export const steps: Steps[] = [
  {
    number: 1,
    title: `<span className="text-exerg uppercase">Copiez</span> une
                      annonce immobilière`,
    text: "(SeLoger, LeBonCoin, Century21...)",
  },
  {
    number: 2,
    title: `<span className="text-exerg uppercase">Sélectionnez</span>{" "}
                    votre outil BienVu`,
    text: "Analyser / Estimer / Générer",
  },
  {
    number: 3,
    title: `<span className="text-exerg uppercase">Collez</span>{" "}
                    l'annonce immobilière`,
    text: 'Dans le champ texte "Déposer l\'annonce ici:"',
  },
  {
    number: 4,
    title: `<span className="text-exerg uppercase">Cliquez</span> sur
                    envoyer l'annonce`,
    text: "pour traiter votre demande",
  },
  {
    number: 5,
    title: `Tadam ! Le{" "}
                    <span className="text-exerg uppercase">résultat </span>
                    apparaît`,
    text: "générée par l'IA",
  },
];
