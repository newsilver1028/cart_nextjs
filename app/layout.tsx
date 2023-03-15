'use client';

import '@/styles/globals.scss';
import { globalFont } from '@/styles/fonts';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Divider } from 'antd';
import { RecoilRoot } from 'recoil';
import Nav from './components/Nav';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/api',
    cache: new InMemoryCache(),
  });

  return (
    <html lang='en' className={globalFont.className}>
      <body className={styles.body}>
        <ApolloProvider client={client}>
          <RecoilRoot>
            <Nav />
            <Divider style={{ margin: 0 }} />
            <main className={styles.main}>{children}</main>
          </RecoilRoot>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default Layout;
