import styles from "./profile.module.scss";
import EventCard from "@/components/EventCard/EventCard";

export const events = [
    {
        id: "1",
        title: "ROCK AM RING",
        date: "JUNE 2025",
        location: "Nürburgring, Germany",
        description: "One of the biggest rock festivals in the world.",
        image: "/images/rock-am-ring.jpg",
    },
    {
        id: "4",
        title: "HELLFEST",
        date: "JUNE 2025",
        location: "Clisson, France",
        description: "A rock festival focusing on heavy metal music.",
        image: "/images/hellfest.jpg",
    },
];

export default function ProfilePage() {
    return (
        <section className={styles["profile-page"]}>
            <div className={styles["profile-page__container"]}>
                <h1 className={styles["profile-page__title"]}>
                    My Events
                </h1>
                <div className={styles["profile-page__links"]}>
                    <a href="/events/create" className={styles["profile-page__link-add"]}>Add event</a>
                    <a href="/events" className={styles["profile-page__link-events"]}>Go to events</a>
                </div>
                <div className={styles["profile-page__cards"]}>
                    {events.map((event) => (
                        <div key={event.id} className={styles["profile-page__card-wrapper"]}>
                            <EventCard 
                                eventId={event.id} 
                                title={event.title}
                                date={event.date}
                                location={event.location}
                                description={event.description}
                                image={event.image}
                            />
                            <button className={styles["profile-page__button"]}>Remove event</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
