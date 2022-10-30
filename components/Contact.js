import Circle from "./Circle";
import style from "../styles/Contact.module.css";
import Flip from 'react-reveal/Flip';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';
import Popup from "../components/Popup";

const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_it2ab1j', 'template_2hhzlyr', form.current, 'jUn1z-vodKfQLijZ7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <h2 className={style.title}>Contact</h2>
        <Flip top>
        <h1 className={style.subtitle}>Get Your Free Estimate<hr></hr>All Landscaping Services, LLC</h1>
        </Flip>
      <form className={style.form} ref={form} onSubmit={sendEmail} >
      <div>
          <h2>3 steps</h2>
          <hr />
          1 - Review our list of services provided. <br />
          2 - Reach out to us for a free estimate. <br />
          3 - Schedule a visit for your exciting landscaping project.
        </div>
        <hr className={style.contactHr} />
        <div  >
        <input className={style.inputS} type="text" placeholder="Name" name="name"/>
        <input className={style.inputS} type="text" placeholder="Phone" name="contact"/>
        <input className={style.inputL} type="email" placeholder="Email" name="email"/>
        <input className={style.inputL} type="text" placeholder="Subject" name="subject"/>
        <hr />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
          name="message"
        />
        <button className={style.button} onClick={()=>setButtonPopup(true)}>SUBMIT</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Your message has been sent. We will reach out to you shortly.</h3>
        </Popup>
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
