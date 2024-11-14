'use client'
import React from 'react';
import ImageCarousel from './BannerImgCarousel';

const images = [
  '/api/placeholder/800/800',
  '/api/placeholder/800/800',
  '/api/placeholder/800/800',
  '/api/placeholder/800/800',
  '/api/placeholder/800/800',
  '/api/placeholder/800/800',
];

const CarouselSection = () => {
  return (
    <section className="w-full">
      <ImageCarousel images={images} autoplayInterval={5000} />
    </section>
  );
};

export default CarouselSection;