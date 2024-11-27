import React from 'react';
import Image from 'next/image';


interface FooterProps {
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ 

  companyName = 'Netushi' 
}) => {
  return (
    <footer className="bg-black border-t-2 border-t-red py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h4 className='text-gray-600 text-md mb-4'>Síguenos en nuestras redes sociales</h4>
        <div className="flex space-x-4 mb-4">
            <a id="Facebook" href="https://www.facebook.com/profile.php?id=61568059884022" target="_blank" className="mr-4">
              <Image src="/facebook.svg" width={48} height={48} alt="Facebook Logo" />
            </a>

            <a id="Instagram" href="https://www.instagram.com/netushitogo/" target="_blank">
              <Image src="/instagram.svg" width={48} height={48} alt="Instagram Logo" />
            </a>
        </div>
        <p className="text-md text-gray-600">
          © {new Date().getFullYear()} {companyName}. Todos los derechos reservados.
        </p>
        <span className="flex justify-center text-center text-md text-gray-600">
            Made by: <a href="https://mabs.dev/" target="_blank" rel="noopener noreferrer"> mabs.dev</a>
          </span>
      </div>
    </footer>
  );
};

export default Footer;