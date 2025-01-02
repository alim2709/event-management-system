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
        <div className={styles["event-details"]}>
            <h1>{event.title}</h1>
            <p>Date:{event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
        </div>
    );
}
