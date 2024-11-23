'use client';

import React from 'react';
import { BusinessHoursData } from '../types/business-hours';

interface BusinessHoursProps {
  businessHours: BusinessHoursData;
}



const BusinessHours: React.FC<BusinessHoursProps> = ({ businessHours }) => {
  const [currentStatus, setCurrentStatus] = React.useState<string>('');
  const daysInSpanish = {
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo'
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof BusinessHoursData;
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = `${currentHour}:${currentMinutes.toString().padStart(2, '0')}`;

    const todaySchedule = businessHours[currentDay];

    if (!todaySchedule.isOpen) {
      // Encontrar el próximo día que esté abierto
      const days = Object.keys(businessHours) as Array<keyof BusinessHoursData>;
      const currentDayIndex = days.indexOf(currentDay);
      let nextOpenDay = days.find((day, index) => 
        index > currentDayIndex && businessHours[day].isOpen
      ) || days.find(day => businessHours[day].isOpen);

      if (nextOpenDay) {
        return `Cerrado. Abrimos ${daysInSpanish[nextOpenDay]} a las ${businessHours[nextOpenDay].openTime}`;
      }
      return 'Cerrado';
    }

    if (currentTime >= todaySchedule.openTime && currentTime < todaySchedule.closeTime) {
      return `Abierto hasta las ${todaySchedule.closeTime}`;
    } else {
      return `Cerrado. Abrimos a las ${todaySchedule.openTime}`;
    }
  };

  React.useEffect(() => {
    setCurrentStatus(getCurrentStatus());
    const timer = setInterval(() => {
      setCurrentStatus(getCurrentStatus());
    }, 60000); // Actualizar cada minuto

    return () => clearInterval(timer);
  }, [businessHours]);

  return (
    <div className="p-4 bg-black rounded-lg shadow-md">
      <div className="mb-4 text-lg font-bold text-center">
        <span className={currentStatus.includes('Abierto') ? 'text-green-600' : 'text-red-600'}>
          {currentStatus}
        </span>
      </div>
      
      <h2 className="text-xl font-bold mb-4">Horario</h2>
      <div className="space-y-2">
        {Object.entries(businessHours).map(([day, schedule]) => (
          <p key={day}>
            <span className="font-semibold">{daysInSpanish[day as keyof typeof daysInSpanish]}:</span>{' '}
            {schedule.isOpen ? 
              `${schedule.openTime} - ${schedule.closeTime}` : 
              'Cerrado'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;