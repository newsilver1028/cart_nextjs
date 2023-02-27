import localFont from '@next/font/local';

export const globalFont = localFont({
  src: [
    {
      path: './PPNeueMontreal-Regular.woff2',
      weight: '400',
    },
    {
      path: './PPNeueMontreal-Bold.woff2',
      weight: '600',
    },
  ],
  style: 'normal',
  display: 'swap',
  variable: '--pp-neue-montreal',
});
