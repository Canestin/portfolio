import React from "react";
import styles from "./page.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.job}>
        <h3>Co-Founder & Head of Engineering - Tagira</h3>
        <p>July 2023 - Today</p>
        <p>Paris, France</p>

        <p>
          I co-founded Tagira, a B2B mobile store management application for the
          French-speaking African market. My goal is to is to transform the way
          small businesses in French-speaking Africa manage their online
          business. My skills extend to to business strategy and software
          development, and I have a strong experience in the complete software
          development lifecycle, from from requirements gathering to continuous
          maintenance and continuous improvement. I&apos;m also passionate about
          performance, security and scalability, skills that are essential to
          meet today&apos;s software development challenges.
        </p>

        <p style={{ marginTop: 20 }}>Tagira is several projects :</p>
        <ul>
          <li>
            The mobile application with which sellers manage their sales
            (developed by myself).
          </li>
          <li>
            The bio to centralize links to each company, based on a sub-domain
            *.tagira.bio (developed by myself).
          </li>
          <li>
            The e-commerce template (store for each company) - (developed by my
            collaborator)
          </li>
          <li>
            An API Rest with the necessary security measures to guarantee the
            confidentiality of company data and prevent injections (developed
            with my collaborator)
          </li>
        </ul>

        <p>Skills: Corporate strategy - Software development</p>
      </div>

      <div className={styles.job}>
        <h3>Mobile Engineer (Part time)- FabLife</h3>
        <p>Feb. 2023 - May 2023 (4 months)</p>
        <p>Paris, France (Hybrid)</p>

        <ul>
          <li>
            Maintenance of two mobile applications with React Native
            (Nutritional program tracking)
          </li>
        </ul>

        <p>Skills: Redux - React Native</p>
      </div>
      <div className={styles.job}>
        <h3>Software Engineer Intern - Fablife</h3>
        <p>Sept. 2022 - Jan. 2023 (5 months)</p>
        <p>Paris, France</p>

        <ul>
          <li>
            Frontend development of the Back Office using Angular and Sass, with
            data displayed coming from a REST API
          </li>
          <li>
            Improvement of Bemum&apos;s Landing Page and integration of tools
            such as Google Tag Manager & Facebook Pixel to understand users and
            enhance the browsing experience
          </li>
          <li>
            Addition of features to the Nest API (including the integration of
            external tools)
          </li>
          <li>Implementation of emails with MJML</li>
        </ul>

        <p>
          Skills : Google Tag Manager · MJML · MailChimp · Logiciel Stripe ·
          Shopify · Webhook · Crisp · Jest · Méthodes agiles · Angular · Redis ·
          PostgreSQL · Docker · GitHub Action · AWS · TypeScript · NestJS ·
          Node.js · JavaScript · React.js
        </p>
      </div>

      <div className={styles.job}>
        <h3>Technical Consultant (Part time) - Junior ISEP</h3>
        <p>July 2022 - July 2023 (1 year)</p>

        <ul>
          <li>Carrying out paid missions</li>
        </ul>

        <p>Skills: Agile methods · Software development</p>
      </div>
      <div className={styles.job}>
        <h3>Technical Manager (Part time) - Junior ISEP</h3>
        <p>March 2022 - June 2022 (4 months)</p>

        <ul>
          <li>Internal training</li>
          <li>Internal Maintenance of internal software</li>
        </ul>

        <p>Skills : Project management · Software development</p>
      </div>
    </div>
  );
};

export default Experience;
