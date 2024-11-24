import React from 'react';

const ResponsiveBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Versión móvil/tablet - imagen a la izquierda */}
      <div className="md:hidden w-full h-full bg-black">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-25">
          <img
            src="/palillos blanco.png"
            alt="Netushi background"
            className="w-[100vw] h-auto"
          />
        </div>
      </div>

      {/* Versión desktop - imagen centrada */}
      <div className="hidden md:block w-full h-full bg-black">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25">
          <img
            src="/palillos blanco.png"
            alt="Netushi background"
            className="w-[50vw] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBackground;