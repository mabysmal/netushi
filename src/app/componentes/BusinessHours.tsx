import React, { useState, useEffect } from 'react';

interface BusinessHoursType {
  [key: string]: {
    open: string;
    close: string;
  };
}

interface BusinessHoursProps {
  hours: BusinessHoursType;
}

const BusinessHours = ({ hours }: BusinessHoursProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkIfOpen = () => {
    const now = new Date();
    const day = now.toLocaleDateString('es-ES', { weekday: 'long' });
    const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    
    const dayHours = hours[day.charAt(0).toUpperCase() + day.slice(1)];
    
    if (dayHours) {
      const [currentHour, currentMinute] = time.split(':');
      const [openHour, openMinute] = dayHours.open.split(':');
      const [closeHour, closeMinute] = dayHours.close.split(':');
      
      const current = parseInt(currentHour) * 60 + parseInt(currentMinute);
      const open = parseInt(openHour) * 60 + parseInt(openMinute);
      const close = parseInt(closeHour) * 60 + parseInt(closeMinute);
      
      setIsOpen(current >= open && current <= close);
    }
  };

  useEffect(() => {
    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Actualizar cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Horarios</h2>
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Estado actual:</h3>
          <span className={`px-4 py-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
            {isOpen ? 'Abierto' : 'Cerrado'}
          </span>
        </div>
        {Object.entries(hours).map(([day, times]) => (
          <div key={day} className="flex justify-between py-2 border-b border-gray-700">
            <span>{day}</span>
            <span>{times.open} - {times.close}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessHours;