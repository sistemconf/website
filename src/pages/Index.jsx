import Navbar from "../components/static/Navbar"
import "./index.scss"

export default function Index() {
    return (
        <div className="index">
            <Navbar/>
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
            </main>
        </div>
    )
}