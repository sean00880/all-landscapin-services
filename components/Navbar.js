import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      
      <div><Image width={90} height={90} src="https://i.ibb.co/hBZQcbX/Asset-2-1.png" className={style.logo} priority={true}></Image><span>All </span><Link href="/" className='home'>Landscaping Services</Link>, LLC</div>
      <Image src='https://i.ibb.co/b5phqVt/stars.png' width='150' height='30'></Image>
      <ul className={style.list}>
        
        <li className={style.listItem}>
          <Link href="/#about">About</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/allservices/#services">Services</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/#testimonials">Testimonials</Link>
        </li>
        <hr></hr>
        <li className={style.listItem}>
          <Link href="/#faq">FAQ</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/#map">Map</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={style.listItem2}>
          <Link href="tel:4435479685">(443) 547-9685</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-100vw" }}>
        <li className={style.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/#about">ABOUT</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/allservices#services">SERVICES</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/#testimonials">TESTIMONIALS</Link>
        </li>
        <hr />
        <li className={style.menuItem}>
          <Link href="/#faq">FAQ</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/#contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
