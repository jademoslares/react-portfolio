import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadFile = () => {
    // Constructing the URL to the file
    const fileUrl = `${window.location.origin}/assets/resume/JohnJadeMoslaresResume.docx`;

    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then((blob) => {
            // Create a URL for the blob
            const fileURL = window.URL.createObjectURL(blob);
            
            // Create an <a> element to trigger the download
            const link = document.createElement("a");
            link.href = fileURL;
            link.download = "JohnJadeMoslaresResume.docx";
            
            // Click the link to start the download
            link.click();
            
            // Cleanup: Revoke the object URL
            window.URL.revokeObjectURL(fileURL);
        })
        .catch((error) => {
            console.error('Error downloading file:', error);
        });
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
            <a onClick={downloadFile}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
