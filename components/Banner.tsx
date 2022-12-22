import React from "react";
import styles from "./Banner.module.css";
import { AiOutlineCaretRight, AiOutlineInfoCircle } from "react-icons/ai";
import Header from "../components/Header";

function Banner() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.movieCard}>
        <h1 className={styles.movieName}>Black Adam</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.playButton}>
            <AiOutlineCaretRight size={"20px"} />
            <p>Play</p>
          </button>
          <button className={styles.infoButton}>
            <AiOutlineInfoCircle size={"15px"} />
            <p>More info</p>
          </button>
        </div>
        <p className={styles.movieDescription}>
          Nearly 5,000 years after he was bestowed with the almighty powers of
          the Egyptian gods—and imprisoned just as quickly—Black Adam...
        </p>
      </div>
    </div>
  );
}

export default Banner;
