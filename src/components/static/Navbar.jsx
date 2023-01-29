import { useState } from "react";
import "./Navbar.scss"

function NavbarLink({href, title}) {
    return (
        <a className="navbar-link" href={href}>{title}</a>
    )
}

function Hamburger({click}) {
    return (
        <div className="hamburger" onClick={click}>
            <div className="burger burger1"/>
            <div className="burger burger2"/>
            <div className="burger burger3"/>
        </div>
    )
}

export default function Navbar() {
    // Mobile-based navigation menu state
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => setHamburgerOpen((prev) => !prev);
    
    console.log(hamburgerOpen);
    return (
        <div className="navbar">
            <img src="https://media.discordapp.net/attachments/1030196142471905350/1067805289371418655/Screenshot_2023-01-25_at_14.48.17.png"/>
            <div className={hamburgerOpen ? "hamburger-open" : "navbar-links"}>
                <NavbarLink href="" title="Home"/>
                {/* <NavbarLink href="" title="Speakers"/> */}
                {/* <NavbarLink href="" title="Schedule"/> */}
                <NavbarLink href="" title="Team"/>
                <NavbarLink href="" title="Code of Conduct"/>
            </div>
            <Hamburger click={toggleHamburger}/>
        </div>
    )
}