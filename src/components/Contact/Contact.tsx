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
            <p>+549 2613377921</p>
            <a 
              href="https://wa.me/+5492613377921" 
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
            <p>Avenida San Martin 1122, Mendoza, Argentina</p>
            <a 
              href="https://maps.app.goo.gl/UkDYyzWWbPrR3SNT6" 
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