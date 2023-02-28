'use client';

import { AppProps } from 'next/app';
import { Provider } from 'jotai';
import ReactQuery from './components/ReactQuery';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <ReactQuery>
        <Component {...pageProps} />
      </ReactQuery>
    </Provider>
  );
};

export default MyApp;
