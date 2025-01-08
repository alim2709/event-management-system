// import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import kolokol from "../../../public/images/kolokol-orange.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div >
        <a href="#">
          <Image 
            className={styles["header__logo"]}
            src={kolokol}
            alt="logo of the company"
          />
        </a>
      </div>
      <div className={styles["header__links"]}>
        <a href="#" className={styles["header__link-signup"]}>Sign Up</a>
        <a href="#" className={styles["header__link-login"]}>Log In</a>
      </div>
      {/* <nav>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/profile">Profile</Link>
      </nav> */}
    </header>
  );
}
