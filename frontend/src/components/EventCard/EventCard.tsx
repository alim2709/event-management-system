import styles from "./EventCard.module.scss";
import Image from "next/image";

export default function EventCard({ eventId, title, date, location, image }: { eventId: string, title: string, date: string, location: string, description: string, image: string }) {
    return (
        <div className={styles["event-card"]}>
            <div className={styles["event-card__image-wrapper"]}>
                <Image
                    className={styles["event-card__image"]}
                    src={image}
                    alt={`${title} logo`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles["event-card__content"]}>
                <div className={styles["event-card__header"]}>
                    <p className={styles["event-card__title"]}>{title}</p>
                    <p className={styles["event-card__date"]}>{date}</p>
                </div>
                <div className={styles["event-card__footer"]}>
                    <p className={styles["event-card__location"]}>{location}</p>
                    <a
                        className={styles["event-card__link"]}
                        href={`/events/${eventId}`}
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
}

