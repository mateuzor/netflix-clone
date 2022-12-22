import React from "react";
import styles from "./Carrousel.module.css";

function Carrousel({ title }: any) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imagesContainer}>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}

export default Carrousel;
