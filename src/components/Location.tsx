'use client';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';
import { Button } from './ui/button';

const Location = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full justify-center items-center flex flex-col'>
      <h2 className='font-raleway-800 text-4xl font-bold w-full flex items-center justify-center'>
        {!isEnglish ? 'Ubicación' : 'Location'}
      </h2>
      <hr className='h-1 border-1 w-full border-gray-200 mt-10' />
      <div className='w-full flex flex-col lg:flex-row lg:items-start items-center justify-center mt-10 h-fit gap-8 pb-8 '>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24928.581174249528!2d0.02921166589108919!3d38.64720989379345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129dfe178a5563c1%3A0xfd99c1370cc1bcc1!2sIguana%20Restaurant%20%26%20Cocktails!5e0!3m2!1ses!2ses!4v1724348310799!5m2!1ses!2ses'
          style={{ border: 0 }}
          loading='lazy'
          className='w-[350px] h-[500px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[450px] lg:w-[750px] mb-10'></iframe>
        <div className='flex flex-col items-start justify-center gap-6 w-full px-4 max-w-[300px]'>
          <h2 className='text-2xl font-semibold text-center sm:text-start font-raleway-800'>
            {!isEnglish ? 'Encuéntranos en:' : 'Find us at:'}
          </h2>
          <p className='font-raleway-400 text-sm'>
            Calle Gran Bretaña, Calpe (Alicante) <br />
            Teléfono: 96 506 43 66
          </p>
          <p className='font-raleway-400 text-sm '>
            En un entorno paradisíaco, frente al Mar Mediterráneo, descubrirás
            la mejor gastronomía en Iguana Beach Bar Calpe
          </p>
          <a
            href='https://www.facebook.com/Iguana-517245781753623/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <FaFacebookSquare
              className='text-4xl text-blue-800'
              size={24}
            />
            {isEnglish
              ? 'Connect us on Facebook'
              : 'Conecta con nosotros en Facebook'}
          </a>
          <a
            href='https://www.facebook.com/Iguana-517245781753623/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <SiTripadvisor
              className='text-4xl text-green-800'
              size={24}
            />
            {isEnglish
              ? 'Rate us on TripAdvisor'
              : 'TripAdvisor, danos tu opinión'}
          </a>
          <Link
            href='/contact-us'
            className='w-full flex items-center justify-center'>
            <Button
              className='border-[2px] border-sky-300 bg-white text-black hover:bg-sky-300 
              hover:font-bold hover:text-white whitespace-nowrap w-full'>
              {isEnglish ? ' Contact Us' : 'Contactanos'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
