import Head from "next/head";
import Services from "../components/Services";
import { data } from "../data";
import About from "../components/AboutServices";

export default function Home({ services }) {
  return (
    <div>
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
      </Head>
      <About />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
