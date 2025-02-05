import React from 'react';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

interface NavbarControlsProps {
  theme: string;
  toggleTheme: () => void;
  i18n: any;
  changeLanguage: (lng: string) => void;
}

const NavbarControls: React.FC<NavbarControlsProps> = ({
  theme,
  toggleTheme,
  i18n,
  changeLanguage,
}) => {
  return (
    <div className="navbar-controls">
      {/* Selector de idioma */}
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

      {/* Cambio de tema */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default NavbarControls;