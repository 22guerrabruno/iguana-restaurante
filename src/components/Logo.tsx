import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Image
      src='/LogoIguana.png'
      alt='Logo'
      width={300}
      className='object-cover image-highlight'
      height={300}
    />
  );
};

export default Logo;
