'use client'
import BusinessHours from "./BusinessHours";

const BusinessHoursSection = () => {
  // Definimos los horarios del negocio
  const businessHours = {
    //Aqui deben ir los horarios que se agregaron en el panel de admin
  };

  return (
    <BusinessHours hours={businessHours} />
  );
};

export default BusinessHoursSection;