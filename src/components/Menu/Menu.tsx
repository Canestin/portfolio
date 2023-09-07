import { Header } from "@components";
import styles from "./Menu.module.scss";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
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
    </div>
  );
}
