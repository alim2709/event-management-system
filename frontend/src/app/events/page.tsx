import EventCard from "@/components/EventCard/EventCard";
import styles from "./events.module.scss";

const events = [
    {
        id: "1",
        title: "ROCK AM RING",
        date: "JUNE 2025",
        location: "Nürburgring, Germany",
        description: "One of the biggest rock festivals in the world.",
        image: "/images/rock-am-ring.jpg",
    },
    {
        id: "2",
        title: "SUMMER FESTIVAL",
        date: "JULY 2025",
        location: "Berlin, Germany",
        description: "A vibrant summer music festival in Berlin.",
        image: "/images/summer-festival.jpg",
    },
    {
        id: "3",
        title: "SUMMER FESTIVAL",
        date: "JULY 2025",
        location: "Berlin, Germany",
        description: "A vibrant summer music festival in Berlin.",
        image: "/images/summer-festival.jpg",
    },
    {
        id: "4",
        title: "SUMMER FESTIVAL",
        date: "JULY 2025",
        location: "Berlin, Germany",
        description: "A vibrant summer music festival in Berlin.",
        image: "/images/summer-festival.jpg",
    },
];

export default function EventsPage() {
    return (
        <section className={styles["events-page"]}>
            <div className={styles["events-page__container"]}>
                <h1 className={styles["events-page__title"]}>
                    Upcoming Events
                </h1>
                <div className={styles["events-page__cards"]}>
                    {events.map((event) => (
                        <EventCard key={event.id} eventId={event.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
