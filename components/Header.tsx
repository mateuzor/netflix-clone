import React from "react";
import styles from "./Header.module.css";
import logo from "../public/images/logo.png";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigationContainer}>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width={110}
          height={110}
        />
        <div className={styles.navigationContainer}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>Tv Shows</li>
            <li className={styles.menuItem}>Movies</li>
          </ul>
        </div>
      </div>
      <div className={styles.search}>
        <AiOutlineSearch className={styles.icon} size={"28px"} />
        <p className={styles.kids}>Kids</p>
        <AiOutlineBell className={styles.icon} size={"28px"} />
      </div>
    </div>
  );
}

export default Header;
