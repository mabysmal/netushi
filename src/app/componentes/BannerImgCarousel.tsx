'use client'
import React, { useState, useEffect } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

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

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === images.length - slidesToShow ? 0 : prev + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayInterval, images.length, slidesToShow]);

  if (!Array.isArray(images) || images.length === 0) {
    console.log('No images available to display');
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === images.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - slidesToShow : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 mb-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / Math.min(images.length, slidesToShow)}%)`,
            width: `${(images.length * 100) / Math.min(images.length, slidesToShow)}%`
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
            >
              <div className="relative aspect-video">
                <Image
                  src={img.url}
                  alt={img.titulo || 'Banner image'}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors z-10"
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
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors z-10"
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