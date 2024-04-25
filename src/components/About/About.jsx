import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage2.png")}
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>General Assembly</h3>
              <p>
                I am a frontend developer with a passion for creating visually
                appealing and user-friendly interfaces. I have experience with
                React, JavaScript, and CSS.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>SLI Inc</h3>
              <p>
                I am a backend developer with experience in building RESTful
                APIs and working with databases. I have experience with Node.js,
                Express, and MongoDB.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Saint Francis Institute of Computer Studies</h3>
              <p>
                I am a frontend developer with a passion for creating visually
                appealing and user-friendly interfaces. I have experience with
                React, JavaScript, and CSS.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
