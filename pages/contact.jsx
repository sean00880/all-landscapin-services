import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";
import Image from 'next/image'

const Contact = () => {
  return (
    
    <div className={style.container}>
      <Head>
        <title>All Landscaping Services, LLC | Landscaping in Westminster, MD</title>
        <meta name="google-site-verification" content="dc24KWyRESpQWDA8kk0H2jHprXUGDALBCxfVM7834KU" />
        <meta
          name="description"
          content="Commercial and Residential Landscaping. Proudly serving Westminster, Maryland and surrounding regions. "
        />
      </Head>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
        <Image width={90} height={90} src="https://i.ibb.co/hBZQcbX/Asset-2-1.png" className={style.logo} priority={true}></Image>
      <h1 className={style.title}>Get Your FREE Estimate:</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
