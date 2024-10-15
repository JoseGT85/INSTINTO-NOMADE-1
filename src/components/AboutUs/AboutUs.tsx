import React from 'react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4">
      <div className="subpage-container max-w-4xl w-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
          <Info className="mr-2 text-orange-500" />
          {t('aboutUs.title')}
        </h2>
        <div className="about-us-content space-y-6">
          <div className="about-us-mission">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">{t('aboutUs.mission.title')}</h3>
            <p>{t('aboutUs.mission.content')}</p>
          </div>
          <div className="about-us-vision">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">{t('aboutUs.vision.title')}</h3>
            <p>{t('aboutUs.vision.content')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;