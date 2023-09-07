import React from "react";
import styles from "./page.module.scss";

const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <h1>Skills</h1>
      <section>
        <h2>Front-end</h2>
        <p>
          As a front-end developer, I'm passionate about creating great user
          experiences using technologies like HTML, CSS, and SASS. My expertise
          in JavaScript allows me to design interactive interfaces, particularly
          with React and Next.js. I've worked lightly with Angular (didn't go
          in-depth)
        </p>
      </section>
      <section>
        <h2>Back-end</h2>
        <p>
          On the back-end side, I am proficient in Node.js and Nest.js, which
          allows me to develop robust and scalable servers. I am also familiar
          with databases such as PostgreSQL, MySQL and MongoDB, ensuring
          efficient data management.
        </p>
      </section>
      <section>
        <h2>Backend-as-a-Service (BaaS)</h2>
        <p>
          I use Supabase to simplify backend development by providing database
          functionality as a service. This speeds up the development process and
          guarantees optimal data security, but limited because there is no
          control over the code.
        </p>
      </section>
      <section>
        <h2>Mobile</h2>
        <p>
          For mobile development, I use React Native to create cross-platform
          mobile applications. This allows code to be shared between iOS and
          Android platforms, reducing development costs and speeding up
          deployment.
        </p>
      </section>
      <section>
        <h2>Customer relationship</h2>
        <p>
          Regarding customer relations, I integrate tools such as Crisp,
          MailChimp and Google Tag Manager to improve communication with users,
          manage marketing campaigns and monitor site performance.
        </p>
      </section>
      <section>
        <h2>Automatisation</h2>
        <p>
          Automation is essential to optimize workflows. I use tools like Zapier
          and Make.
        </p>
      </section>
      <section>
        <h2>DevOps</h2>
        <p>
          To ensure application availability and scalability, I rely on
          technologies such as AWS, GitHub Actions, Docker and Vercel for
          infrastructure management and deployment.
        </p>
      </section>
      <section>
        <h2>Big Data</h2>
        <p>I have slight experience with Apache Spark and Elastic/Kibana.</p>
      </section>
    </div>
  );
};

export default PortfolioPage;
