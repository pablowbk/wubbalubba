import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from '../layouts';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Wubba Lubba</title>
      </Head>
      <NextNProgress color='#02accb' startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
      <Component {...pageProps} />
    </Layout>
  );
}
