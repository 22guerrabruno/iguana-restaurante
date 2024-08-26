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
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417645/postres_lg7pxf.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417645/queso_jdajte.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417645/sandwich_ncbkdw.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417645/pulpo2_e2pdww.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417644/mollejas2_vzeznr.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417638/calamares_huastd.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417641/Mejillones_r0lnnd.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417646/tataki_pq5qg5.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417639/costillas_cimde4.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417640/gambones_dux81l.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417645/sashimi_nifmrt.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417640/IMG_1300_enzuny.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417641/mollejas_ob2ax2.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417641/merluza_seccgg.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417640/cordero_ogy1od.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417639/confit_tog8tb.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417637/89476BDA-EE35-4983-B0A7-1EF006C0FCFF_womvjp.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1710159369/samples/food/dessert.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417640/croquetas_lmn9nu.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724417646/wantoon_vbvaau.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724430604/Captura_de_pantalla_2024-08-23_a_las_18.29.55_opr0xf.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429390/291FFC38-A611-4031-812F-665638B55348_1_105_c_rsgnxu.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429616/21EF0062-F1C1-49FD-88EC-3FD410063051_1_201_a_smkxp7.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429477/5E3F3758-1750-4075-9A06-98A3A8AA95BC_1_105_c_bbus0k.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724430542/Captura_de_pantalla_2024-08-23_a_las_18.28.52_zcqc38.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429882/EDCC4267-F046-4B3B-9F62-65D33A65EA53_1_105_c_nehs1c.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429866/C04C7B59-5FE2-4958-BDD2-315B72167C09_4_5005_c_cle6cp.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429865/B62904F9-AFDE-49FF-93D1-1BD21415D27C_1_105_c_gjm7v3.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724430672/Captura_de_pantalla_2024-08-23_a_las_18.31.02_btym4q.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724429865/4C2232DF-0719-42EB-A2A8-059516F5A468_1_105_c_nq8sfh.jpg',
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
              className={clsx('w-[80%] max-h-[80%]  rounded-lg cursor-pointer')}
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
