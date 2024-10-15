import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, MapPin, Sun, Moon, Info, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Instinto Nómade Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">Instinto Nómade</span>
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
              <Globe className="navbar-icon" />
              <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                <option value="es">ES</option>
                <option value="en">EN</option>
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