import styles from "./login.module.scss";

export default function LoginPage() {
    return (
        <section className={styles["login-page"]}>
            <div className={styles["login-page__container"]}>
                <form className={styles["login-page__form"]}>
                    <label className={styles["login-page__label"]}>
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className={`${styles["login-page__input"]} ${styles["login-page__input--username"]}`}
                    />
                    <label className={styles["login-page__label"]}>
                        Password:
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className={`${styles["login-page__input"]} ${styles["login-page__input--password"]}`}
                    />
                    <button
                        type="submit"
                        className={`${styles["login-page__button"]} ${styles["login-page__button--submit"]}`}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </section>
    );
}
