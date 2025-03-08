import { Link } from "react-router-dom";

type PageLink = {
  id: string;
  url: string;
  name: string;
};

type FooterProps = {
  pagesLinks: PageLink[];
};

const logoFooter= "/public/img/logo_footer.png";

const Footer: React.FC<FooterProps> = ({ pagesLinks }) => {
  return (
    <footer className="bg-purple py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        
        {/* Logo + Mentions */}
        <div className="logo-footer flex flex-col items-center justify-center gap-4 text-center">
          <Link to="/">
            <img src={logoFooter} alt="Logo textuel de pied de page" className="h-12 w-auto" />
          </Link>
          
          <p className="text-sm text-light">
            Créé par <span className="bold">Yannis Duvignau <span className="text-night">&</span> Paul Blanchon</span>
          </p>
        </div>

        {/* Menu Links */}
        <nav className="menu-links-footer">
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {pagesLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.url} className="hover:text-primary transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mentions légales */}
        <p className="text-xxs text-light">
          © {new Date().getFullYear()} BienVu. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
};

export default Footer;