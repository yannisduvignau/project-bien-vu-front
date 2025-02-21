
import logoMain from "@public/assets/img/Logo_main_bienvu.png";



// Définition du type pour pagesLinks
type Link = {
  id: number;
  url: string;
  name: string;
};

// Typage des props de Header
const Header = ({ pagesLinks }: { pagesLinks: Link[] }) => {
  const logoHeader = logoMain;
  console.log("Image importée :", logoMain);
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full px-6 py-3">
      <div className="navigation-bar flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="logo-main">
          <img src="projet" alt="Logo" className="h-10" />
          {logoHeader}
        </div>

        {/* Menu Links */}
        <div className="menu-links">
          <ul className="flex gap-6">
            {pagesLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="uppercase hover:text-primary transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
