import React, { useState, useEffect, useCallback } from 'react';

interface BusinessHoursType {
  [key: string]: {
    open: string;
    close: string;
  };
}

interface BusinessHoursProps {
  hours: BusinessHoursType;
}

const BusinessHours = ({ hours = {} }: BusinessHoursProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkIfOpen = useCallback(() => {
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
  }, [hours]);

  useEffect(() => {
    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, [checkIfOpen]);

  if (!hours || typeof hours !== 'object' || Object.keys(hours).length === 0) {
    return null;
  }

  return (
    <div className="bg-black shadow-lg rounded-lg p-6 max-w-full md:ml-[30%] md:max-w-[40%]">
      <h2 className="text-2xl font-bold mb-4">Horarios</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Estado actual:</span>
          <span className={isOpen ? 'text-green-600' : 'text-red-600'}>
            {isOpen ? 'Abierto' : 'Cerrado'}
          </span>
        </div>
        {Object.entries(hours).map(([day, times]) => (
          <div key={day} className="flex justify-between">
            <span>{day}</span>
            <span>{times.open} - {times.close}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;