import styles from "./create.module.scss";

export default function CreateEventPage() {
    return (
        <section className={styles["create-event"]}>
            <div className={styles["create-event__container"]}>
                <h1 className={styles["create-event__title"]}>Add Event</h1>
                <form className={styles["create-event__form"]}>
                    <div className={styles["create-event__field"]}>
                        <label
                            className={styles["create-event__label"]}
                            htmlFor="event-name"
                        >
                            Name Of The Event
                        </label>
                        <input
                            className={styles["create-event__input"]}
                            id="event-name"
                            type="text"
                            placeholder="The best event in the world"
                        />
                    </div>

                    <div className={styles["create-event__field"]}>
                        <label
                            className={styles["create-event__label"]}
                            htmlFor="event-date"
                        >
                            Date of the Event
                        </label>
                        <input
                            className={styles["create-event__input"]}
                            id="event-date"
                            type="text"
                            placeholder="DD/MM/YYYY"
                        />
                    </div>

                    <div className={styles["create-event__field"]}>
                        <label
                            className={styles["create-event__label"]}
                            htmlFor="event-info"
                        >
                            Information
                        </label>
                        <textarea
                            className={styles["create-event__textarea"]}
                            id="event-info"
                            placeholder="Write some details about the event..."
                        ></textarea>
                    </div>

                    <div className={styles["create-event__button-wrapper"]}>
                        <button
                            className={styles["create-event__button"]}
                            type="submit"
                        >
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
