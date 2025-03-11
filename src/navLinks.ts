// navLinks.ts
export interface NavLink {
    id: string;
    url: string;
    name: string;
    className: string;
  }
  
  export const navLinks: NavLink[] = [
    { id: "home", url: '/', name: 'Accueil', className : 'hidden md:nav-link'},
    // { id: "guide", url: '/#guide', name: 'Guide' },
    { id: "analyser", url: '/analyse', name: 'Analyse', className : 'nav-link' },
    { id: "estimer", url: '/estimation', name: 'Estimation', className : 'nav-link' },
    { id: "generer", url: '/generation', name: 'Génération', className : 'nav-link' }
  ];