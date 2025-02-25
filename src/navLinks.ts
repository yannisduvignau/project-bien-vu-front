// navLinks.ts
export interface NavLink {
    id: string;
    url: string;
    name: string;
  }
  
  export const navLinks: NavLink[] = [
    { id: "home", url: '/', name: 'Accueil' },
    { id: "guide", url: '/#guide', name: 'Guide' },
    { id: "analyser", url: '/analyse', name: 'Analyse' },
    { id: "estimer", url: '/estimation', name: 'Estimation' },
    { id: "generer", url: '/generation', name: 'Génération' }
  ];