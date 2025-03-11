import { renderRoutes, routes } from "@routes/routes";
import './App.css'
import { ToastContainer } from 'react-toastify'
import sun from "@public/img/sun.svg";
import moon from "@public/img/moon.svg";
import { useTheme } from "./theme/ThemeContext";
import Header from "./views/components/Header";
import BackToTop from "./views/components/BackToTop";
import Footer from "./views/components/Footer";
import { navLinks } from "./navLinks";

function App() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <>
    <Header pagesLinks={navLinks} />
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
      <BackToTop />
      <Footer pagesLinks={navLinks}></Footer>
    </>
  )
}

export default App