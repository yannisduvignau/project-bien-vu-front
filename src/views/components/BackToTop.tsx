import { useState, useEffect } from "react";

const arrowUp = "/public/img/arrow-up-solid.svg";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Détecter le scroll pour afficher ou masquer la flèche
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
    <button
        onClick={scrollToTop}
        className={`p-3 bg-purple rounded-full transition-transform duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:transform hover:-translate-y-2`}
        aria-label="Remonter en haut"
    >
        <img src={arrowUp} alt="Flèche vers le haut" className="h-8 w-8 filter invert brightness-0" />
    </button>
    </section>
  );
};

export default ScrollToTop;
