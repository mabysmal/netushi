'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { BannerImage } from '../types/menu';

interface ImageCarouselProps {
  images: BannerImage[];
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [],
  autoplayInterval = 5000
}) => {
  // Ordenar las imágenes por el campo 'order'
  const sortedImages = [...images].sort((a, b) => (a.order || 0) - (b.order || 0));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Función para cambiar el slide con reinicio de temporizador
  const changeSlide = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  // Manejador de navegación manual con avance
  const navigateSlide = useCallback((direction: 'next' | 'prev') => {
    const totalGroups = Math.ceil(sortedImages.length / slidesToShow);
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === totalGroups - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalGroups - 1 : currentIndex - 1;
    }
    
    changeSlide(newIndex);
  }, [currentIndex, slidesToShow, sortedImages.length, changeSlide]);

  // Efecto para ajustar slides según tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        // Dispositivos pequeños (móviles)
        setSlidesToShow(1);
      } else if (width < 1024) {
        // Dispositivos medianos (tablets)
        setSlidesToShow(2);
      } else {
        // Dispositivos grandes (laptops/escritorio)
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para autonavegación
  useEffect(() => {
    if (sortedImages.length <= 1) return;

    const interval = setInterval(() => {
      navigateSlide('next');
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayInterval, sortedImages.length, navigateSlide]);

  if (!Array.isArray(sortedImages) || sortedImages.length === 0) {
    return null;
  }

  // Calcular las imágenes a mostrar en el carrusel actual
  const displayImages = sortedImages.slice(
    currentIndex * slidesToShow, 
    (currentIndex * slidesToShow) + slidesToShow
  );

  return (
    <div className="relative w-full">
      {/* Botón de navegación izquierdo */}
      {sortedImages.length > slidesToShow && (
        <button
          onClick={() => navigateSlide('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
          aria-label="Imagen anterior"
        >
          <Image
            src="/CilArrowCircleLeft.svg"
            alt="Anterior"
            width={40}
            height={40}
            className="bg-black/50 rounded-3xl"
          />
        </button>
      )}

      {/* Carrusel de imágenes */}
      <div className="flex transition-transform duration-500 ease-in-out">
        {displayImages.map((img, index) => (
          <div
            key={img.url || index}
            className="w-full sm:w-1/2 lg:w-1/3 px-2 flex-shrink-0"
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={img.url}
                alt={img.titulo || 'Banner image'}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botón de navegación derecho */}
      {sortedImages.length > slidesToShow && (
        <button
          onClick={() => navigateSlide('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
          aria-label="Siguiente imagen"
        >
          <Image
            src="/CilArrowCircleRight.svg"
            alt="Siguiente"
            width={40}
            height={40}
            className="bg-black/50 rounded-3xl"
          />
        </button>
      )}

      {/* Indicadores de posición */}
      <div className="flex justify-center mt-4">
        {Array.from({ 
          length: Math.ceil(sortedImages.length / slidesToShow) 
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;