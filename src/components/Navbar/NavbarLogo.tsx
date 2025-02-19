import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLogoProps {
  onLogoClick: () => void; // Función para manejar el clic en el logo
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onLogoClick }) => {
  return (
    <div className="navbar-logo-wrapper">
      <Link to="/" onClick={onLogoClick} className="navbar-logo-link">
        <img
          src="/images/Logoprin1.png" // Asegúrate de que esta ruta sea correcta
          alt="Instinto Nómade Logo"
          className="navbar-logo-img"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;