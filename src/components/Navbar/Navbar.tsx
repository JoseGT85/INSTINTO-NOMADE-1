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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
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

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const currentTheme = theme;
      window.location.href = '/';
      setTimeout(() => {
        const newTheme = localStorage.getItem('theme');
        if (newTheme && newTheme !== currentTheme) {
          toggleTheme();
        }
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <NavbarLogo onLogoClick={scrollToTop} />
        <div className="navbar-right">
          <NavbarMenu 
            isOpen={isOpen} 
            toggleMenu={toggleMenu} 
            t={t} 
          />
          <NavbarControls 
            theme={theme}
            toggleTheme={toggleTheme}
            i18n={i18n}
            changeLanguage={changeLanguage}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;