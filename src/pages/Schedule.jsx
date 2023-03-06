import Navbar from "../components/static/Navbar";
import useScroll from "../hooks/useScroll"
import "./Schedule.scss"

import Timeline from "../components/static/Timeline";
import Footer from "../components/static/Footer";

export default function Team() {
    const scrollAmount = useScroll();

    return (
        <div className="team">
            <Navbar hasBg={scrollAmount > 75}/>
            <main>
                <section className="banner">
                    <div className="container">  
                        <h1>Schedule</h1>
                        <p> This year, SISTEM has expanded to two exciting tracks &mdash; A main speaker track and a panel track!</p>
                    </div>
                </section>
            </main>
            <section>
                <Timeline/>
            </section>
            <Footer/>
        </div>
    )
}