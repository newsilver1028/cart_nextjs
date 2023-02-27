import '@/styles/globals.scss';
import { globalFont } from '@/styles/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={globalFont.className}>
      <body>{children}</body>
    </html>
  );
}
