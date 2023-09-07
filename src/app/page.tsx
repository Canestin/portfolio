import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <p className={styles.title}>Canestin Ndong</p>
      <p className={styles.description}>
        Software Engineer Student & Entrepreneur
      </p>
      <p className={styles.text}>
        I&apos;m currently a student at ISEP Paris, a prestigious institution
        specializing in digital engineering. In the coming weeks, I&apos;ll be
        starting my Master&apos;s program at the University of Leicester in
        England (semester abroad).
        <br />
        <br />
        In addition to my academic activities, I&apos;m very involved in
        entrepreneurship. I firmly believe that technological innovation
        transcends mere trends; it is the fundamental force shaping our
        collective future. My willingness to take on stimulating challenges is
        guided by the conviction that we are paving the way for profound
        transformations.
        <br />
        <br />
        One of these transformations, of considerable importance, is the
        imperative of technological inclusion in Africa. This is not only an
        opportunity, but also a responsibility we all share. Together, we have
        the capacity to redefine the limits of what is achievable, and to build
        a future where every continent and every nation is an active participant
        in the digital age.
        <br />
        <br />
        With this in mind, I co-founded Tagira Africa, a company dedicated to
        realizing this inclusive digital future.
      </p>
      <p>
        If you are the type to understand people from simple photos, do not
        hesitate to visit my Instagram.
      </p>
    </>
  );
}
