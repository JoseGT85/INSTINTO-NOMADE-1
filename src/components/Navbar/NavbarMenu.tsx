import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Info } from 'lucide-react';

interface NavbarMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  t: (key: string) => string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ t }) => {
  return (
    <ul className={`navbar-menu`}>
      <li>
        <Link to="/" className="navbar-link">
          <Compass className="navbar-icon" />{t('navbar.activities')}
        </Link>
      </li>
      <li>
        <Link to="/quienes-somos" className="navbar-link" >
          <Info className="navbar-icon" />{t('navbar.aboutUs')}
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;