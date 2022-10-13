import Circle from "./Circle";
import style from "../styles/Contact.module.css";
import Flip from 'react-reveal/Flip';

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <h2 className={style.title}>Contact</h2>
        <Flip top>
        <h1 className={style.subtitle}>Get Your Free Estimate<hr></hr>All Landscaping Services, LLC</h1>
        </Flip>
      <form className={style.form}>
      <div>
          <h2>3 steps</h2>
          <hr />
          1 - Review our list of services provided. <br />
          2 - Reach out to us for a free estimate. <br />
          3 - Schedule a visit for your exciting landscaping project.
        </div>
        <hr />
        <div className={style.contactHr} >
        <input className={style.inputS} type="text" placeholder="Name" />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Subject" />
        <hr />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>SUBMIT</button>
        </div>

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
