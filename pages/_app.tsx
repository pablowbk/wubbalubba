//styles
import '../styles/globals.scss'

//types
import type { AppProps } from 'next/app'

//components
import NextNProgress from 'nextjs-progressbar';
import Layout from '../layouts';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Wubba Lubba</title>
        <link rel="shortcut icon" type="image/jpg" href="/assets/portal.png" />
      </Head>
      <NextNProgress color='#02accb' startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
      <Component {...pageProps} />
    </Layout>
  );
}
