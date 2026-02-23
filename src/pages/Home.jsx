import './Home.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import logo from '../assets/branding/SISTEM2026_Logo.png';
import dcuLogo from '../assets/socs/dcu.svg';
import muLogo from '../assets/socs/mu.png';
import qcsLogo from '../assets/socs/qcs.png';
import tcdLogo from '../assets/socs/tcd.png';
import tudLogo from '../assets/socs/tud.svg';
import uccLogo from '../assets/socs/ucc.svg';
import ucdLogo from '../assets/socs/ucd.svg';
import ugLogo from '../assets/socs/ug.png';
import ulLogo from '../assets/socs/ul.svg';

function Home() {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socs = [{name: 'DCU', logo: dcuLogo}, {name: 'MU', logo: muLogo}, {name: 'QCS', logo: qcsLogo}, {
        name: 'TCD', logo: tcdLogo
    }, {name: 'TUD', logo: tudLogo}, {name: 'UCC', logo: uccLogo}, {name: 'UCD', logo: ucdLogo}, {
        name: 'UG', logo: ugLogo
    }, {name: 'UL', logo: ulLogo},];

    const handleWaitlistSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setFormStatus('idle');

        const form = event.currentTarget;

        const formData = new FormData(form);
        try {
            const response = await fetch('https://formspree.io/f/xwvnwwab', {
                method: 'POST', body: formData, headers: {'Accept': 'application/json'},
            });

            await response.json();

            form.reset();
            setFormStatus('success');
        } catch (err) {
            console.error('Waitlist submit error:', err);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<div className="home">
        <section className="hero">
            <div className="hero-content">
                <img src={logo} alt="SISTEM 2026"
                     className={`hero-logo ${logoLoaded ? 'hero-logo-visible' : ''}`}
                     onLoad={() => setLogoLoaded(true)}/>
                <h1>SISTEM 2026</h1>
                <p className="tagline">Student Inter-Society Tech and Enterprise Meetup</p>
                <div className="waitlist-card">
                    <h2>Join the waitlist</h2>
                    <p className="waitlist-copy">Sign up to get an email when tickets go live.</p>
                    <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
                        <label className="visually-hidden" htmlFor="waitlist-email">Email</label>
                        <input id="waitlist-email" name="email" type="email" required placeholder="you@example.com"
                               autoComplete="email" disabled={isSubmitting}/>
                        <button type="submit"
                                disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Notify me'}</button>
                    </form>
                    <div className={`waitlist-status ${formStatus === 'error' ? 'error' : ''}`} role="status"
                         aria-live="polite">
                        {formStatus === 'success' && "Thanks! We'll reach out to you soon about the information."}
                        {formStatus === 'error' && 'Something went wrong. Please try again in a moment.'}
                    </div>
                </div>
            </div>
        </section>

        <section className="highlights">
            <div className="container">
                <h2>Conference Highlights</h2>
                <div className="highlights-grid">
                    <div className="highlight">
                        <h3>1 Day</h3>
                        <p>Of experts talking, and pizza</p>
                    </div>
                    <div className="highlight">
                        <h3>5 Speakers</h3>
                        <p>Sharing their expertise</p>
                    </div>
                    <div className="highlight">
                        <h3>6 Hours</h3>
                        <p>Of talks and sessions</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="socs-involved">
            <div className="container">
                <h2>Societies involved</h2>
                <div className="socs-logos">
                    {socs.map((soc) => (<div key={soc.name} className="soc-logo-wrapper">
                        <img src={soc.logo} alt={soc.name} className="soc-logo"/>
                    </div>))}
                </div>
            </div>
        </section>

        <section className="navigation-preview">
            <div className="container">
                <h2>Explore More</h2>
                <div className="nav-cards">
                    <Link to="/schedule" className="nav-card">
                        <h3>
                            Schedule
                        </h3>
                        <p>View the full conference schedule</p>
                    </Link>
                    <Link to="/speakers" className="nav-card">
                        <h3>
                            Speakers
                        </h3>
                        <p>Meet our expert speakers</p>
                    </Link>
                    <Link to="/team" className="nav-card">
                        <h3>
                            Team
                        </h3>
                        <p>Meet the organizers</p>
                    </Link>
                    <Link to="/sponsors" className="nav-card">
                        <h3>
                            Sponsors
                        </h3>
                        <p>Learn about sponsorship opportunities</p>
                    </Link>
                    <Link to="/faq" className="nav-card">
                        <h3>
                            FAQ
                        </h3>
                        <p>Frequently asked questions</p>
                    </Link>
                </div>
            </div>
        </section>
    </div>);
}

export default Home;
