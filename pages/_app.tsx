import {AppProps} from 'next/app';
import Layout from '../components/Layout';

import '../scss/index.css';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
