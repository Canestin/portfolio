import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <p className={styles.title}>Canestin Ndong</p>
      <p className={styles.description}>
        Software Engineer Student & Entrepreneur
      </p>
      <p className={styles.text}>
        Passport is authentication middleware for Node.js. Extremely flexible
        and modular, Passport can be unobtrusively dropped in to any
        Express-based web application. A comprehensive set of strategies support
        authentication using a username and password, Facebook, Twitter, and
        more.
      </p>
      <p>
        If you are the type to understand people from simple photos, do not
        hesitate to visit my Instagram.
      </p>
    </>
  );
}
