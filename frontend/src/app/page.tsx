import Image from "next/image";
import styles from "./page.module.scss";
import kolokolLogo from "../../public/images/kolokol-orange.png";
import nico from "../../public/images/nico.png";
import meeting from "../../public/images/corp-event-checklist.jpg";
import crowd from "../../public/images/2-1.png";
import card from "../../public/images/Midwest-Alarm-Services_Blog-Images_0001_Types-of-access-control.png";
import postman from "../../public/images/what-is-a-mailing-address.jpg";
import festival from "../../public/images/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg";
import exhibition from "../../public/images/exhibition.jpg";
import presentation from "../../public/images/getty_533991320_352162.jpg";
import conference from "../../public/images/eventscom_cover.jpg";
import training from "../../public/images/team-training.jpg";
import football from "../../public/images/istockphoto-469569148-612x612.jpg";
import sign from "../../public/images/sign.png";
import bigCrowd from "../../public/images/5-1.png";
import tomorrowland from "../../public/images/Tomorrowland2016mainstage.jpg";


export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <section className={styles["main__title-section"]}>
                    {/* лівий бік */}
                    <div className={styles["main__title-left"]}>
                        {/* заголовок і логотип */}
                        <div className={styles["main__title-logo"]}>
                            <Image
                                className={styles["main__logo"]}
                                src={kolokolLogo}
                                alt="logo of the company"
                            />
                            <h1 className={styles["main__heading"]}>The sound of events</h1>
                        </div>
                        {/* посилання на логін */}
                        <div className={styles["main__auth-links"]}>
                            <a className={styles["main__link"]} href="#">Log In</a>
                            <a className={styles["main__link"]} href="#">Sign Up</a>
                        </div>
                    </div>
                    {/* правий бік */}
                    <div className={styles["main__title-right"]}>
                        <Image
                            className={styles["main__image"]}
                            src={nico}
                            alt="A man sings on the stage"
                        />
                    </div>
                </section>
                {/* друге полотно */}
                <section className={styles["main__info-section"]}>
                    {/* лівий бік */}
                    <div className={styles["main__info-left"]}>
                        <Image
                            className={styles["main__info-image"]}
                            src={crowd}
                            alt="The crowd of people on the festival of colour"
                        />
                    </div>
                    {/* правий бік */}
                    <div className={styles["main__info-right"]}>
                        {/* заголовок і стрілка */}
                        <div className={styles["main__info-header"]}>
                            <Image
                                className={styles["main__icon"]}
                                src={sign}
                                alt="A symbol image"
                            />
                            <h2 className={styles["main__subheading"]}>We specialize in creating seamless event experiences:</h2>
                        </div>
                        {/* список */}
                        <div className={styles["main__info-list"]}>
                            <ul className={styles["main__list"]}>
                                <li className={styles["main__list-item"]}>Event creation and management</li>
                                <li className={styles["main__list-item"]}>Filtering by date and category</li>
                                <li className={styles["main__list-item"]}>Easy booking and reservation</li>
                                <li className={styles["main__list-item"]}>Perfect for online and offline meetups</li>
                                <li className={styles["main__list-item"]}>Hassle-free booking system</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* секція з трьома картками */}
                <section className={styles["main__cards-section"]}>
                    {/* заголовок */}
                    <div className={styles["main__cards-header"]}>
                        <h2 className={styles["main__subheading"]}>Planning an event?</h2>
                        <p className={styles["main__paragraph"]}>We will ensure an efficient participant path to your event</p>
                    </div>
                    {/* картки */}
                    <div className={styles["main__cards"]}>
                        <div className={styles["main__card"]}>
                            <div>
                                <Image
                                    className={styles["main__card-image"]}
                                    src={meeting}
                                    alt="People are sitting at the table with glasses of drink."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3 className={styles["main__card-heading"]}>Registration of participants</h3>
                                <div className={styles["main__card-text"]}>
                                    <p>We will integrate a registration form into the website, create personal accounts for different categories of participants</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["main__card"]}>
                            <div>
                                <Image
                                    className={styles["main__card-image"]} 
                                    src={card}
                                    alt="Someone is keeping card by the cardreader."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3 className={styles["main__card-heading"]}>Access control and visitor accounting</h3>
                                <div className={styles["main__card-text"]}>
                                    <p>We organize controlled access for participants and accounting for individual halls and zones</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["main__card"]}>
                            <div>
                                <Image
                                    className={styles["main__card-image"]} 
                                    src={postman}
                                    alt="A postman is putting envelops into the postbox."
                                />
                            </div>
                            <div className={styles["main__card-title"]}>
                                <h3 className={styles["main__card-heading"]}>Mailing to participants</h3>
                                <div className={styles["main__card-text"]}>
                                    <p>We will set up and send personalized emails, tickets, reminders, notifications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles["main__event-types"]}>
                    {/* заголовок */}
                    <h2 className={styles["main__subheading"]}>We will help you choose events of any format</h2>
                    {/* картки */}
                    <div className={styles["main__event-cards"]}>
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
                        <div className={styles["main__event-card"]}>
                            <Image
                                className={styles["main__event-image"]}
                                src={exhibition}
                                alt="A photo of the people at the Art Gallery"
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Exhibitions</p>
                            </div>
                        </div>
                        <div className={styles["main__event-card"]}>
                            <Image 
                                className={styles["main__event-image"]}
                                src={presentation}
                                alt="A photo of a man in front of other people"
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Presentations</p>
                            </div>
                        </div>
                        <div className={styles["main__event-card"]}>
                            <Image 
                                className={styles["main__event-image"]}
                                src={conference}
                                alt="A photo of the man on the stage in front of a lot of people"
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Conferences</p>
                            </div>
                        </div>
                        <div className={styles["main__event-card"]}>
                            <Image
                                className={styles["main__event-image"]}
                                src={training}
                                alt="A photo of a man in front of other people" 
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Trainings</p>
                            </div>
                        </div>
                        <div className={styles["main__event-card"]}>
                            <Image 
                                className={styles["main__event-image"]}
                                src={football}
                                alt="A photo of fans, rising their hands, during football match"
                            />
                            <div className={styles["main__event-title"]}>
                                <p>Sporting Events</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* передостання секція */}
                <section className={styles["main__benefits"]}>
                    {/* зображення */}
                    <div>
                        <Image
                            className={styles["main__benefits-image"]} 
                            src={bigCrowd}
                            alt="A huge crowd of people is in front of the big stage during the music festival"
                        />
                    </div>
                    {/* текст */}
                    <div className={styles["main__benefits-text"]}>
                        <h2 className={styles["main__subheading"]}>Choosing kolokol. Events, you</h2>
                        <div className={styles["main__benefit"]}>
                            <h4 className={styles["main__benefit-title"]}>Get rid of queues</h4>
                            <p className={styles["main__benefit-description"]}>We will offer the most optimal option for registration and access control to your event</p>
                        </div>
                        <div className={styles["main__benefit"]}>
                            <h4 className={styles["main__benefit-title"]}>Make registration convenient and modern</h4>
                            <p className={styles["main__benefit-description"]}>Personal accounts, separate registration forms for different categories of participants, unlimited number of fields of any type with verification of entered data</p>
                        </div>
                        <div className={styles["main__benefit"]}>
                            <h4 className={styles["main__benefit-title"]}>Get event statistics</h4>
                            <p className={styles["main__benefit-description"]}>On registrations, ticket sales, passage and number of participants on the site - online and a report on the results of the entire event</p>
                        </div>
                    </div>
                </section>
                <section className={styles["main__closing-image"]}>
                    <Image
                        className={styles["main__image"]}
                        src={tomorrowland}
                        alt="A huge crowd of people is in front of the big stage during the music festival"
                    />
                </section>
            </main>
        </>
    );
}
