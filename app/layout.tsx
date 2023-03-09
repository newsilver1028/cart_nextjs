'use client';

import '@/styles/globals.scss';
import { Divider } from 'antd';
import { globalFont } from '@/styles/fonts';
import { RecoilRoot } from 'recoil';
import Nav from './components/Nav';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={globalFont.className}>
      <body className={styles.body}>
        <RecoilRoot>
          <Nav />
          <Divider style={{ margin: 0 }} />
          <main className={styles.main}>{children}</main>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default Layout;
