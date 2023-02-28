'use client';

import '@/styles/globals.scss';
import { globalFont } from '@/styles/fonts';
import { Provider } from 'jotai';
import ReactQuery from './components/ReactQuery';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={globalFont.className}>
      <body>
        {children}
        {/* <Provider>
          <ReactQuery>{children}</ReactQuery>
        </Provider> */}
      </body>
    </html>
  );
}
