import styles from "./signup.module.scss";

export default function SignUpPage() {
    return (
        <section className={styles["signup-page"]}>
            <div className={styles["signup-page__container"]}>
                <form className={styles["signup-page__form"]}>
                    <label className={styles["signup-page__label"]}>
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--username"]}`}
                    />

                    <label className={styles["signup-page__label"]}>
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--email"]}`}
                    />

                    <label className={styles["signup-page__label"]}>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--password"]}`}
                    />

                    <label className={styles["signup-page__label"]}>
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--confirm-password"]}`}
                    />

                    <button
                        type="submit"
                        className={`${styles["signup-page__button"]} ${styles["signup-page__button--submit"]}`}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
