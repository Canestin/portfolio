"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {
  const [show, setShow] = useState(false);
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
        <div onClick={() => setShow((s) => !s)}>
          {show ? <MdOutlineClose size={40} /> : <BiMenu size={40} />}
        </div>
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
      <div className={`${styles.menu} ${show && styles.showMenu}`}>
        <div className={styles.rubrics}>
          <ul>
            <Link onClick={() => setShow(false)} href="/">
              <li>Home</li>
            </Link>
            <Link onClick={() => setShow(false)} href="/experience">
              <li>Experience</li>
            </Link>
            <Link onClick={() => setShow(false)} href="/skills">
              <li>Skills</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
