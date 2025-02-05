import React from 'react';

interface NavbarLogoProps {
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; // Actualizado para aceptar el evento
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onLogoClick }) => {
  return (
    <div className="navbar-logo-wrapper">
      <a href="/" onClick={(e) => { e.preventDefault(); onLogoClick(e); }} className="navbar-logo-link">
        <img
          src="/images/Logoprin1.png"
          alt="Instinto Nómade Logo"
          className="navbar-logo-img"
        />
      </a>
    </div>
  );
};

export default NavbarLogo;