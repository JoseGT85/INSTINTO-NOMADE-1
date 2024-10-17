import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Destinations.css';

const destinations = [
  { id: 1, name: 'Playa Paraíso', country: 'México', image: 'https://source.unsplash.com/random/800x600/?beach' },
  { id: 2, name: 'Montañas Nevadas', country: 'Canadá', image: 'https://source.unsplash.com/random/800x600/?mountain' },
  { id: 3, name: 'Selva Amazónica', country: 'Brasil', image: 'https://source.unsplash.com/random/800x600/?jungle' },
  { id: 4, name: 'Desierto del Sahara', country: 'Marruecos', image: 'https://source.unsplash.com/random/800x600/?desert' },
  { id: 5, name: 'Fiordos Noruegos', country: 'Noruega', image: 'https://source.unsplash.com/random/800x600/?fjord' },
  { id: 6, name: 'Islas Griegas', country: 'Grecia', image: 'https://source.unsplash.com/random/800x600/?greek,island' },
];

const Destinations: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="destinations-page">
      <div className="destinations-container">
        <h1 className="destinations-title">{t('destinations.title')}</h1>
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <Link to="/contacto" key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <div className="destination-overlay">
                  <span>{t('destinations.bookNow')}</span>
                </div>
              </div>
              <div className="destination-content">
                <h2 className="destination-name">{destination.name}</h2>
                <p className="destination-country">{destination.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;