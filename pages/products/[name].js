import { data } from "../../data";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Product = ({ product }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>All Landscaping Services, LLC. | Professional Lawn & Landscaping Services in Westminster, Maryland</title>
        <meta name="google-site-verification" content="dc24KWyRESpQWDA8kk0H2jHprXUGDALBCxfVM7834KU" />
        <meta
          name="description"
          content="Westminster, Marlyand's lawn care, hardscaping and seasonal landscaping services. "
        />
      </Head>
      <div className={style.cardS}>
        <h1 className={style.title}>{product.title} | Westminster, Maryland</h1>
        <hr />
        <p className={style.desc}>{product.longDesc}</p>
        <button className={style.button}>
          <Link href="/contact"> Request Your Free Quote </Link>
        </button>
      </div>
      <div className={style.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={style.imgContainer}>
            <Image src={img.url} layout="fill" objectFit="cover" alt="" />
          </div>
        ))}
      </div>

    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
