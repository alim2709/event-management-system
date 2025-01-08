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
        title: "TOMORROWLAND",
        date: "OCTOBER 2025",
        location: "Itu, Brazil",
        description: "Tomorrowland is a large-scale annual electronic dance music festival.",
        image: "/images/tomorrowland-event.jpg",
    },
    {
        id: "3",
        title: "ROCK IM PARK",
        date: "JUNE 2025",
        location: "Nürnberg, Germany",
        description: "A vibrant summer music festival in Nürnberg.",
        image: "/images/rock-im-park.jpg",
    },
    {
        id: "4",
        title: "HELLFEST",
        date: "JUNE 2025",
        location: "Clisson, France",
        description: "A rock festival focusing on heavy metal music.",
        image: "/images/hellfest.jpg",
    },
    {
        id: "5",
        title: "HANDS-ON LARGE LANGUAGE...",
        date: "JANUARY 2025",
        location: "Ghent, Belgium",
        description: "An online session for all interested.",
        image: "/images/hands-on.avif",
    },
    {
        id: "6",
        title: "PAPA ROACH",
        date: "FEBRUARY 2025",
        location: "Brussels, Belgium",
        description: "A concert of a world-famous American rock band.",
        image: "/images/papa-roach.webp",
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
                        <EventCard 
                            key={event.id} 
                            eventId={event.id} 
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            description={event.description}
                            image={event.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}