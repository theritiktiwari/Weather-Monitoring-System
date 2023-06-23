import Head from 'next/head';
import Script from 'next/script';
import '@/styles/globals.css'
import Navbar from '@/Components/Navbar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const siteName = "WMS";
  const router = useRouter();

  return <>
    <Head>
      <title>{`Home | ${siteName}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></Script>
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Navbar siteName={siteName} router={router} />}
    <Component {...pageProps} siteName={siteName} router={router} />
  </>
}
