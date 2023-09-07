import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
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
  );
}
