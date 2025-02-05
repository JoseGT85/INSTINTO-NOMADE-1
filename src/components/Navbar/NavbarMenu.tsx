import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

interface NavbarMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  t: (key: string) => string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu, t }) => {
  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menú principal */}
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <HashLink
          smooth
          to="/#home"
          className="navbar-link"
          onClick={toggleMenu}
        >
          {t('navbar.home')}
        </HashLink>
        <HashLink
          smooth
          to="/quienes-somos"
          className="navbar-link"
          onClick={toggleMenu}
        >
          {t('navbar.aboutUs')}
        </HashLink>
      </div>
    </>
  );
};

export default NavbarMenu;