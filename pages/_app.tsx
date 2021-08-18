import {AppProps} from 'next/app';
import Layout from '../components/Layout';

import '../scss/index.scss';
import '../scss/_tailwind.scss';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
