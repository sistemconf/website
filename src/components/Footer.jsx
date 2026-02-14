import {Link} from 'react-router-dom';
import './Footer.css';
import sistemTitle from '../assets/branding/SISTEM_Title.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (<footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <img
                    src={sistemTitle}
                    alt="SISTEM 2026"
                    className="footer-logo"
                />
                <p>Student Inter-Society Tech and Enterprise Meetup</p>
            </div>

            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/speakers">Speakers</Link></li>
                    <li><Link to="/team">Team</Link></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><Link to="/coc">Code of Conduct</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><a href="mailto:sistemconf@gmail.com">Contact Us</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                    <a
                        href="https://www.instagram.com/sistem_conf/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        IG
                    </a>
                    <a
                        href="https://www.linkedin.com/company/sistemconference"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        in
                    </a>
                    <a
                        href="https://github.com/sistemconf"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        GH
                    </a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {currentYear} SISTEM Conference. All rights reserved.</p>
        </div>
    </footer>);
}

export default Footer;
