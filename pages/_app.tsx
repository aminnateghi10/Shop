import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../styles/globals.css'
import { store } from './../app/store/index';
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout?? (page => page)
  return <Provider store={store}>
    {
      getLayout(<Component {...pageProps} />)
    }
  </Provider>
}

export default MyApp;
