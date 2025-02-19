import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import NavbarLogo from './NavbarLogo';
import NavbarControls from './NavbarControls';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navigate = useNavigate(); // Hook para navegación programática

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) {
      toggleTheme();
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  const handleLogoClick = () => {
    navigate('/'); // Redirige a la página principal
    setTimeout(() => {
      scrollToTop(); // Asegura el desplazamiento suave después de la redirección
    }, 50); // Pequeño retraso para permitir la carga de la página
  };

  const handleHomeClick = () => {
    navigate('/'); // Redirige a la página principal
    setTimeout(() => {
      scrollToTop(); // Asegura el desplazamiento suave después de la redirección
    }, 50); // Pequeño retraso para permitir la carga de la página
  };

  return (
    <>
      {/* Logo siempre visible */}
      <NavbarLogo onLogoClick={handleLogoClick} />

      {/* Navbar que se oculta/muestra según el scroll */}
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <div className="navbar-container">
          {/* Botón del menú hamburguesa */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menú principal */}
          <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            {/* Botón Inicio */}
            <Link to="/" onClick={handleHomeClick} className="navbar-link">
              {t('navbar.home')}
            </Link>

            {/* Botón Quiénes somos */}
            <Link to="/quienes-somos" onClick={closeMenu} className="navbar-link">
              {t('navbar.aboutUs')}
            </Link>
          </div>

          {/* Controles (Tema e Idioma) */}
          <NavbarControls
            theme={theme}
            toggleTheme={toggleTheme}
            i18n={i18n}
            changeLanguage={changeLanguage}
          />
        </div>
      </nav>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;