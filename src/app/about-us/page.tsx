/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className='relative  overflow-hidden flex flex-col items-center justify-center gap-4'>
      <img
        src='/leosequera.png'
        alt='Descripción de la imagen'
        className='w-full aspect-auto'
      />
      <div className='w-[60%] p-4'>
        <h2 className='font-raleway-800 font-bold text-3xl mb-2'>
          Leonardo Sequera
        </h2>
        <p className='font-raleway-400 text-sm leading-6'>
          Ser chef es más que un trabajo para mí; es una forma de vida, una
          manera de expresar mi creatividad y mi amor por los alimentos. En cada
          plato que preparo, pongo mi corazón y mi alma, buscando transportar a
          los comensales a través de los sabores y las texturas. Aquí, en La
          Iguana, he encontrado un lugar donde puedo celebrar mi pasión, al
          mismo tiempo que me nutro de las ricas tradiciones gastronómicas
          españolas.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
