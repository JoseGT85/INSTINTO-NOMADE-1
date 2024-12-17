import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ContactInfo.css';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  const contactItems = [
    { 
      icon: Phone, 
      title: 'contact.phone', 
      content: '+549 2613377921',
      link: 'tel:+549 2613377921',
      linkText: 'Llamar'
    },
    { 
      icon: Mail, 
      title: 'contact.email', 
      content: 'info@instintonomade.com',
      link: 'mailto:info@instintonomade.com',
      linkText: 'Enviar correo'
    },
  ];

  return (
    <div id="contact-info" className="contact-info-section">
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
              <div className="contact-info-links">
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-info-link">
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;