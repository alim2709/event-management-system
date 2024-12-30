// import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <>
            <main>
                {/* титулка */}
                <section>
                    {/* лівий бік */}
                    <div>
                        {/* заголовок і логотип */}
                        <div>
                            <img src="#" alt="logo of the company" />
                            <h1>THE SOUND OF EVENTS</h1>
                        </div>
                        {/* посилання на логін */}
                        <div>
                            <a href="#">LOG IN</a>
                            <a href="#">SIGN UP</a>
                        </div>
                    </div>
                    {/* правий бік */}
                    <div>
                        <img src="#" alt="A man sings on the stage" />
                    </div>
                </section>
                {/* друге полотно */}
                <section>
                    {/* лівий бік */}
                    <div>
                        <img src="#" alt="The crowd of people on the festival of colour" />
                    </div>
                    {/* правий бік */}
                    <div>
                        {/* заголовок і стрілка */}
                        <div>
                            <img src="#" alt="A symbol image" />
                            <h2>WE SPECIALIZE IN CREATING SEAMLESS EVENT EXPERIENCES:</h2>
                        </div>
                        {/* список */}
                        <div>
                            <ul>
                                <li>Event creation and management</li>
                                <li>Filtering by date and category</li>
                                <li>Easy booking and reservation</li>
                                <li>Perfect for online and offline meetups</li>
                                <li>Hassle-free booking system</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* секція з трьома картками */}
                <section>
                    {/* заголовок */}
                    <div>
                        <h2>PLANNING AN EVENT?</h2>
                        <p>WE WILL ENSURE AN EFFICIENT PARTICIPANT PATH TO YOUR EVENT</p>
                    </div>
                    {/* картки */}
                    <div>
                        <div>
                            <div>
                                <img src="#" alt="People are sitting at the table with glasses of drink." />
                            </div>
                            <div>
                                <h3>Registration of participants</h3>
                            </div>
                            <div>
                                <p>We will integrate a registration form into the website, create personal accounts for different categories of participants</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="#" alt="Someone is keeping card by the cardreader." />
                            </div>
                            <div>
                                <h3>Access control and visitor accounting</h3>
                            </div>
                            <div>
                                <p>We organize controlled access for participants and accounting for individual halls and zones</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="#" alt="A postman is putting envelops into the postbox." />
                            </div>
                            <div>
                                <h3>Mailings to participants</h3>
                            </div>
                            <div>
                                <p>We will set up and send personalized emails, tickets, reminders, notifications</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {/* заголовок */}
                    <h2>We will help you choose events of any format</h2>
                    {/* картки */}
                    <div>
                        <img src="#" alt="A photo of the people's crowd at the music festival" />
                        <div>
                            <p>Festivals</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt="A photo of the people at the Art Gallery" />
                        <div>
                            <p>Exhibitions</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt="A photo of a man in front of other people" />
                        <div>
                            <p>Presentations</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt="A photo of the man on the stage in front of a lot of people" />
                        <div>
                            <p>Conferences</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt="A photo of a man in front of other people" />
                        <div>
                            <p>Trainings</p>
                        </div>
                    </div>
                    <div>
                        <img src="#" alt="A photo of fans, rising their hands, during football match" />
                        <div>
                            <p>Sporting Events</p>
                        </div>
                    </div>
                </section>
                {/* передостання секція */}
                <section>
                    {/* зображення */}
                    <div>
                        <img src="#" alt="A huge crowd of people is in front of the big stage during the music festival" />
                    </div>
                    {/* текст */}
                    <div>
                        <h2>Choosing kolokol. Events, you</h2>
                        <div>
                            <h4>Get rid of queues</h4>
                            <p>We will offer the most optimal option for registration and access control to your event</p>
                        </div>
                        <div>
                            <h4>Make registration convenient and modern</h4>
                            <p>Personal accounts, separate registration forms for different categories of participants, unlimited number of fields of any type with verification of entered data</p>
                        </div>
                        <div>
                            <h4>Get event statistics</h4>
                            <p>On registrations, ticket sales, passage and number of participants on the site - online and a report on the results of the entire event</p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src="#" alt="A huge crowd of people is in front of the big stage during the music festival" />
                </section>
            </main>
        </>
    );
}
