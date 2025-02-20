import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="footer-title">Instinto Nómade</h3>
          <p className="footer-subtitle">{t('footer.slogan')}</p>
        </div>
        <div className="footer-social">
          <a href="#" className="footer-social-link"><Facebook /></a>
          <a href="#" className="footer-social-link"><Twitter /></a>
          <a href="https://www.instagram.com/instintonomadearg?igsh=ajJqbnl2bDcwaHFz" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Instagram /></a>
          <a href="#" className="footer-social-link"><Youtube /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Instinto Nómade. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;