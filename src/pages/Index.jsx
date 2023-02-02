import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar"
import useScroll from "../hooks/useScroll"
import "./index.scss"

export default function Index() {
    const scrollAmount = useScroll();

    return (
        <div className="index">
            <Navbar hasBg={scrollAmount > 450}/>
            <main>
                <section class="banner">
                    <div className="container">
                        <h1>
                            A <span>Student</span> Tech<br class="hide-mobile"/> & Enterprise Conference.
                        </h1>
                        <h3>March 11<sup>th</sup> 2023, Dublin City University.</h3>
                        <a href="#" class="button">Buy Tickets</a>
                        <a href="#" class="button secondary">Schedule</a>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="container">
                        <h3>About.</h3>
                        <p>
                            <b>SISTEM</b> is Ireland's premiere tech conference for students, with the mission to inspire the next generation of tech leaders and enthusiasts.&nbsp;
                            <b>SISTEM<span>2023</span></b> will be our first fully in-person conference since 2020, and our sixth time organising the conference. Year after year the conference has grown in scale and ambition 
                            with over 200 of Ireland's finest up and coming tech talent expected to attend. 
                        </p>

                        <div className="stats-container">
                            <div className="stats">
                                <div className="stat">
                                    <h3>200+</h3>
                                    <p>Attendees</p>
                                </div>

                                <div className="stat">
                                    <h3>1</h3>
                                    <p>Day</p>
                                </div>

                                <div className="stat">
                                    <h3>X</h3>
                                    <p>Sessions</p>
                                </div>

                                <div className="stat">
                                    <h3>2</h3>
                                    <p>Tracks</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="tickets" id="tickets">
                    <div className="container">
                        <h3>
                            Tickets
                        </h3>
                        <div>
                            <div>
                                SISTEM<span>standard</span>
                                <ul>
                                    <li>Admission to the event</li>
                                    <li>SISTEM Stickers</li>
                                    <li>SISTEM Tote</li>
                                </ul>
                            </div>
                            <div>
                                SISTEM<span>premium</span>
                                <ul>
                                    <li>Admission to the event</li>
                                    <li>SISTEM Stickers</li>
                                    <li>SISTEM Tote</li>
                                    <li>SISTEM Notebook</li>
                                    <li>SISTEM Flask</li>
                                    <li>Other merch</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sponsors" id="sponsors">
                    <div className="container">
                        <h3>Sponsors</h3>
                    </div>
                </section>

                <section className="getting-there" id="getting-there">
                    <div className="container">
                        <h3>Getting There</h3>
                    </div>
                </section>

                <section className="gallery" id="gallery">
                    <div className="container">
                        <h3>Gallery</h3>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}