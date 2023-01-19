import Layout from '@components/Layout';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
