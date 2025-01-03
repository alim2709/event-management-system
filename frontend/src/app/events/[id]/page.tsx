"use client";

import { useParams } from "next/navigation";
import styles from "./event.module.scss";

const events = {
    1: {
        title: "ROCK AM RING",
        date: "JUNE 2025",
        location: "Nürburgring, Germany",
        description: "One of the biggest rock festivals in the world.",
    },
    2: {
        title: "SUMMER FESTIVAL",
        date: "JULY 2025",
        location: "Berlin, Germany",
        description: "A vibrant summer music festival in Berlin.",
    },
};

export default function EventDetailPage() {
    const params = useParams();
    const { id } = params;

    const event = events[id as keyof typeof events];

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <section className={styles["event-details"]}>
            <div className={styles["event-details__container"]}>
                <h1 className={styles["event-details__title"]}>
                    {event.title}
                </h1>
                <p className={styles["event-details__date"]}>
                    <span>Date:</span> {event.date}
                </p>
                <p className={styles["event-details__location"]}>
                    <span> Location: </span> {event.location}
                </p>
                <p className={styles["event-details__description"]}>
                    {event.description}
                </p>
                <div className={styles["event-details__links"]}>
                    <a
                        className={`${styles["event-details__link"]} ${styles["event-details__link--website"]}`}
                        href="#"
                    >
                        {event.title} Website
                    </a>
                    <a
                        className={`${styles["event-details__link"]} ${styles["event-details__link--other-events"]}`}
                        href="/events"
                    >
                        Other events
                    </a>
                </div>
            </div>
        </section>
    );
}
