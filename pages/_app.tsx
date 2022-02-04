import {AppProps} from 'next/app';

import '../scss/index.scss';


export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
