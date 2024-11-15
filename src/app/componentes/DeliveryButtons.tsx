import React from 'react';
import type { DeliveryApp } from '../types/menu';

interface DeliveryButtonsProps {
  deliveryLinks: DeliveryApp;
}

const DEFAULT_DELIVERY_LINKS: DeliveryApp = {
  didifood: '',
  ubereats: '',
  rappi: ''
};

const DeliveryButtons: React.FC<DeliveryButtonsProps> = ({ 
  deliveryLinks = DEFAULT_DELIVERY_LINKS 
}) => {
  return (
    <div className="flex gap-4 justify-center">
      {deliveryLinks.didifood && (
        <a 
          href={deliveryLinks.didifood}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Pedir por DiDi Food
        </a>
      )}
      
      {deliveryLinks.ubereats && (
        <a
          href={deliveryLinks.ubereats}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Pedir por Uber Eats
        </a>
      )}
      
      {deliveryLinks.rappi && (
        <a
          href={deliveryLinks.rappi}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Pedir por Rappi
        </a>
      )}
    </div>
  );
};

export default DeliveryButtons;