'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import clsx from 'clsx';
import { useState } from 'react';

const ImageGallery = () => {
  const { isEnglish } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const pictures = [
    '/pulpo2.jpg',
    '/mollejas2.jpg',
    '/calamares.jpg',
    '/Mejillones.jpg',
    '/tataki.jpg',
    '/costillas.jpg',
    '/gambones.jpg',
    '/sashimi.jpg',
    '/panacotta.jpg',
    '/brownie.jpg',
    '/merluza.jpg',
    '/queso.jpg',
    '/wantoon.jpg',
    '/croquetas.png',
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleHoverIn = (src: string) => {
    setHoveredImage(src);
  };
  const handleHoverOut = () => {
    setHoveredImage(null);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 p-4'>
      {selectedImage && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40'
          onClick={handleCloseClick}>
          <div className='w-full flex items-center justify-center h-full'>
            <img
              src={selectedImage}
              alt=''
              className={clsx(
                'w-[80%] max-h-[80%] aspect-auto object-cover rounded-lg cursor-pointer'
              )}
            />
          </div>
        </div>
      )}
      <h1 className='text-5xl font-bold font-vibes mt-4 mb-4'>
        {isEnglish ? 'Image Gallery' : 'Galeria de Imagenes'}
      </h1>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2'>
        {pictures.map((src) => (
          <div
            key={src}
            className={clsx(
              `flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg `,
              hoveredImage === src && 'animate-pulse'
            )}
            onMouseEnter={() => handleHoverIn(src)}
            onMouseLeave={handleHoverOut}>
            <img
              src={src}
              alt=''
              className={clsx(
                'w-full h-full object-cover cursor-pointer',
                hoveredImage === src && 'zoom-out-150'
              )}
              onClick={() => handleImageClick(src)}
            />
            {selectedImage === src && (
              <button
                onClick={handleCloseClick}
                className='absolute top-2 right-2 bg-white text-black p-2 rounded-full'>
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
