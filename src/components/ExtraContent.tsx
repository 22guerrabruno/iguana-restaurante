'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';

const ExtraContent = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full relative flex justify-center items-center'>
      <img
        src='/iguana-restaurant-cocktail-peñon.jpg'
        alt='Logo'
        className='w-full h-[500px] object-cover'
      />
      <div
        className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white
       font-raleway gap-4 bg-black bg-opacity-45 '>
        <p className='font-raleway font-bold text-xl'>
          {isEnglish ? 'About Us' : 'Sobre Nosotros'}
        </p>
        <p className='w-[50%] font-raleway leading-8'>
          {isEnglish
            ? `At Iguana Beach Bar, you can enjoy unbeatable views of the Mediterranean Sea at any time of the day in a fresh and 
            relaxed setting. You can also savor some of our Mediterranean cuisine dishes prepared by our chef, Leonardo David.`
            : `Desde Iguana Beach Bar puedes contemplar unas vistas inmejorables del mar Mediterráneo a cualquier hora del día,
            en un entorno fresco y relajado, así como degustar algunos de nuestros platos de la cocina mediterránea 
            de la mano de nuestro chef Leonardo David.`}
        </p>
        <Link
          href='#carta'
          className='mt-4'>
          <p className='py-5 px-8'>
            <span className=' border-2 border-white px-6 py-3 hover:bg-sky-300 hover:text-natural-300'>
              {isEnglish ? 'CONOCENOS' : 'Conocenos'}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ExtraContent;
