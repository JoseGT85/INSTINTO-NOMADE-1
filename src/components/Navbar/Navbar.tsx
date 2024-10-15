import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, MapPin, Sun, Moon, Info, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

// Opciones de logo
const logoOptions = [
  { src: '/public/images/logonuevo.webp', alt: 'Mountain Logo' },

];

// Opciones de título
const titleOptions = [
  'Instinto Nómade',
  'Aventuras Sin Límites',
  'Explora el Mundo',
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  // Estado para el logo y título seleccionados (puedes cambiar el índice para probar diferentes opciones)
  const [selectedLogo] = useState(logoOptions[0]);
  const [selectedTitle] = useState(titleOptions[0]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={selectedLogo.src} alt={selectedLogo.alt} className="navbar-logo-img" />
          <span className="navbar-logo-text">{selectedTitle}</span>
        </div>
        <div className="navbar-right">
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" className="navbar-link" onClick={toggleMenu}><Compass className="navbar-icon" />{t('navbar.activities')}</Link></li>
            <li><Link to="/contacto" className="navbar-link" onClick={toggleMenu}><Phone className="navbar-icon" />{t('navbar.contact')}</Link></li>
            <li><Link to="/destinos" className="navbar-link" onClick={toggleMenu}><MapPin className="navbar-icon" />{t('navbar.destinations')}</Link></li>
            <li><Link to="/quienes-somos" className="navbar-link" onClick={toggleMenu}><Info className="navbar-icon" />{t('navbar.aboutUs')}</Link></li>
          </ul>
          <div className="navbar-controls">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="language-select">
              <select 
                onChange={(e) => changeLanguage(e.target.value)} 
                value={i18n.language}
                className="language-select-dropdown"
              >
                <option value="es" className="language-option">ES</option>
                <option value="en" className="language-option">EN</option>
              </select>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;