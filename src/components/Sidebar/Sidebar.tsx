import Image from "next/image";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          src="/profile.jpeg"
          alt="Profile"
          className={styles.photoCart}
          layout="fill"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.rubrics}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Skills</li>
            <li>Entrepreneurship</li>
          </ul>
        </div>
        <div className={styles.ad}>
          <Image src="/ad.png" alt="Profile" layout="fill" objectFit="cover" />
        </div>
        <p style={{ fontSize: 12 }}>
          The best app for small businesses in Africa. Manage your sales easily.
          Get a professional website in 5 minutes.
        </p>
      </div>
    </div>
  );
}
