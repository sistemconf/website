import "./Navbar.scss"

function NavbarLink({href, title}) {
    return (
        <a className="navbar-link" href={href}>{title}</a>
    )
}

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="https://media.discordapp.net/attachments/1030196142471905350/1067805289371418655/Screenshot_2023-01-25_at_14.48.17.png"/>
            <div className="navbar-links">
                <NavbarLink href="" title="Home"/>
                {/* <NavbarLink href="" title="Speakers"/> */}
                {/* <NavbarLink href="" title="Schedule"/> */}
                <NavbarLink href="" title="Team"/>
                <NavbarLink href="" title="Code of Conduct"/>
            </div>
        </div>
    )
}