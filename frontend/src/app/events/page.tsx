import EventCard from "@/components/EventCard/EventCard";
import styles from "./events.module.scss";

export default function EventsPage() {
    return (
        <section className={styles["events-page"]}>
            <div className={styles["events-page__container"]}>
                <h1 className={styles["events-page__title"]}>
                    Upcoming Events
                </h1>
                <div className={styles["events-page__cards"]}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </section>
    );
}
