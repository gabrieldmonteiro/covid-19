import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      Created by: Gabriel (Monster) - <a href="https://www.linkedin.com/in/gabrieldmonteiro/" target='blank'>LinkedIn</a> | <a href="https://github.com/gabrieldmonteiro/" target='blank'>GitHub</a>      
    </div>
  );
}

export default Footer;
