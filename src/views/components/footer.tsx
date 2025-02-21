// Footer.js


// Définition du type pour pagesLinks
type Link = {
    id: number;
    url: string;
    name: string;
  };

const Footer = ({ pagesLinks }: { pagesLinks: Link[] }) => {

   return (
<footer className="py-6">
  <div className="footer-design container mx-auto flex flex-col items-center gap-6 text-center">
    
    {/* Logo + Mentions */}
    <div className="logo-footer flex flex-col items-center gap-2">
      <img src="" alt="Logo de pied de page de BienVu" className="h-12 w-auto" />
      <p className="text-xs md:text-base bold">
        Yannis Duvigneau <span style={{color : 'var(--primary-color)'}}>&</span> Paul Blanchon
      </p>
    </div>

    {/* Menu Links - Toujours centré */}
    <div className="menu-links-footer">
      <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
        {pagesLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </div>
</footer>



   );
}

export default Footer;
