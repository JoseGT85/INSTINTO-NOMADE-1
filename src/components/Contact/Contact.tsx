import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <div className="contact-grid">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <h2>{t('contact.phone')}</h2>
            <p>+1 234 567 890</p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t('contact.whatsapp')}
            </a>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" />
            <h2>{t('contact.email')}</h2>
            <p>info@instintonomade.com</p>
            <a 
              href="mailto:info@instintonomade.com"
              className="contact-link"
            >
              {t('contact.sendEmail')}
            </a>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <h2>{t('contact.address')}</h2>
            <p>Calle Aventura 123, Ciudad Viajera</p>
            <a 
              href="https://goo.gl/maps/your-google-maps-link-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t('contact.viewMap')}
            </a>
          </div>
          <div className="contact-item">
            <Clock className="contact-icon" />
            <h2>{t('contact.schedule')}</h2>
            <p>{t('contact.weekdays')}</p>
            <p>{t('contact.saturday')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;