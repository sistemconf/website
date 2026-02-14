import {Link} from 'react-router-dom';
import './Navigation.css';
import {useState} from 'react';
import titleLogo from '../assets/branding/SISTEM_Title.png';
import ColorTester from './ColorTester';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (<nav className="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={titleLogo} alt="SISTEM 2026" className="nav-logo-image"/>
            </Link>

            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/schedule" className="nav-link" onClick={closeMenu}>
                        Schedule
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/speakers" className="nav-link" onClick={closeMenu}>
                        Speakers
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/team" className="nav-link" onClick={closeMenu}>
                        Team
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/coc" className="nav-link" onClick={closeMenu}>
                        Code of Conduct
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/faq" className="nav-link" onClick={closeMenu}>
                        FAQ
                    </Link>
                </li>
                <li className="nav-item color-tester-item">
                    <ColorTester/>
                </li>
            </ul>
        </div>
    </nav>);
}

export default Navigation;
