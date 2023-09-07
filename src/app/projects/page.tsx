import Image from "next/image";
import styles from "./page.module.scss";
import { Header, Sidebar } from "@components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.container}>
        <Header />

        <div className={styles.content}></div>
      </div>
    </main>
  );
}
