import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="subpage-container max-w-4xl w-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 m-4">
        <h1 className="text-2xl font-bold mb-4 text-center">{t('contact.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <Phone className="text-orange-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold">{t('contact.phone')}</h2>
            </div>
            <p className="text-sm">+1 234 567 890</p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 mt-1 inline-block text-sm"
            >
              {t('contact.whatsapp')}
            </a>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <Mail className="text-orange-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold">{t('contact.email')}</h2>
            </div>
            <p className="text-sm">info@instintonomade.com</p>
            <a 
              href="mailto:info@instintonomade.com"
              className="text-orange-500 hover:text-orange-600 mt-1 inline-block text-sm"
            >
              {t('contact.sendEmail')}
            </a>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <MapPin className="text-orange-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold">{t('contact.address')}</h2>
            </div>
            <p className="text-sm">Calle Aventura 123, Ciudad Viajera</p>
            <a 
              href="https://goo.gl/maps/your-google-maps-link-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 mt-1 inline-block text-sm"
            >
              {t('contact.viewMap')}
            </a>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <Clock className="text-orange-500 mr-2" size={20} />
              <h2 className="text-lg font-semibold">{t('contact.schedule')}</h2>
            </div>
            <p className="text-sm">{t('contact.weekdays')}</p>
            <p className="text-sm">{t('contact.saturday')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;