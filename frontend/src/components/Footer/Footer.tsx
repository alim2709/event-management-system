import styles from "./Footer.module.scss";
import Image from "next/image";
import kolokolDark from "../../../public/images/Kolokol_black.png";
import vada from "../../../public/images/makers-logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Image 
                    className={styles["footer__logo"]}
                    src={kolokolDark}
                    alt="logo of the company"
                />
            </div>
            <div className={styles["footer__question"]}>
                <p className={styles["footer__question-text"]}>Suggestions? Questions?</p>
                <a className={styles["footer__question-btn"]} href="#">Email Us</a>
            </div>
            <div className={styles["footer__contact"]}>
                <div>
                    <a href="/profile" className={styles["footer__contact-link"]}>Profile</a>
                </div>
                <div>
                    <a href="/events" className={styles["footer__contact-link"]}>Events</a>
                </div>
                <div className={styles["footer__contact-option"]}>
                    <a href="tel:+32479123456" className={styles["footer__contact-link"]}>+32 479 12 34 56</a>
                    <p>kolokol.events.be</p>
                </div>
            </div>
            <div className={styles["footer__bottom"]}>
                <p className={styles["footer__bottom-copyright"]}>2024, All Rights Reserved</p>
                <Image 
                    className={styles["footer__bottom-logo"]}
                    src={vada}
                    alt="logo of the developers"
                />
            </div>
        </footer>
    );
}
