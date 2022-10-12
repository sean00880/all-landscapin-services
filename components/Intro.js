import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <div className={style.overlay}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
      <Image width={150} height={150} src="https://i.ibb.co/hBZQcbX/Asset-2-1.png" className={style.logo} layout='responsive'></Image>
        <h1 className={style.title}>
          <span className={style.brandName}>ALL</span> LANDSCAPING SERVICES, LLC
        </h1>
        <p className={style.desc}>
          <h3 className={style.text}>Commercial & Residential Landscaping Services | Westminster, MD</h3>
          <hr></hr>
          <h5 className={style.text}><marquee Scrollamount='12'>Serving Westminster, Marlyland and surrounding regions. </marquee></h5>
          
        </p>
        <button className={style.button}>View All Landscaping Services</button>
      </div>
      </div>
    </div>
  );
};

export default Intro;
