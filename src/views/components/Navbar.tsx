import { PageLink } from '@src/interfaces/types';
import { memo } from 'react';
import { NavLink } from "react-router-dom";

interface NavbarProps {
  navOpen: boolean;
  pagesLinks: PageLink[];
}

const Navbar: React.FC<NavbarProps> = memo(({ navOpen, pagesLinks }) => {
    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
          {pagesLinks.map(({ url, name, className }, key) => (
            <NavLink
              to={url}
              key={key}
              className={({ isActive }) => 
                `${className} ${isActive ? 'active-link' : ''}`
              }
            >
                <p>{name}</p>
            </NavLink>
          ))}
        </nav>
    );
});

export default Navbar;
