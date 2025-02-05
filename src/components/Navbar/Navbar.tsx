import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarControls from './NavbarControls';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Estado para controlar la visibilidad de la navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Mostrar el navbar solo cuando estás en la parte superior
        setIsNavbarVisible(true);
      } else {
        // Ocultar el navbar al hacer scroll hacia abajo
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambiar tema si está guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
      toggleTheme();
    }
  }, []);

  // Alternar menú móvil
  const toggleMenu = () => setIsOpen(!isOpen);

  // Cambiar idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Scroll suave al inicio
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <>
      {/* Logo siempre visible */}
      <NavbarLogo onLogoClick={scrollToTop} />

      {/* Navbar que se oculta/muestra según el scroll */}
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
  {/* Logo */}
  <div className="navbar-logo-wrapper">
    <NavbarLogo onLogoClick={scrollToTop} />
  </div>

  {/* Botones y controles */}
  <div className="navbar-right">
    <div className="navbar-menu">
      {/* Botón Inicio */}
      <a href="/#home" onClick={scrollToTop} className="navbar-link">
        Inicio
      </a>

      {/* Botón Quiénes somos */}
      <a href="/quienes-somos" className="navbar-link">
        {t('navbar.aboutUs')}
      </a>
    </div>

    {/* Controles (Tema e Idioma) */}
    <NavbarControls 
      theme={theme}
      toggleTheme={toggleTheme}
      i18n={i18n}
      changeLanguage={changeLanguage}
    />
  </div>
</div>
      </nav>
    </>
  );
};

export default Navbar;