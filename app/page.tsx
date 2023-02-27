import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TODO: Input Title',
  description: 'TODO: Input Description',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: [
    {
      url: 'favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function Home() {
  return <main></main>;
}
