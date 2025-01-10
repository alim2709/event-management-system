"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import kolokol from "../../../public/images/kolokol-orange.png";

export default function Header({ isHidden }: { isHidden: boolean }) {
  const [isVisible, setIsVisible] = useState(!isHidden);

  useEffect(() => {
    if (!isHidden) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = window.innerHeight / 2;
      setIsVisible(scrollPosition > halfPageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
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
