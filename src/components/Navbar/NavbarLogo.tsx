import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLogoProps {
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onLogoClick }) => {
  return (
    <div className="navbar-logo-wrapper">
      <Link to="/" onClick={onLogoClick} className="navbar-logo-link">
        <img 
          src="/images/logoIN.png" 
          alt="Instinto Nómade" 
          className="navbar-logo-img"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;