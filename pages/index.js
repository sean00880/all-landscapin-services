import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact"

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>All Landscaping Services, LLC | Landscaping in Westminster, MD</title>
        <meta
          name="description"
          content="Commercial and Residential Landscaping. Proudly serving Westminster, Maryland and surrounding regions. "
        />
      </Head>
      <Intro />
      <About />
      <Services services={services} />
      <Testimonials />
      <Faq />
      <Contact />

    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
