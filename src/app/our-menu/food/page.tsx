const FoodMenuPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 p-4 h-full'>
      <iframe
        src='/comida-iguana.pdf'
        width={300}
        height={900}
        allowFullScreen
        className='w-full'></iframe>
    </div>
  );
};

export default FoodMenuPage;
