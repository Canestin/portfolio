import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

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
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/experience">
              <li>Experience</li>
            </Link>
            <Link href="/skills">
              <li>Skills</li>
            </Link>
          </ul>
        </div>
        <Link href="https://tagira.africa" target="_blank">
          <div className={styles.ad}>
            <Image
              src="/ad.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <p style={{ fontSize: 12, cursor: "pointer" }}>
            The best app for small businesses in Africa. Manage your sales
            easily. Get a professional website in 5 minutes.
          </p>
        </Link>
      </div>
    </div>
  );
}
