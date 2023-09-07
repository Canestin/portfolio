import { Header } from "@components";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.rubrics}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Skills</li>
          <li>Entrepreneurship</li>
        </ul>
      </div>
    </div>
  );
}
