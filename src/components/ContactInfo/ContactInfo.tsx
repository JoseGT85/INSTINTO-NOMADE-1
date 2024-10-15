import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ContactInfo.css';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  const contactItems = [
    { icon: Phone, title: 'contact.phone', content: '+1 234 567 890' },
    { icon: Mail, title: 'contact.email', content: 'info@instintonomade.com' },
    { icon: MapPin, title: 'contact.address', content: 'Calle Aventura 123, Ciudad Viajera' },
    { icon: Clock, title: 'contact.schedule', content: ['Lunes a Viernes: 9:00 AM - 6:00 PM', 'Sábados: 10:00 AM - 2:00 PM'] },
  ];

  return (
    <div className="contact-info-section">
      <div className="contact-info-container">
        <h2 className="contact-info-title">{t('contact.title')}</h2>
        <div className="contact-info-grid">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-info-item">
              <item.icon className="contact-info-icon" />
              <h3>{t(item.title)}</h3>
              {Array.isArray(item.content) ? (
                item.content.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;