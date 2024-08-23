'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';

import Link from 'next/link';

const Hero = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full relative flex justify-center items-center'>
      <img
        src='/fondo.JPG'
        alt='Logo'
        className='w-full h-[300px] object-cover'
      />
      <div
        className='absolute inset-0 flex font-bold justify-center items-center text-white
       font-raleway '>
        <Link href='#carta'>
          <p className=' bg-black bg-opacity-35 py-5 px-8'>
            <span className=' border-2 border-white px-6 py-3 hover:bg-sky-300 hover:text-natural-300'>
              {isEnglish ? 'CONOCENOS' : 'Conocenos'}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
