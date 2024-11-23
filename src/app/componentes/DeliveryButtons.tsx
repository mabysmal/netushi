import React from 'react';
import type { DeliveryApp } from '../types/menu';
import Image from 'next/image';

interface DeliveryButtonsProps {
  deliveryLinks: DeliveryApp;
}

const DeliveryButtons: React.FC<DeliveryButtonsProps> = ({ deliveryLinks }) => {
  return (
    <section id='DeliveryApps' className='mt-4 px-4 max-w-2xl mx-auto'>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-stretch">
        {deliveryLinks.ubereats?.active && deliveryLinks.ubereats.link && (
          <a
            href={deliveryLinks.ubereats.link}
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
        
        {deliveryLinks.rappi?.active && deliveryLinks.rappi.link && (
          <a
            href={deliveryLinks.rappi.link}
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