import React from 'react';
import { BusinessHoursData } from '../types/menu';

interface BusinessHoursProps {
  businessHours: BusinessHoursData;
}

const BusinessHours: React.FC<BusinessHoursProps> = ({ businessHours }) => {
  return (
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Horario</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Lunes:</span> {businessHours.monday}</p>
        <p><span className="font-semibold">Martes:</span> {businessHours.tuesday}</p>
        <p><span className="font-semibold">Miércoles:</span> {businessHours.wednesday}</p>
        <p><span className="font-semibold">Jueves:</span> {businessHours.thursday}</p>
        <p><span className="font-semibold">Viernes:</span> {businessHours.friday}</p>
        <p><span className="font-semibold">Sábado:</span> {businessHours.saturday}</p>
        <p><span className="font-semibold">Domingo:</span> {businessHours.sunday}</p>
      </div>
    </div>
  );
};

export default BusinessHours;
