'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [], // Provide default value
  autoplayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - slidesToShow : prevIndex - 1
    );
  };

  // Verificar que images sea un array válido
  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  // No mostrar los botones de navegación si hay menos de 2 imágenes
  const showNavigation = images.length > 1;

  return (
    <div className="relative w-full mb-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            width: `${(images.length * 100) / slidesToShow}%`
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <div className="aspect-square p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors z-10"
            aria-label="Previous slide"
          >
            <Image
              src="/CilArrowCircleLeft.svg"
              alt="Previous"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors z-10"
            aria-label="Next slide"
          >
            <Image
              src="/CilArrowCircleRight.svg"
              alt="Next"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;