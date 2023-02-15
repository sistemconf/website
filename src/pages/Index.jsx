import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar"
import useScroll from "../hooks/useScroll"
import "./index.scss"

import mastercardLogo from "../assets/sponsors/mastercard.png"
import libertyItLogo from "../assets/sponsors/libertyit.png"
import r3Logo from "../assets/sponsors/r3.png"
import mcsLogo from "../assets/sponsors/mcsgroup.png"
import version1Logo from "../assets/sponsors/version1.png"
import stripeLogo from "../assets/sponsors/stripe.png"
import tinesLogo from "../assets/sponsors/tines.png"

export default function Index() {
    const scrollAmount = useScroll();
    const position = [53.38533306530379, -6.2587119915193545]

    return (
        <div className="index">
            <Navbar hasBg={scrollAmount > 450}/>
            <main>
                <section className="banner">
                    <div className="container">
                        <h1>
                            A <span>Student</span> Tech<br className="hide-mobile"/> & Enterprise Conference.
                        </h1>
                        <h3>March 11<sup>th</sup> 2023, Dublin City University.</h3>
                        <a href="#" className="button">Buy Tickets</a>
                        <a href="#" className="button secondary">Schedule</a>
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
                        <div className="ticket-table">
                        <div class="columns">
                            <ul class="price">
                                <li class="header">Standard</li>
                                <li class="grey">€ 12</li>
                                <li>Access to the Event<sup>*</sup></li>
                                <li>SISTEM Totebag</li>
                                <li>SISTEM Lanyard + ID card</li>
                                <li>SISTEM Stickers</li>
                                <li class="grey"><a href="#" class="button">Purchase</a></li>
                            </ul>
                        </div> 

                        <div class="columns">
                            <ul class="price">
                                <li class="header plus">Standard+</li>
                                <li class="grey">€ 12 + donation</li>
                                <li>Access to the Event<sup>*</sup></li>
                                <li>SISTEM Totebag</li>
                                <li>SISTEM Lanyard + ID card</li>
                                <li>SISTEM Stickers</li>
                                <li>An additional donation of your choosing</li>
                                <li class="grey"><a href="#" class="button">Purchase</a></li>
                            </ul>
                        </div> 
                        </div>

                        <p><sup>*</sup> SISTEM2023 is not a hybrid event, and the event will not be livestreamed. Tickets are non-refundable.</p>

                    </div>

                </section>

                <section className="sponsors" id="sponsors">
                    <div className="container">
                        <h3>Sponsors</h3>
                        <div className="sponsor-tier">
                            <h4>
                                Diamond
                            </h4>
                            <div className="sponsor-tier-sponsors">
                                <img src={mastercardLogo}/>
                            </div>
                        </div>
                        <div className="sponsor-tier">
                            <h4>
                                Platinum
                            </h4>
                            <div className="sponsor-tier-sponsors">
                                <img src={libertyItLogo}/>
                                <img src={r3Logo}/>
                            </div>
                        </div>
                        <div className="sponsor-tier">
                            <h4>
                                Gold
                            </h4>
                            <div className="sponsor-tier-sponsors">
                                <img src={mcsLogo}/>
                                <img src={version1Logo}/>
                            </div>
                        </div>

                        <div className="sponsor-tier">
                            <h4>
                                Silver
                            </h4>
                            <div className="sponsor-tier-sponsors">
                                <img src={stripeLogo}/>
                                <img src={tinesLogo}/>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>

                <section className="getting-there" id="getting-there">
                    <div className="container">
                        <h3>Getting There</h3>
                        <p>
                            This year's conference will be held in the "U" building found on DCU's Glasnevin Campus. 
                            &nbsp;<a href="https://goo.gl/maps/otfP8uswn1BP9JqH9">Find us on Google Maps!</a>
                        </p>
                        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}/>
                        </MapContainer>
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