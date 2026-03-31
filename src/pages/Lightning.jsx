import {useState} from 'react';
import './Lightning.css';
import {isValidEmail, trimmed} from '../utils/formValidation';

function LightningForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!trimmed(name)) {
            newErrors.name = 'Please enter your name.';
        }

        if (!trimmed(email)) {
            newErrors.email = 'Please enter your email address.';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            const firstErrorId = newErrors.name ? 'lightning-name' : 'lightning-email';
            const el = document.getElementById(firstErrorId);
            if (el) el.focus();
            return;
        }

        if (trimmed(honeypot)) {
            // spam
            return;
        }

        const payload = {
            name: trimmed(name),
            email: trimmed(email),
            title: trimmed(title) || 'N/A',
            notes: trimmed(notes) || 'None',
            subject: `SISTEM 2026 Lightning Talk Registration - ${trimmed(title) || 'N/A'} - ${trimmed(name)}`,
        };

        try {
            setIsSubmitting(true);
            setSubmitError(null);
            setSubmitSuccess(false);

            const response = await fetch('https://formspree.io/f/mdapzvrv', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Accept: 'application/json'},
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setSubmitError('We could not send your registration at this time. Please try again later.');
                return;
            }

            setSubmitSuccess(true);
            setName('');
            setEmail('');
            setTitle('');
            setNotes('');
            setHoneypot('');
        } catch {
            setSubmitError('Something went wrong while sending your registration. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<section className="lightning-main" aria-label="Lightning talk registration form">
        <h2>Register for Lightning Talks</h2>
        <p className="lightning-intro-text">
            Lightning talks are 5 minutes each. The lightning talk slot will run from 4:00–4:30 PM.
            Please use the form below to register. We will contact selected speakers by email with confirmation and any
            further details. A screen with an HDMI input will be available for projecting presentations, images, or
            other visual materials.
        </p>

        <form className="lightning-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
                <label htmlFor="lightning-name">
                    Name <span className="required-indicator">*</span>
                </label>
                <input
                    id="lightning-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'lightning-name-error' : undefined}
                />
                {errors.name && (<p id="lightning-name-error" className="field-error">{errors.name}</p>)}
            </div>

            <div className="form-field">
                <label htmlFor="lightning-email">
                    Email <span className="required-indicator">*</span>
                </label>
                <input
                    id="lightning-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'lightning-email-error' : undefined}
                />
                {errors.email && (<p id="lightning-email-error" className="field-error">{errors.email}</p>)}
            </div>

            <div className="form-field">
                <label htmlFor="lightning-title">Talk title (optional)</label>
                <input
                    id="lightning-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="A short title for your lightning talk"
                />
            </div>

            <div className="form-field">
                <label htmlFor="lightning-notes">Additional notes (optional)</label>
                <textarea
                    id="lightning-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Anything else we should know (equipment needs, accessibility requirements, etc.)"
                />
            </div>

            <div className="form-field honeypot">
                <label htmlFor="lightning-website">Website (leave this field blank)</label>
                <input
                    id="lightning-website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                />
            </div>

            <p className="lightning-form-note">We will contact you by email if your registration is accepted. A screen
                with an HDMI input will be provided for lightning talk presenters to project any visual material.</p>

            {submitSuccess && (<div className="lightning-success" role="status">
                <h3>Registration submitted</h3>
                <p>Thank you for registering for a lightning talk. We will be in touch by email.</p>
            </div>)}

            {submitError && (<p className="field-error" role="alert">{submitError}</p>)}

            <button type="submit" className="btn btn-primary lightning-submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Submit registration'}
            </button>
        </form>
    </section>);
}

function Lightning() {
    return (<div className="lightning-page">
        <div className="page-header">
            <h1>Lightning Talks</h1>
            <p>5-minute talks from attendees. Platforms for everyone to put themselves out there.</p>
        </div>

        <div className="container lightning-layout">
            <LightningForm/>
        </div>
    </div>);
}

export default Lightning;


