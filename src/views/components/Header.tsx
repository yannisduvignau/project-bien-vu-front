import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { HeaderProps } from "@src/interfaces/types";
const logoMain = "/public/img/Logo_main_bienvu.png";



const Header: React.FC<HeaderProps> = ({ pagesLinks }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
        {/* Logo à gauche */}
        <Link to="/" className="logo-main">
          <img src={logoMain} alt="Logo" className="h-20" />
        </Link>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 hover:bg-zinc-50/15 transition rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-icons">{navOpen ? "close" : "menu"}</span>
          </button>

          <Navbar navOpen={navOpen} pagesLinks={pagesLinks} />
        </div>

        <Link to="/" className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center hover:scale-105">
          <p className="text-light">Contact</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;