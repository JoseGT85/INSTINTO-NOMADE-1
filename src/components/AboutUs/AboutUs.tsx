import React from 'react';
import { Info } from 'lucide-react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="subpage-container">
      <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
        <Info className="mr-2 text-orange-500" />
        Quiénes Somos
      </h2>
      <div className="about-us-content">
        <div className="about-us-mission">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">Nuestra Misión</h3>
          <p>
            En TurismoReact, nuestra misión es proporcionar experiencias de viaje inolvidables y enriquecedoras que conecten a las personas con nuevas culturas, lugares y aventuras. Nos esforzamos por ofrecer un servicio personalizado y de alta calidad, siempre respetando el medio ambiente y las comunidades locales.
          </p>
        </div>
        <div className="about-us-vision">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">Nuestra Visión</h3>
          <p>
            Aspiramos a ser líderes en la industria del turismo, reconocidos por nuestra innovación, sostenibilidad y excelencia en el servicio al cliente. Buscamos inspirar a las personas a explorar el mundo, fomentar el entendimiento intercultural y contribuir positivamente a las comunidades que visitamos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;