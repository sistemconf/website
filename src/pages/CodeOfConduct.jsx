import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar";
import useScroll from "../hooks/useScroll";
import "./CodeOfConduct.scss"

export default function CodeOfConduct() {
    const scrollAmount = useScroll();

    return (
        <div className="code-of-conduct">
            <Navbar hasBg={scrollAmount > 75}/>
            <main>
                <section className="banner">
                    <div className="container">  
                        <h1>Code of Conduct</h1>
                        <p> This documents how we must conduct ourselves as members of the same community, in persuit of a common goal.</p>
                    </div>
                </section>
                <section className="coc-body">
                    <div className="container">
                        <h3>Purpose</h3>
                        <p>
                            SISTEM is dedicated to providing a harassment-free conference experience for everyone, 
                            regardless of gender, gender identity and expression, sexual orientation, 
                            disability, physical appearance, body size, race, age, religion or lack 
                            thereof. We do not tolerate harassment of conference participants in any form. 
                            Sexual language and imagery is not appropriate for any conference venue, including talks. 
                            Conference participants violating these rules may be sanctioned or expelled from the conference 
                            without a refund at the discretion of the conference organisers.
                        </p>
                        <h3>Conduct</h3>
                        <p>
                            We are committed to providing a friendly, safe and welcoming environment for all, 
                            regardless of level of experience, gender identity and expression, sexual 
                            orientation, disability, personal appearance, body size, race, ethnicity,
                            age, religion, nationality, or other similar characteristic.
                        </p>

                        <p>
                            Please avoid using overtly sexual aliases or other nicknames that might detract from a friendly,
                            safe and welcoming environment for all.
                        </p>

                        <p>
                            Please be kind and courteous. There's no need to be mean or rude.
                        </p>

                        <p>
                            Respect that people have differences of opinion and that every design or implementation choice carries 
                            a trade-off and numerous costs. Please keep unstructured critique to a minimum. 
                        </p>

                        <p>
                            We will exclude you from interaction if you insult, demean or harass anyone. That is not welcome behavior. 
                            Private harassment is also unacceptable. In particular, we don't tolerate behavior that excludes people in 
                            socially marginalized groups. We interpret the term “harassment” as but not limited to: 
                        </p>

                        <ul>
                            <li>
                                Verbal comments that reinforce social structures of domination related to gender, gender identity and expression,
                                sexual orientation, disability, physical appearance, body size, race, age, religion
                            </li>
                            <li>
                                Sexual images in public spaces
                            </li>
                            <li>
                                Deliberate intimidation, stalking, or following
                            </li>
                            <li>
                                Harassing photography or recording
                            </li>
                            <li>
                                Sustained disruption of talks or other events
                            </li>
                            <li>
                                Inappropriate physical contact
                            </li>
                            <li>
                                Invasion of personal space
                            </li>
                            <li>
                                Unwelcome sexual attention
                            </li>
                            <li>
                                Advocating for, or encouraging, any of the above behaviour
                            </li>
                        </ul>

                        <p>
                            Any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome.
                        </p>

                        <h3>Enforcement</h3>
                        <p>
                            Participants asked to stop any harassing behavior are expected to comply immediately.
                        </p>
                        <p>
                            If a participant engages in harassing behaviour, event organisers retain the right to take 
                            any actions to keep the event a welcoming environment for all participants. This includes 
                            warning the offender or expulsion from the conference with no refund.
                        </p>
                        <p>
                            Event organisers may take action to address anything designed to, or with the clear impact of,
                            disrupting the event or making the environment hostile for any participants. We expect participants 
                            to follow these rules at all event venues and event-related social activities.
                        </p>
                        <p>
                            Our enforcement policies apply to all official SISTEM venues; including Hopin, Discord, Github repositories, 
                            Social Media platforms (included but not limited to Facebook, Twitter, Instagram and LinkedIn) and all forums under sistemconf.com.
                        </p>
                        <h3>Reporting</h3>
                        <p>
                            If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference staff can be identified 
                            by t-shirts at our in person events and with Organiser titles at online events. Harassment and other Code of Conduct violations reduce 
                            the value of our event for everyone.
                        </p>
                        <p>
                            You can make a report personally by contacting the conference or an individual organiser and all reports whether personal or anonymously will
                            be investigated. Our aim is to act as quickly and responsibly as possible to prevent recurrence. Our organisers will ensure that you are in a 
                            safe space to make any report, they may involve other event staff to ensure your report is managed properly. We will handle all reports with 
                            confidentiality, respect and compassion. You may involve another person for support and will not be expected to engage in confrontation.
                        </p>
                        <h3>Contact Information</h3>
                        <p>You can reach out to us at any time using our email <a href="mailto:sistemconf@gmail.com">sistemconf@gmail.com</a></p>
                        <h3>Attribution</h3>
                        <p>
                            This code of conduct was based on that of <a href="https://www.rust-lang.org/policies/code-of-conduct">Rust Community</a> and <a href="https://2019.jsconf.eu/code-of-conduct/">JSConf EU</a>. 
                        </p>

                        <p>
                        We are supporters of continual learning on inclusivity, therefore if you feel we have missed anything in our Code of Conduct that would be of benefit to our attendees please contact us.
                        </p>

                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}