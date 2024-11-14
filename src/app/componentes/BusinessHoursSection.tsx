'use client'
import BusinessHours from "./BusinessHours";

const BusinessHoursSection = () => {
  // Definimos los horarios del negocio
  const businessHours = {
    'Lunes': { open: '12:00', close: '22:00' },
    'Martes': { open: '12:00', close: '22:00' },
    'Miércoles': { open: '12:00', close: '22:00' },
    'Jueves': { open: '12:00', close: '22:00' },
    'Viernes': { open: '12:00', close: '23:00' },
    'Sábado': { open: '12:00', close: '23:00' },
    'Domingo': { open: '12:00', close: '22:00' }
  };

  return (
    <BusinessHours hours={businessHours} />
  );
};

export default BusinessHoursSection;