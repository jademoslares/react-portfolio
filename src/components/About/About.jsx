import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage2.png")}
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/general.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>General Assembly || 2024</h3>
              <p>
                Full-stack software engineering 420 hour program focused on
                product development fundamentals, object-oriented programming,
                MVC frameworks, data modeling, and team collaboration
                strategies.
              </p>
            </div>
          </li>

          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/default.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>SLI Inc || 2018</h3>
              <p>
                One-month intensive training program focusing on C# and its
                technologies. This included mastering fundamental and advanced
                concepts, hands-on experience with ASP.NET Core and Entity
                Framework, and proficiency with development tools like Visual
                Studio.
              </p>
            </div>
          </li> */}

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sfics.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Saint Francis Institute of Computer Studies || 2016</h3>
              <p>
                I hold a Bachelor's degree in Information Technology (IT) earned
                over four years. My studies encompassed a wide range of IT
                disciplines, including software development, database
                management, network administration, and system
                analysis. Coursework included programming languages, database design, and IT project management. This
                degree provides me with a solid foundation for success in
                diverse IT roles.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
