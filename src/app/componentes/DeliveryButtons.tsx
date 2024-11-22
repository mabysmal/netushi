import React from 'react';
import type { DeliveryApp } from '../types/menu';
import Image from 'next/image';

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
    <section id='DeliveryApps' className='mt-4 px-4 max-w-2xl mx-auto'>
      <h2 className='font-gotham text-xl text-center mb-6'>Ordena a través de tus apps favoritas</h2>
      
      {/* Container que cambia de columna a fila según el breakpoint */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-stretch">
        {deliveryLinks.didifood && (
          <a 
            href={deliveryLinks.didifood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-[#b05328] text-white rounded-2xl hover:bg-gray-800 transition-colors w-full lg:w-1/3"
          >
            <Image
              src="/didi-food.svg"
              alt="Didi Food"
              width={40}
              height={40}
              className="w-auto h-8"
            />
          </a>
        )}
        
        {deliveryLinks.ubereats && (
          <a
            href={deliveryLinks.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-[#40c165] text-white rounded-2xl hover:bg-[#37ab58] transition-colors w-full lg:w-1/3"
          >
            <Image
              src="/uber-eats.svg"
              alt="Uber Eats"
              width={40}
              height={40}
              className="w-auto h-8"
            />
          </a>
        )}
        
        {deliveryLinks.rappi && (
          <a
            href={deliveryLinks.rappi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition-colors w-full lg:w-1/3"
          >
            <Image
              src="/rappi.svg"
              alt="Rappi"
              width={40}
              height={40}
              className="w-auto h-8"
            />
          </a>
        )}
      </div>
    </section>
  );
};

export default DeliveryButtons;