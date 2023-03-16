import { Inter } from 'next/font/google';
import { Victor } from './victorscript-webbfont.woff2'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--f-inter', 
  });

  export const victor = Victor({
    subsets: ['latin'],
    display: 'swap',
    variable: '--f-victor', 
  });


