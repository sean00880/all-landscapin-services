import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import Flip from "react-reveal/Flip"

const Services = ({ services }) => {
  return (
    <div className={style.container} id='services'>
      <div className={style.info}>
        <h2 className={style.title}>Services</h2>
        <Flip top>
        <h1 className={style.subtitle}>All Landscaping Services <hr></hr>Marlyand </h1>
        </Flip>

        <hr className={style.hr}/>

        <h4 className={style.text}>We strive to build valuable relationships with our clients and deliver exceptional landscaping services on a routinely basis.</h4>
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service3.id} href={`/products/${service.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service3.desc}</div>
                <span className={style.cat}>{service3.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service3.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service3.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={style.services}>
          {services.map((service2) => (
            <Link key={service2.id} href={`/products/${service2.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service2.desc}</div>
                <span className={style.cat}>{service2.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service2.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service2.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
