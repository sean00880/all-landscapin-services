import style from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Flip from 'react-reveal/Flip';
import AboutCard from './AboutCard'
import ReactCardFlip from "react-card-flip";

const CardStyle = {
  height: "47vh",
  width: "33vh",
  marginBottom:"10px",
  
};



const About = () => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [isFlipped2, setIsFlipped2] = React.useState(false);
    const [isFlipped3, setIsFlipped3] = React.useState(false);
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h2 className={style.title}>All About Us</h2>
        <Flip top>
        <h1 className={style.subtitle}>All-In-One Landscaping Company</h1>
        </Flip>
        
        <hr />
        <div className={style.wrapper}>
          <div className={style.imageWrapper}>
        <Image src='https://i.ibb.co/BqgFQ0T/als.png' height='400' width='600' className={style.image}/><Image src='https://i.ibb.co/Hrg9gpt/mowing2.jpg' height='400' width='600' className={style.image}/></div>
        <h4 className={style.text}>All Landscaping Services, LLC was founded by David Elmer Cruz in 2017. Over the last 5 years, we have provided professional landscaping services to hundreds of commercial and resicential clients in the state of Maryland. </h4>

        <hr></hr>

        <h4 className={style.text}>We strive to build valuable relationships with our clients and deliver a wide variety of exceptional services on a routinely basis. Our key values are: Honesty, Trust, Teamwork & Kindness. </h4>

      
        </div>

        <Flip top>
        <h1 className={style.subtitle}>We Cover All Landscaping Needs</h1>
        </Flip>
        <div className={style.wrapper}>
          
        <h4 className={style.text}>We cater to landscaping needs for both commercial and residential properties. Our vast list of services goes beyond lawncare. We offer planting, seeding, fertilizing, hardscaping, mowing, mulching, trimming, leaf removal, snow removal, and much more. We also offer driveway and flowerbed installation. With a broad range of expertise, we are equipped to complete any assignment with the utmost quality and craftsmanship.</h4>

        <hr></hr>

        <h4 className={style.text}> Licensed, insured, and with qualified staff who are familiar with both our clients and our job. Contact us right away for a free quote. </h4>

        <div className={style.card_wrapper}>
        <ReactCardFlip style={style.card} isFlipped={isFlipped} flipDiection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className={style.cardFront}
        
      >
        <Image src='https://i.ibb.co/pd7DXKL/lawnals.png' width={300} height={300}></Image>
        <hr className={style.hr}/>
        Lawn Care & Tree Services | Maryland     
        </div>
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)} className={style.cardBack}>
          We use cutting-edge equipment when executing our lawn and tree maintanance operations. To ensure the safest and best cut possible, our mowers undergo routine maintenance. <hr /> Our primary landscaping services include: Mowing, mulching, trimming/pruning, seeding and fertilizing.
        </div>
        </ReactCardFlip>
        <ReactCardFlip style={style.card} isFlipped={isFlipped2} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped2((prev) => !prev)}
        className={style.cardFront}
      ><Image src='https://i.ibb.co/HFcvyv2/installation.png' width={300} height={300}></Image>
      <hr className={style.hr}/>
        Hardscaping & Installations | Maryland
      
      
        </div>
        
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped2((prev) => !prev)} className={style.cardBack}>
          In order to make sure your property looks and feels its best, we can work on your patios, retaining walls, steps, walkways, flowerbeds and other hardscaping needs. <hr/>We create, construct, and install all kinds of unique hardscapes in Westminster, Maryland.
        </div>
        </ReactCardFlip>
        <ReactCardFlip style={style.card} isFlipped={isFlipped3} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped3((prev) => !prev)}
        className={style.cardFront}
      >     <Image src='https://i.ibb.co/7pPw8BK/snow.png' width={300} height={300}></Image>   <hr className={style.hr}/>Seasonal Junk & Snow Removal | Maryland

        </div>
        <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped3((prev) => !prev)} className={style.cardBack}>
          We provide year-round landscaping services to our clientele. In addition to maintaining the appearance of your landscape in the spring and summer, we are also available to assist with leaf cleanup in the fall and snow removal in the winter. 
        </div>
        </ReactCardFlip>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
