import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
        <Layout>
        <Head>
        <title>Landscaping in Westminster, Maryland</title>
        
      </Head>
      <nav>
        <Link href="/">/home</Link>
      </nav>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
