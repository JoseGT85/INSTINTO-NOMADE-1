import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './Activities.css';

interface Activity {
  name: string;
  description: string;
  images: string[];
}

const activities: Activity[] = [
  {
    name: 'Trekking',
    description:
      'Trekking en el cerro Mailhos ubicado a 90 kilómetros de la ciudad de Mendoza, en Valle del Sol, Las Vegas. Tiene un recorrido de 8 kilómetros de ida y vuelta, con una duración de 3 horas aproximadamente y una altitud de casi 3.000 metros sobre el nivel del mar. Dificultad media-baja, sin dificultad técnica y vistas espectaculares.',
    images: ['/images/Trekking.png', '/images/cactus.jpg'],
  },
  {
    name: 'Trekking y Rafting',
    description:
      'Rafting de 12 kilómetros con duración de 1 hora aproximadamente por el Río Mendoza. Recorrido emocionante ideal para familias y grupos de amigos.',
    images: ['/images/potrerillos.jpeg', '/images/Rafting.jpg', '/images/rafting1.jpg'],
  },
  {
    name: 'Trekking y Rappel',
    description:
      'Trekking y Rappel en Garganta del Diablo. Ubicado a 80 kilómetros de la ciudad de Mendoza, El Salto, Potrerillos. Recorrido de 2 horas, de dificultad media-baja a 1700 metros sobre el nivel del mar.',
    images: ['/images/Rappel.jpeg', '/images/Rappel2.jpeg'],
  },
];

const Activities: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  // Manejar el cambio de imagen en el slider
  const handleImageChange = (index: number, direction: 'next' | 'prev') => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[index] || 0;
      const totalImages = activities[index].images.length;
      const newIndex =
        direction === 'next'
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [index]: newIndex };
    });
  };

  return (
    <section className="activities-section">
      <div className="activities-container">
        <h2 className="activities-title">{t('activities.title')}</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => {
            const currentIndex = currentImageIndex[index] || 0;

            return (
              <HashLink smooth to="/#contact-info" key={index} className="activity-card">
                {/* Contenedor del título */}
                <div className="activity-title-container">
                  <h3 className="activity-name">{t(`activities.${activity.name}`)}</h3>
                </div>

                {/* Contenedor de la imagen */}
                <div className="activity-image-container">
                  {/* Slider */}
                  <div className="activity-slider">
                    <img
                      src={activity.images[currentIndex]}
                      alt={t(`activities.${activity.name}`) || activity.name}
                      className="activity-image"
                    />
                    {/* Botones de navegación del slider */}
                    <button
                      className="slider-button prev"
                      onClick={(e) => {
                        e.preventDefault();
                        handleImageChange(index, 'prev');
                      }}
                    >
                      &#10094;
                    </button>
                    <button
                      className="slider-button next"
                      onClick={(e) => {
                        e.preventDefault();
                        handleImageChange(index, 'next');
                      }}
                    >
                      &#10095;
                    </button>
                  </div>
                </div>

                {/* Contenedor de la descripción */}
                <div className="activity-description-container">
                  <p className="activity-description">{t(`activities.${activity.name}Desc`)}</p>
                </div>
              </HashLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;