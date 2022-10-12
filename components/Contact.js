import Circle from "./Circle";
import style from "../styles/Contact.module.css";
import Flip from 'react-reveal/Flip';

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
        <h2 className={style.title}>Contact</h2>
        <Flip top>
        <h1 className={style.subtitle}>Get Your Free Estimate<hr></hr>All Landscaping Services, LLC</h1>
        </Flip>
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
      <div >
        <Flip right>
          <h3 className={style.contactInfo}>
        Email: alllandscapingservicesllc@gmail.com <br/>
        Phone: (443) 547-9685
        </h3>
        </Flip>
      </div>
      </div>
    </div>
  );
};

export default Contact;
