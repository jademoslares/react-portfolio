import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadFile = () => {
    // Define the Google Docs link
    const googleDocsLink = "https://docs.google.com/document/d/1ThsZsKsJbURFlNKl3UJmHBLlISnQV85O-vWj_6OQuOw/edit?usp=sharing";

    // Open the Google Docs link in a new tab
    window.open(googleDocsLink, "_blank");
};



  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
          <li>
            <a href="#"onClick={downloadFile}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
