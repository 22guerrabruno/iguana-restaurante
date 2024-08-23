'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Card = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='flex flex-col items-center justify-between gap-6 w-[360px] h-[505px]'>
      <h2 className='text-5xl font-vibes font-light'>
        {!isEnglish ? 'Comida' : 'Food'}
      </h2>
      <img
        src='/sandwich.jpg'
        alt='Comida'
        className=' w-72 h-72 rounded-full object-cover'
      />
      <p className=' space-y-8 text-center font-raleway'>
        {!isEnglish
          ? 'Cocina mediterránea con una variada carta de entrantes, tapas, carnes a la parrilla, pasta, pescados, arroces y postres.'
          : 'Mediterranean cuisine with a varied menu of appetizers, tapas, grilled meats, pasta, fish, rice dishes, and desserts.'}
      </p>
      <Link href='/our-menu'>
        <p className='font-bold font-raleway'>
          {!isEnglish ? 'Ver nuestra Carta' : 'See our Menu'}
        </p>
      </Link>
    </div>
  );
};

export default Card;
