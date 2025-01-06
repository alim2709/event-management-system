"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
import kolokolLogo from "../../public/images/kolokol-orange.png";
import nico from "../../public/images/nico.png";
import meeting from "../../public/images/corp-event-checklist.jpg";
import crowd from "../../public/images/2-1.png";
import card from "../../public/images/Midwest-Alarm-Services_Blog-Images_0001_Types-of-access-control.webp";
import postman from "../../public/images/what-is-a-mailing-address.jpg";
import festival from "../../public/images/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg";
import exhibition from "../../public/images/exhibition.jpg";
import presentation from "../../public/images/getty_533991320_352162.jpg";
import conference from "../../public/images/eventscom_cover.jpg";
import training from "../../public/images/team-training.webp";
import football from "../../public/images/istockphoto-469569148-612x612.jpg";
import sign from "../../public/images/sign.png";
import bigCrowd from "../../public/images/5-1.png";
import tomorrowland from "../../public/images/Tomorrowland2016mainstage.jpg";

export default function Home() {
    const router = useRouter();

    const handleLoginRedirect = () => {
        router.push("/login");
    };

    const handleSignUpRedirect = () => {
        router.push("/signup");
    };

    return (
        <>
            <main className={styles.main}>
                <section className={styles["main__title-section"]}>
                    {/* Левый блок */}
                    <div className={styles["main__title-left"]}>
                        {/* Заголовок и логотип */}
                        <div className={styles["main__title-logo"]}>
                            <Image
                                className={styles["main__logo"]}
                                src={kolokolLogo}
                                alt="logo of the company"
                            />
                            <h1 className={styles["main__heading"]}>
                                THE SOUND OF EVENTS
                            </h1>
                        </div>
                        {/* Ссылки на логин и регистрацию */}
                        <div className={styles["main__auth-links"]}>
                            <a
                                className={styles["main__link"]}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLoginRedirect();
                                }}
                            >
                                LOG IN
                            </a>
                            <a
                                className={styles["main__link"]}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignUpRedirect();
                                }}
                            >
                                SIGN UP
                            </a>
                        </div>
                    </div>
                    {/* Правый блок */}
                    <div className={styles["main__title-right"]}>
                        <Image
                            className={styles["main__image"]}
                            src={nico}
                            alt="A man sings on the stage"
                        />
                    </div>
                </section>
                {/* Второе полотно */}
                <section className={styles["main__info-section"]}>
                    {/* Левый блок */}
                    <div className={styles["main__info-left"]}>
                        <Image
                            className={styles["main__info-image"]}
                            src={crowd}
                            alt="The crowd of people on the festival of colour"
                        />
                    </div>
                    {/* Правый блок */}
                    <div className={styles["main__info-right"]}>
                        <div className={styles["main__info-header"]}>
                            <Image
                                className={styles["main__icon"]}
                                src={sign}
                                alt="A symbol image"
                            />
                            <h2 className={styles["main__subheading"]}>
                                WE SPECIALIZE IN CREATING SEAMLESS EVENT
                                EXPERIENCES:
                            </h2>
                        </div>
                        <div className={styles["main__info-list"]}>
                            <ul className={styles["main__list"]}>
                                <li className={styles["main__list-item"]}>
                                    Event creation and management
                                </li>
                                <li className={styles["main__list-item"]}>
                                    Filtering by date and category
                                </li>
                                <li className={styles["main__list-item"]}>
                                    Easy booking and reservation
                                </li>
                                <li className={styles["main__list-item"]}>
                                    Perfect for online and offline meetups
                                </li>
                                <li className={styles["main__list-item"]}>
                                    Hassle-free booking system
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Секция с карточками */}
                <section className={styles["main__cards-section"]}>
                    <div className={styles["main__cards-header"]}>
                        <h2 className={styles["main__subheading"]}>
                            PLANNING AN EVENT?
                        </h2>
                        <p className={styles["main__paragraph"]}>
                            WE WILL ENSURE AN EFFICIENT PARTICIPANT PATH TO YOUR
                            EVENT
                        </p>
                    </div>
                    <div className={styles["main__cards"]}>
                        <div className={styles["main__card"]}>
                            <div className={styles["main__card-image"]}>
                                <Image
                                    src={meeting}
                                    alt="People are sitting at the table with glasses of drink."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3>Registration of participants</h3>
                            </div>
                            <div className={styles["main__card-text"]}>
                                <p>
                                    We will integrate a registration form into
                                    the website, create personal accounts for
                                    different categories of participants
                                </p>
                            </div>
                        </div>
                        {/* Остальные карточки */}
                        <div className={styles["main__card"]}>
                            <div className={styles["main__card-image"]}>
                                <Image
                                    src={card}
                                    alt="Someone is keeping card by the cardreader."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3>Access control and visitor accounting</h3>
                            </div>
                            <div className={styles["main__card-text"]}>
                                <p>
                                    We organize controlled access for
                                    participants and accounting for individual
                                    halls and zones
                                </p>
                            </div>
                        </div>
                        <div className={styles["main__card"]}>
                            <div className={styles["main__card-image"]}>
                                <Image
                                    src={postman}
                                    alt="A postman is putting envelops into the postbox."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3>Mailings to participants</h3>
                            </div>
                            <div className={styles["main__card-text"]}>
                                <p>
                                    We will set up and send personalized emails,
                                    tickets, reminders, notifications
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Остальные секции */}
                <section className={styles["main__event-types"]}>
                    <h2 className={styles["main__subheading"]}>
                        We will help you choose events of any format
                    </h2>
                    <div className={styles["main__event-cards"]}>
                        {/* Карточки с типами событий */}
                        <div className={styles["main__event-card"]}>
                            <Image
                                className={styles["main__event-image"]}
                                src={festival}
                                alt="A photo of the people's crowd at the music festival"
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Festivals</p>
                            </div>
                        </div>
                        {/* Остальные карточки */}
                    </div>
                </section>
            </main>
        </>
    );
}
