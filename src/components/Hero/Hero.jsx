import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jade</h1>
        <p className={styles.description}>
          Im a software developer, I hold a degree in IT and have
          successfully completed a rigorous Software Immersive Course at General
          Assembly. I am passionate about leveraging my skills and knowledge to
          contribute to innovative projects and solutions. Feel free to reach
          out to me if you're interested in learning more about my background
          and expertise.
        </p>
        <a href="mailto:jade.moslares@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage2.jpg")} alt="Me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
