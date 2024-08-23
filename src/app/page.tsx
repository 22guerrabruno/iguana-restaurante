/* eslint-disable @next/next/no-img-element */
'use client';
import BestCocktails from '@/components/BestCocktails';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import CartelTel from '@/components/CartelTel';
import Cocktails from '@/components/Cocktails';
import Dessert from '@/components/Dessert';
import ExtraContent from '@/components/ExtraContent';
import Gastronomy from '@/components/Gastronomy';
import HealthyFood from '@/components/HealthyFood';
import Hero from '@/components/Hero';
import Pictures from '@/components/Pictures';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';

import Location from '@/components/Location';
import Logo from '@/components/Logo';

export default function Home() {
  const comment = [
    '/comment1.png',
    '/comment2.png',
    '/comment3.png',
    '/comment4.png',
    '/comment5.png',
  ];
  const { isEnglish } = useLanguage();
  return (
    <main className='flex flex-col items-center justify-center gap-2 w-full scroll-smooth transition duration-300'>
      <div className='w-full'>
        <Hero />
      </div>
      <div
        className='w-full flex flex-col lg:flex-row items-center justify-between mt-20 h-fit gap-8 p-4'
        id='carta'>
        <Card />
        <Dessert />
        <Cocktails />
      </div>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between mt-20 h-fit gap-8 pb-14'>
        <ExtraContent />
      </div>
      <h2 className='font-raleway-800 text-4xl font-bold'>
        {!isEnglish ? 'Gastronomía & Cocktails' : 'Gastronomy & Cocktails'}
      </h2>
      <hr className='h-1 border-1 w-full border-gray-200 mt-10' />
      <div className='w-full flex flex-col lg:flex-row items-center justify-center mt-10 h-fit gap-8 p-4 '>
        <div className='flex flex-col items-center justify-center gap-6 w-full p-4'>
          <HealthyFood />
          <Gastronomy />
          <BestCocktails />
        </div>
        <div className='flex justify-center items-center '>
          <CartelTel />
        </div>
      </div>{' '}
      <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
      <div className='flex items-center justify-center w-full mb-10'>
        <Link
          className='text-sky-300'
          href='/our-menu'>
          <Button className='border-[2px] border-sky-300 bg-white text-black hover:bg-sky-300 hover:font-bold hover:text-white'>
            {!isEnglish ? 'Conoce toda nuestra carta' : 'Check all our menu'}
          </Button>
        </Link>
      </div>
      <div className='w-full mb-10'>
        <Pictures />
      </div>
      <div className='w-full mb-20 p-8 h-[500px]'>
        <h2 className='w-full flex items-center justify-center font-raleway-800 text-4xl font-bold'>
          {!isEnglish
            ? 'Lo que la gente dice de Nosotros'
            : 'What people say about us'}
        </h2>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <Carousel
          autoPlay={true}
          imageArray={comment}
          autoPlaySpeed={5000}
          showDots={true}
        />
      </div>
      <div className='w-full'>
        <Location />
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <hr className='h-1 border-1 w-full border-gray-200' />
        <Logo />
        <p className='font-raleway-400 text-xs w-full bg-sky-300 p-2 text-center text-white'>
          © 2021 Iguana Beach Bar & Cocktail`s
        </p>
      </div>
    </main>
  );
}
