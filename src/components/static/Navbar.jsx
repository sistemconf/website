import { useState } from "react";
import "./Navbar.scss"

function NavbarLink({href, title}) {
    return (
        <a className="navbar-link" href={href}>{title}</a>
    )
}

export default function Navbar({hasBg}) {
    // Mobile-based navigation menu state
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => setHamburgerOpen((prev) => !prev);

    return (
        <>
            <header className={hasBg ? "is-scrolling" : ""}>
                <div className="container">
                    <h2><span>SISTEM</span>2023</h2>
                    <nav className="desktop-nav">
                        <a href="/">Home</a>
                        <a href="/team">Team</a>
                        <a href="/speakers">Speakers</a>
                        <a href="/code-of-conduct">Code of Conduct</a>
                        <a href="/#tickets" className="button">Buy Tickets</a>
                    </nav>
                    <button className={"hamburger" + (hamburgerOpen ? " is-active" : "")} onClick={toggleHamburger}>
                        <div className="bar"/>
                    </button>
                </div>
            </header>
            <nav className={"mobile-nav" + (hamburgerOpen ? " is-active" : "")}>
                <a href="/">Home</a>
                <a href="/team">Team</a>
                <a href="/speakers">Speakers</a>
                <a href="/schedule">Schedule</a>
                <a href="/code-of-conduct">Code of Conduct</a>
                <a href="/#tickets" className="button">Buy Tickets</a>
            </nav>
        </>

    )
}