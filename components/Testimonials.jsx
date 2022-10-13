import style from "../styles/Testimonials.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";
import Flip from "react-reveal/Flip"

const Testimonials = () => {
  return (
    <div className={style.container} id='testimonials'>
      <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue" />
      <h2 className={style.title}>Testimonials</h2>
        <Flip top>
        <h1 className={style.subtitle}>What Others Have To Say About<hr></hr>All Landscaping Services, LLC</h1>
        </Flip>
      <div className={style.wrapper}>
        {users.map((user) => (
          <div className={style.card} key={user.id}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/img/${user.logo}`} width="30" height="30" alt="" />
            <p className={style.comment}>
              &ldquo;{user.comment}&rdquo;
            </p>
            <div className={style.person}>
              <Image
                className={style.avatar}
                src={user.avatar}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={style.info}>
                <span className={style.username}>{user.name}</span>
                <span className={style.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
