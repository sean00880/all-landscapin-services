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
