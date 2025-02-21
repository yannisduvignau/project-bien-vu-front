import { renderRoutes, routes } from "@routes/routes";
import './App.css'
import { ToastContainer } from 'react-toastify'
import sun from "@public/assets/img/sun.svg";
import moon from "@public/assets/img/moon.svg";
import { useTheme } from "./theme/ThemeContext";
import Header from "./views/components/header";
import Footer from "./views/components/footer";

function App() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  const pagesLinks = [
    { id: 1, url: "#guide", name: "Guide" },
    { id: 2, url: "/Analyse", name: "Analyser" },
    { id: 3, url: "/Estimation", name: "Estimation" },
    { id: 4, url: "/Generation", name: "Génération" },
  ];

  return (
    <>
    <Header pagesLinks={pagesLinks} />
      {/* Boutons d'accessibilité */}
      <div className="fixed right-6 bottom-6 z-50">
        {/* Bouton de changement de thème */}
        <img
          className="w-9 h-9 p-2 rounded-full border border-gray-500 bg-opacity-75 bg-[var(--background-color)] hover:cursor-pointer transition-transform transform hover:scale-110"
          src={themeIcon}
          alt="Switch theme"
          onClick={toggleTheme}
        />
      </div>
      {/* Conteneur principal */}
      <div className="h-[93vh] overflow-auto px-10 pt-16 absolute">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme}
          className="!mt-[7vh]" // Ajout de marge pour éviter le chevauchement avec le header
        />
      </div>

      <div>{renderRoutes(routes)}</div>
      <Footer pagesLinks={pagesLinks} />
    </>
  )
}

export default App
