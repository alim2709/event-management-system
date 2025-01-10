"use client";

import { useParams } from "next/navigation";
import styles from "./event.module.scss";

const events = {
    1: {
        title: "ROCK AM RING",
        // date: "JUNE 2025",
        // location: "Nürburgring, Germany",
        description: [
            {
                type: "heading",
                content: "WHEN WILL ROCK AM RING 2025 TAKE PLACE?",
            },
            {
                type: "paragraph",
                content: "You can mark June 6 - 8, 2025 in red in your calendar.",
            },
            {
                type: "heading",
                content: "WHERE WILL ROCK AM RING 2025 TAKE PLACE?",
            },
            {
                type: "paragraph",
                content: "The festival will take place at the Nürburgring.",
            },
            {
                type: "heading",
                content: "WHICH BANDS WILL BE PLAYING AT ROCK AM RING 2025?",
            },
            {
                type: "paragraph",
                content: "We are looking forward to 100 acts. Slipknot is the first confirmed headliner.",
            },
            {
                type: "paragraph",
                content: "Stay up to date with our newsletter and/or follow us on our socials!",
            },
            {
                type: "heading",
                content: "TIMETABLE",
            },
            {
                type: "paragraph",
                content: "To make sure you don't miss your favorite band's performance, we will publish all show times in advance via all our usual channels and in our festival app. Download it now! (iOS und Android)",
            },
            {
                type: "heading",
                content: "How does admission to the festival infield work?",
            },
            {
                type: "paragraph",
                content: "Admission to the concert area is only possible with a festival wristband on your wrist. You can get this at all check-in stations. At the entrance your wristbands and bags will be checked.",
            },
            {
                type: "heading",
                content: "Which age limits apply for Rock am Ring?",
            },
            {
                type: "image",
                src: "/images/218aea5d-7bc1-409f-87ed-b1e36386384a.jpg",
                alt: "Rock am Ring Age Limits",

            },
            {
                type: "paragraph",
                content: "*Guardians are usually the parents, in exceptional cases this can also be a legally appointed carer or legal guardian. The personal custody authorization cannot be transferred to other people, e.g. older friend or other family member.",
            },
            {
                type: "heading",
                content: "SPECIAL NEEDS & ACCESSIBILITY",
            },
            {
                type: "heading",
                content: "SPECIAL NEEDS TICKETS",
            },
            {
                type: "paragraph",
                content: "Persons with ID B can order tickets for themselves and one accompanying person on the following hotline +49 421 353 638",
            },
            {
                type: "paragraph",
                content: "For the Special Needs Camp please register at specialneeds@rock-am-ring.com.",
            },
            {
                type: "heading",
                content: "EVENT AREA & SANITARY FACILITIES",
            },
            {
                type: "paragraph",
                content: "At the Utopia Stage you can watch all concerts from the rooftop of the pit lane. The elevator for barrier-free access is located opposite the Medical Center. At the Mandora and Orbit Stage there are also barrier-free sanitary facilities and wheelchair platforms.",
            },
            {
                type: "heading",
                content: "MEDICATION",
            },
            {
                type: "paragraph",
                content: "If you need medication that needs to be kept refrigerated, you can contact our paramedics on site.",
            },
            {
                type: "heading",
                content: "IN CASE OF EMERGENCY",
            },
            {
                type: "paragraph",
                content: "Are you or someone in your group unwell or feeling unwell? Contact our paramedics on site. Security can also be contacted in the event of a medical emergency. They will then arrange everything to ensure that you are helped quickly and safely.",
            },
        ],
        image: "/images/rock-am-ring.jpg",
        link: "https://www.rock-am-ring.com/en",
    },
    3: {
        title: "ROCK IM PARK",
        // date: "JUNE 2025",
        // location: "Nürnberg, Germany",
        description: [
            {
                type: "heading",
                content: "When will Rock im Park 2025 take place?",
            },
            {
                type: "paragraph",
                content: "Rock im Park 2025 will take place June 6th - 8th.",
            },
            {
                type: "heading",
                content: "Where will Rock im Park 2025 take place?",
            },
            {
                type: "paragraph",
                content: "Rock im Park takes place at the Zeppelinfeld in the heart of Nuremberg.",
            },
            {
                type: "heading",
                content: "Festival site opening hours",
            },
            {
                type: "paragraph",
                content: "To respect the local residents, both the parking and the camping areas will be opened from 9 am on Thursday, 5th June 2025! Arriving before this time makes no sense, since the entire festival site is closed.",
            },
            {
                type: "paragraph",
                content: "Departure must be completed by no later than Monday, 9th June 2025 at 10 am. Access to the concert area is only possible with a festival wristband on your wrist. You can only pick up your wristband at the CHECK-INs.",
            },
            {
                type: "paragraph",
                content: "In addition to the wristband check, security checks will be carried out at the entrance.",
            },
            {
                type: "heading",
                content: "Age limits",
            },
            {
                type: "image",
                src: "/images/rockimpark.png",
                alt: "Rock Im Park Age Limits",

            },
            {
                type: "paragraph",
                content: "Stay of minors on the event and festival grounds",
            },
            {
                type: "paragraph",
                content: "Children under the age of 8 are not permitted to enter the festival grounds (infield), even if accompanied by a legal guardian (usually their parents). Children and young people between the ages of 8 and 16 may only enter and stay until midnight if accompanied by an authorized person or guardian. Adolescents aged 16 and over are permitted to enter and stay until the end of the event, even if they are not accompanied by an authorized person or guardian.",
            },
            {
                type: "paragraph",
                content: "Stay of minors on the camping areas of the event site",
            },
            {
                type: "paragraph",
                content: "Children under the age of 8 are not permitted to enter the Camping area, even if accompanied by an authorized person (usually their parents). Children and young people between the ages of 8 and 16 are only permitted to enter and stay if accompanied by an authorized person. Young people aged 16 and over are permitted to enter and stay without being accompanied by an authorized person.",
            },
            {
                type: "paragraph",
                content: "Parental authorization will only be accepted in written form and will be checked at the entrances to the event and/or festival grounds. Both the proof of age of the underage persons (official identification document, child or identity card) as well as the official identification documents of the accompanying authorized persons or persons with parental authority must be presented so that a comparison can be made with the information on the parental authorization.",
            },
            {
                type: "paragraph",
                content: "All other statutory provisions of the German Youth Protection Act (JuSchG) remain fully applicable.",
            },
            {
                type: "heading",
                content: "Around Rock im Park",
            },
            {
                type: "paragraph",
                content: "No more than 10 minutes by public transport from the festival site, you will find the historical old town of Nuremberg. If you couldn’t make it there yet you should give it a try, since the city has a lot to offer!",
            },
            {
                type: "paragraph",
                content: "There are several leisure opportunities around the festival:",
            },
            {
                type: "paragraph",
                content: "If you need some refreshment and want to go for a swim, there is the stadium bath and the club bath. The perfect start to a perfect day could be a relaxed pedal boat ride on the Dutzenteich. In addition to the rock marathon on the stages, we recommend to take the time to learn more about the historical background of the former “Reichsparteitagsgelände” in the Documentation Center. The Documentation Center offers you a comprehensive overview of this.",
            },
            {
                type: "heading",
                content: "Further questions?",
            },
            {
                type: "paragraph",
                content: "If you have not found the appropriate information for your issue, please contact: info@argo-konzerte.de",
            },
            {
                type: "heading",
                content: "SPECIAL NEEDS & ACCESSIBILITY",
            },
            {
                type: "heading",
                content: "Special Needs Ticket",
            },
            {
                type: "paragraph",
                content: "Festival visitors who have an severely disabled person's pass with mark B and their accompanying person each require a valid Weekend Festival Ticket, which is available at a reduced price from the free Eventim ticket hotline (+49 421 353638). There are also Day Festival Tickets available at a reduced price from the hotline.",
            },
            {
                type: "heading",
                content: "CHECK-IN",
            },
            {
                type: "paragraph",
                content: "On presentation of your festival ticket at CHECK-IN C you will get, during the specified opening hours, a wristband. This wristband allows you to enter the Special Needs Camping as well as the festival site. You will find the exact location on the site map.",
            },
            {
                type: "heading",
                content: "Special Assistant Point",
            },
            {
                type: "paragraph",
                content: "The Special Needs Camp has a Special Assistant Point, which is staffed at all times and competently answers visitors' questions about the festival. This point has a central power connection point where electrical devices - such as electric wheelchairs - can be charged if required. The individual tent pitches do not have a separate connection.",
            },
            {
                type: "heading",
                content: "MEDICATION",
            },
            {
                type: "paragraph",
                content: "If you are in need of medication that requires refrigeration, you are welcome to hand it in at the Special Assistant Point. Please pack the medication in a small labeled plastic box.",
            },
            {
                type: "heading",
                content: "IN CASE OF EMERGENCY",
            },
            {
                type: "paragraph",
                content: "Are you or someone in your group not feeling well or unwell? Get in touch with the contact person at the Special Assistant Point or with our paramedics on the grounds. Security can also be contacted in the event of a medical emergency. They will then arrange everything so that you can be helped quickly and safely.",
            },
        ],
        image: "/images/rock-im-park.jpg",
        link: "https://www.rock-im-park.com/en",
    },
};

export default function EventDetailPage() {
    const params = useParams();
    const { id } = params;

    const event = events[id as keyof typeof events];

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <section className={styles["event-details"]}>
            <div className={styles["event-details__container"]}>
                <h1 className={styles["event-details__title"]}>
                    {event.title}
                </h1>
                <button className={styles["event-details__button"]}>Add to my events</button>
                <img src={event.image} alt="The photo of the music festival" className={styles["event-details__image"]} />
                {/* <p className={styles["event-details__date"]}>
                    <span>Date:</span> {event.date}
                </p>
                <p className={styles["event-details__location"]}>
                    <span>Location:</span> {event.location}
                </p> */}
                <div className={styles["event-details__description"]}>
                    {event.description.map((desc, index) => {
                        if (desc.type === "heading") {
                            return (
                                <h2
                                    key={index}
                                    className={styles["event-details__description-heading"]}
                                >
                                    {desc.content}
                                </h2>
                            );
                        } else if (desc.type === "paragraph") {
                            return (
                                <p
                                    key={index}
                                    className={styles["event-details__description-paragraph"]}
                                >
                                    {desc.content}
                                </p>
                            );
                        } else if (desc.type === "image") {
                            return (
                                <img
                                    key={index}
                                    src={desc.src}
                                    alt={desc.alt}
                                    className={styles["event-details__description-image"]}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
                <div className={styles["event-details__links"]}>
                    <a
                        className={`${styles["event-details__link"]} ${styles["event-details__link--website"]}`}
                        href={event.link}
                    >
                        {event.title} Website
                    </a>
                    <a
                        className={`${styles["event-details__link"]} ${styles["event-details__link--other-events"]}`}
                        href="/events"
                    >
                        Other events
                    </a>
                </div>
            </div>
        </section>
    );
}
