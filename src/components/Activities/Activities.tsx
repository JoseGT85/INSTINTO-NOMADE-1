import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Activities.css';

const activities = [
  { name: 'climbing', image: '/images/climbing.jpg' },
  { name: 'hiking', image: '/images/hiking.jpg' },
  { name: 'adventure', image: '/images/adventure.jpg' },
  { name: 'winery', image: '/images/winery.jpg' },
];

const Activities: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="activities-section">
      <div className="activities-container">
        <h2 className="activities-title">{t('activities.title')}</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <Link to="/contacto" key={index} className="activity-card">
              <div className="activity-image-container">
                <img 
                  src={activity.image} 
                  alt={t(`activities.${activity.name}`) || activity.name}
                  className="activity-image" 
                />
                <div className="activity-overlay">
                  <p className="activity-description">{t(`activities.${activity.name}Desc`) || ''}</p>
                </div>
              </div>
              <div className="activity-content">
                <h3 className="activity-name">{t(`activities.${activity.name}`) || activity.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;