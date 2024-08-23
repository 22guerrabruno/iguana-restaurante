/* eslint-disable @next/next/no-img-element */
const Pictures = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2'>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/pulpo2.jpg'
          alt=''
          className='w-full h-full object-cover zoom-in-150'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/mollejas2.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/calamares.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/Mejillones.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/tataki.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/costillas.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/gambones.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/sashimi.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg'>
        <img
          src='/panacotta.jpg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Pictures;
