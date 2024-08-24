'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';

const OurMenuPage = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 p-4'>
      <h1 className='font-vibes text-5xl w-full text-center mt-4 mb-4'>
        {isEnglish ? 'Our Menu' : 'Nuestra Carta'}
      </h1>
      <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
      <div className='flex flex-col items-center justify-center w-full p-4 md:flex-row flex-grow gap-4'>
        <div className='flex flex-col items-center justify-center flex-grow gap-4 mb-10 md:mb-0'>
          <h2 className='flex w-full items-center justify-center font-raleway-800 text-4xl font-bold'>
            {isEnglish ? 'Food Menu' : 'Menu Comidas'}
          </h2>
          <a
            href='/comida-iguana.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='/comida2.jpg'
              alt='comida'
              className=' w-72 h-72 rounded-full object-cover'
            />
          </a>
        </div>
        <div className='flex flex-col items-center justify-center flex-grow gap-4 mb-10 md:mb-0'>
          <h2 className='flex w-full items-center justify-center font-raleway-800 text-4xl font-bold'>
            {isEnglish ? 'Drinks Menu' : 'Menu de Bebidas'}
          </h2>
          <a
            href='/bebida-iguana.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='/cocktails-bar.jpeg'
              alt='drinks'
              className=' w-72 h-72 rounded-full object-cover'
            />
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            DESAYUNOS (solo hasta las 13:00h)
          </h3>
          <p className='font-raleway-400 text-xs mb-1'>
            SIMPLE: Café o té y tostada
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            INTERNACIONAL: Café o Té, tostada, croissant y zumo de naranja
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            HUEVOS: Café o Té, huevos,tostada (aceite o tomate)y zumo de naranja
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            FRESCO: Café o Té, ensalada de fruta fresca, tostada y zumo de
            naranja
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            ENTRADAS Y PARA PICAR
          </h3>

          <p className='font-raleway-400 text-xs mb-1'>Carpaccio de salmón</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Queso camembert en costra con mermelada de frutos del bosque
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Queso camembert trufado al horno
          </p>

          <p className='font-raleway-400 text-xs mb-1'>
            Delicia de gambas con sus dos salsas
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Croquetas de jamon ibérico (6 unidades)
          </p>

          <p className='font-raleway-400 text-xs mb-1'>
            Tataki de atún con costra de sésamo y teriyaki a nuestro estilo
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Pulpo a la brasa con meloso de pimiento rojo
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Mejillones Thai</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Calamar Romana con dos mayonesas
          </p>

          <p className='font-raleway-400 text-xs mb-1'>Sardinas grilladas</p>

          <p className='font-raleway-400 text-xs mb-1'>
            Patatas fondant y nuestra salsa brava
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Bocaditos de cordero con foie y Pedro Ximenez
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Tabla de quesos</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Jamón ibérico de bellota extra
          </p>

          <p className='font-raleway-400 text-xs mb-1'>Tartar de salmón</p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />

        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>ENSALADAS</h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Cabra e higos (Brotes, queso de cabra, piñones, cherry, bacon y
            salsa de higos)
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Cesar (lechuga, pollo parmesano, croutons y salsa cesar)
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            De la huerta (lechuga, tomate, atún, cebolla, anchoas, huevo duro y
            zanahoria)
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            De salmón (brotes, salmón ahumado, dátiles, nueces, queso feta y
            salsa de Eneldo)
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Carpesse (tomate, mozzarela y albahaca)
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Ventresca (ventresca de atún, tomate, cebolla tierna y aceite de
            oliva especiado)
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>HAMBURGUESAS</h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Romana: Mozzarella, tomate a la plancha, orégano y rúcula
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Bariloche: Queso de cabra y cebolla caramelizada
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            New York: Queso chedar, lechuga, tomate, cebolla y pepinillos
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Soho: Queso chedar, bacon, 2 aros de cebolla y salsa bbq
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Ibérica: Jamón serrano, queso manchego y tomate a la plancha
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Kentucky: pollo crujiente, lechuga, tomete y cebolla
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Gourmet: Foie, cebolla caramelizada y roquefort
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            ARROCES (minimo 2 personas. Precio por persona. 30 min)
          </h3>
          <p className='font-raleway-400 text-xs mb-1'>Paella valenciana</p>
          <p className='font-raleway-400 text-xs mb-1'>Arroz Negro</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Arroz Meloso con bogavante
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Arroz de Senyoret</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Arroz de pato y setas salvajes
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Arroz de verduras ( VEGANO )
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            PESCADO Y MARISCOS
          </h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Rodaballo braseado con setas y pure de apio nabo
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Salmón con salsa de Jerez Atún rojo con teriyaki
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Lubina salvaje en su salsa con verduras y puré de zanahoria
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Arroz de Senyoret</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Atún rojo con teriyaki
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            CARNES A LA PARRILLA
          </h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Costillas a la BBQ con puré de patatas
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Pechuga de pollo de campo braseada con salsa miel y mostaza,pure de
            patatas y verdura baby
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Solomillo de ternera Angus con Patatas en Gajo y Pimiento de Padrón
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Confit de pato con pure de patata,endivia y salsa naranja
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Mollejas de ternera con cebolleta
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Entraña de Ternera a la Parrilla con gajos de patatas
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>
            MENÚ DE NIÑO (solo hasta 12 años)
          </h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Eleccion de uno de los siguientes:
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Alitas de pollo con patatas fritas
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Pasta a la bolognesa</p>
          <p className='font-raleway-400 text-xs mb-1'>
            Pechuga de pollo al punto con patatas fritas
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Incluye un refresco y una bola de helado
          </p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <div className='w-full flex flex-col items-start justify-center leading-6'>
          <h3 className='font-raleway-800 font-semibold mb-2'>POSTRES</h3>
          <p className='font-raleway-400 text-xs mb-1'>
            Brownie de chocolate tulakalum y helado de vainilla Bourbon
          </p>
          <p className='font-raleway-400 text-xs mb-1'>
            Tarta de ricota y dulce de leche
          </p>
          <p className='font-raleway-400 text-xs mb-1'>Tarta de zanahoria</p>
          <p className='font-raleway-400 text-xs mb-1'>Tarta de manzana</p>
          <p className='font-raleway-400 text-xs mb-1'>Volcán de chocolate</p>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
      </div>
    </div>
  );
};

export default OurMenuPage;
