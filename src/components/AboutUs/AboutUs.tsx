import React from 'react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h2 className="about-us-title">
          <Info className="about-us-icon" />
          {t('aboutUs.title')}
        </h2>
        <div className="about-us-content">
          <div className="about-us-section">
            <h3 className="about-us-subtitle">{t('aboutUs.mission.title')}</h3>
            <p>{t('aboutUs.mission.content')}</p>
          </div>
          <div className="about-us-section">
            <h3 className="about-us-subtitle">{t('aboutUs.vision.title')}</h3>
            <p>{t('aboutUs.vision.content')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;