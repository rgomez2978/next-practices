import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';


type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  // Carga multi layout
  const getLayout = Component.getLayout || ((page) => page );
  return getLayout( <Component {...pageProps} /> )

  // return getLayout( <Component {...pageProps} /> )
}

export default MyApp
