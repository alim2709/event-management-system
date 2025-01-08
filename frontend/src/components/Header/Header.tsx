"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import kolokol from "../../../public/images/kolokol-orange.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionHeight = 768;

    if (scrollTop >= sectionHeight / 2 && scrollTop < sectionHeight) {
      setShowHeader(true);
    } else if (scrollTop < sectionHeight / 2) {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${showHeader ? styles.visible : ''}`}>
      <div>
        <a href="/">
          <Image 
            className={styles["header__logo"]}
            src={kolokol}
            alt="logo of the company"
          />
        </a>
      </div>
      <div className={styles["header__links"]}>
        <a href="/signup" className={styles["header__link-signup"]}>Sign Up</a>
        <a href="/login" className={styles["header__link-login"]}>Log In</a>
      </div>
    </header>
  );
}
