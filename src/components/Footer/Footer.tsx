import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">TurismoReact</h3>
          <p>Descubre el mundo con nosotros</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><Facebook /></a>
          <a href="#" className="hover:text-blue-400"><Twitter /></a>
          <a href="#" className="hover:text-blue-400"><Instagram /></a>
          <a href="#" className="hover:text-blue-400"><Youtube /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 TurismoReact. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;