import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="subpage-container">
      <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Phone className="text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold">Teléfono</h2>
          </div>
          <p>+1 234 567 890</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Mail className="text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold">Email</h2>
          </div>
          <p>info@instintonomade.com</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold">Dirección</h2>
          </div>
          <p>Calle Aventura 123, Ciudad Viajera</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Clock className="text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold">Horario de atención</h2>
          </div>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábados: 10:00 AM - 2:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;