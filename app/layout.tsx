import '@/styles/globals.scss';
import { globalFont } from '@/styles/fonts';
import ReactQuery from './components/ReactQuery';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={globalFont.className}>
      <body>
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
