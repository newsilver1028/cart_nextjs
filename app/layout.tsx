'use client';

import '@/styles/globals.scss';
import { globalFont } from '@/styles/fonts';
import { RecoilRoot } from 'recoil';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={globalFont.className}>
      <body>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
};

export default Layout;
