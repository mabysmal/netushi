'use client'
import React from 'react';
import ImageCarousel from './BannerImgCarousel';

interface CarouselSectionProps {
  bannerImages?: string[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ bannerImages = [] }) => {
  // Solo mostrar el carrusel si hay imágenes
  if (bannerImages.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      <ImageCarousel images={bannerImages} autoplayInterval={5000} />
    </section>
  );
};

export default CarouselSection;