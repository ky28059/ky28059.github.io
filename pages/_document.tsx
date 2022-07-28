import Document, {Html, Head, Main, NextScript} from 'next/document';


class KDocument extends Document {
    render() {
        return (
            <Html className="dark">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body className="text-dark dark:text-white dark:bg-midnight">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default KDocument;
