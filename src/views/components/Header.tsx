import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type PageLink = {
  id: string;
  url: string;
  name: string;
};

type HeaderProps = {
  pagesLinks: PageLink[];
};

const logoMain = "/public/img/Logo_main_bienvu.png";
const menuIcon = "/public/img/bars-solid.svg";

const Header: React.FC<HeaderProps> = ({ pagesLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-3 z-50 transition-all duration-300 bg-plain-transp ${
        isScrolled ? "!bg-grey shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="logo-main">
          <img src={logoMain} alt="Logo" className="h-20" />
        </Link>

        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-6">
            {pagesLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.url} className="transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <img src={menuIcon} alt="Menu" className="h-8 w-8" />
          </button>
        </div>

        <Link to="/contact" className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center hover:scale-105">
          <p className="text-light">Contact</p>
        </Link>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {pagesLinks.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  to={link.url}
                  className="uppercase hover:text-primary transition block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;