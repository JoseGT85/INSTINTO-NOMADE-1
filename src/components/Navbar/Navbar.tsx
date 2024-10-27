import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Sun, Moon, Info, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Estado para monitorear el scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90); // Cambia el estado si el scroll es mayor a 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src="/images/logoIN.png" alt="Instinto Nómade Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-right">
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" className="navbar-link" onClick={toggleMenu}><Compass className="navbar-icon" />{t('navbar.activities')}</Link></li>
            <li><Link to="/destinos" className="navbar-link" onClick={toggleMenu}><MapPin className="navbar-icon" />{t('navbar.destinations')}</Link></li>
            <li><Link to="/quienes-somos" className="navbar-link" onClick={toggleMenu}><Info className="navbar-icon" />{t('navbar.aboutUs')}</Link></li>
          </ul>
          <div className="navbar-controls">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="language-select">
              <button 
                onClick={() => changeLanguage('es')} 
                className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
              >
                <img src="/images/flag-es.png.png" alt="Español" className="flag-icon" />
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
              >
                <img src="/images/flag-en.png.png" alt="English" className="flag-icon" />
              </button>
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
