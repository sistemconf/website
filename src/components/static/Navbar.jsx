import { useState } from "react";
import "./Navbar.scss"

function NavbarLink({href, title}) {
    return (
        <a className="navbar-link" href={href}>{title}</a>
    )
}

export default function Navbar() {
    // Mobile-based navigation menu state
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => setHamburgerOpen((prev) => !prev);
    
    console.log(hamburgerOpen);
    return (
        <header>
            <div className="container">
                <h2><span>SISTEM</span>2023</h2>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Team</a>
                    <a href="#">Code of Contact</a>
                    <a href="#">Buy Tickets</a>
                </nav>
            </div>
        </header>
    )
}