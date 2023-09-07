import styles from "./Header.module.scss";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.photo}>
          <Image
            src="/profile.jpeg"
            alt="Profile"
            className={styles.photoCart}
            layout="fill"
          />
        </div>
        <BiMenu size={40} />
      </div>
      <div className={styles.desktop}>
        <div className={styles.appointment}>
          <a
            href="https://calendly.com/canestin-ndong"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make an appointment
          </a>
        </div>
        <div className={styles.social}>
          <a
            href=" 
          https://www.linkedin.com/in/canestin-ndong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href=" 
          https://www.github.com/canestin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a
            href=" 
          https://www.instagram.com/canestin.ndong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/insta.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
}
