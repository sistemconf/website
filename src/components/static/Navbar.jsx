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
        <header className={hasBg ? "is-scrolling" : ""}>
            <div className="container">
                <h2><span>SISTEM</span>2023</h2>
                <nav>
                    <a href="/">Home</a>
                    <a href="/team">Team</a>
                    <a href="/code-of-conduct">Code of Contact</a>
                    <a href="#tickets" className="button">Buy Tickets</a>
                    <button className={"hamburger" + (hamburgerOpen ? " is-active" : "")} onClick={toggleHamburger}>
                        <div className="bar"/>
                    </button>
                </nav>
            </div>
        </header>
    )
}