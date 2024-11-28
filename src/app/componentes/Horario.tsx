'use client'
import React from 'react';
import type { FC } from 'react';
import { Clock } from 'lucide-react';

interface HorarioItem {
  dia: string;
  horas: string;
}

const HorarioRestaurante: FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [statusText, setStatusText] = React.useState<string>('');
  const [currentDay, setCurrentDay] = React.useState<string>('');

  const horario: HorarioItem[] = [
    { dia: 'Lunes', horas: '06:00 pm - 11:00 pm' },
    { dia: 'Martes', horas: 'Cerrado' },
    { dia: 'Miércoles', horas: '06:00 pm - 11:00 pm' },
    { dia: 'Jueves', horas: '06:00 pm - 11:00 pm' },
    { dia: 'Viernes', horas: '06:00 pm - 11:00 pm' },
    { dia: 'Sábado', horas: '06:00 pm - 11:00 pm' },
    { dia: 'Domingo', horas: '06:00 pm - 11:00 pm' }
  ];

  const getDayName = (dayNumber: number): string => {
    const days: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[dayNumber];
  };

  React.useEffect(() => {
    const checkIfOpen = (): void => {
      const options: Intl.DateTimeFormatOptions = { timeZone: 'America/Monterrey' };
      const nowInMonterrey = new Date(new Date().toLocaleString('en-US', options));
      
      const day = nowInMonterrey.getDay();
      const hour = nowInMonterrey.getHours();
      const minutes = nowInMonterrey.getMinutes();
      const currentTime = hour + minutes / 60;

      setCurrentDay(getDayName(day));

      if (day === 0 || day === 1) {
        setIsOpen(false);
        const nextOpenDay = day === 0 ? 'martes' : 'mañana';
        setStatusText(`Cerrado • Abrimos el ${nextOpenDay} a las 12:00 pm`);
        return;
      }

      if (currentTime >= 12 && currentTime < 23) {
        setIsOpen(true);
        setStatusText('Abierto hasta las 11:00 pm');
      } else {
        setIsOpen(false);
        if (currentTime < 12) {
          setStatusText('Cerrado • Abrimos hoy a las 12:00 pm');
        } else {
          const tomorrow = new Date(nowInMonterrey);
          tomorrow.setDate(tomorrow.getDate() + 1);
          const tomorrowDay = tomorrow.getDay();
          
          if (tomorrowDay === 0 || tomorrowDay === 1) {
            setStatusText('Cerrado • Abrimos el martes a las 12:00 pm');
          } else {
            setStatusText('Cerrado • Abrimos mañana a las 12:00 pm');
          }
        }
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Status del restaurante */}
      <div className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
        isOpen ? 'bg-green-50' : 'bg-red-50'
      }`}>
        <Clock className={`w-5 h-5 ${
          isOpen ? 'text-green-600' : 'text-red-600'
        }`} />
        <span className={`font-medium ${
          isOpen ? 'text-green-600 text-lg' : 'text-red-600 text-lg'
        }`}>
          {statusText}
        </span>
      </div>

      {/* Lista de horarios en una columna */}
      <div className="flex flex-col space-y-2">
        {horario.map((item) => {
          const isToday = item.dia === currentDay;
          return (
            <div 
              key={item.dia} 
              className={`flex justify-between items-center p-4 rounded-lg transition-all ${
                isToday 
                  ? 'bg-blue-50 shadow-md' 
                  : 'bg-dark-brown bg-opacity-85 shadow-sm hover:shadow-md'
              }`}
            >
              <span className={`${
                isToday ? 'font-bold text-blue-700' : 'font-medium text-white'
              }`}>
                {item.dia}
                {isToday && <span className="ml-2 text-sm">(Hoy)</span>}
              </span>
              <span className={`${
                isToday ? 'font-bold text-blue-700' : 'text-white'
              }`}>
                {item.horas}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorarioRestaurante;