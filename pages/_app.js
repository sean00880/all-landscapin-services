import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
const canonicalUrl = (`https://alllandscapingservicesllcmaryland.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <>
       <Head>
    <title>All Landscaping Services, LLC | Landscaping in Westminster, MD</title>
        <meta name="google-site-verification" content="dc24KWyRESpQWDA8kk0H2jHprXUGDALBCxfVM7834KU" />
        <meta
          name="description"
          content="Commercial and Residential Landscaping. Proudly serving Westminster, Maryland and surrounding regions. "
        />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="video streaming, the rock" />
        <meta property="og:title" content="Landscaping in Westminster, Maryland" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:description" content="Commercial and Residential Landscaping. Proudly serving Westminster, Maryland and surrounding regions." />
        <meta property="og:url" content="https://www.alllandscapingservicesllcmaryland.com/" />
        <meta charSet="utf-8"></meta>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
    
    <Layout>

      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
