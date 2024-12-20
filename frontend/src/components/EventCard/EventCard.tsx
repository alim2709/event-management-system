import styles from "./EventCard.module.scss";
import Image from "next/image";
import image from "../../../public/images/attendees-at-concert-event.jpg";

export default function EventCard() {
    return (
        <div className={styles["event-card"]}>
            <div className={styles["event-card__image-wrapper"]}>
                <Image
                    className={styles["event-card__image"]}
                    src={image}
                    alt="event-logo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles["event-card__content"]}>
                <div className={styles["event-card__header"]}>
                    <p className={styles["event-card__title"]}>ROCK AM RING</p>
                    <p className={styles["event-card__date"]}>JUNE 2025</p>
                </div>
                <div className={styles["event-card__footer"]}>
                    <p className={styles["event-card__location"]}>
                        Nürburgring, Germany
                    </p>
                    <a className={styles["event-card__link"]} href="#">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
}
