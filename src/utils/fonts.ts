import { Great_Vibes, Raleway } from 'next/font/google';

const vibes_init = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vibes',
  display: 'swap',
});

const raleway_init = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

export const vibes = vibes_init.variable;
export const raleway = raleway_init.variable;
