import {useState} from 'react';
import './Speakers.css';
import {isValidEmail, trimmed} from '../utils/formValidation';

function SpeakerProposalForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [talkTitle, setTalkTitle] = useState('');
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

        if (!trimmed(talkTitle)) {
            newErrors.talkTitle = 'Please enter a proposed talk title, or N/A if not decided yet.';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            const firstErrorId = newErrors.name ? 'speaker-name' : newErrors.email ? 'speaker-email' : 'speaker-talk-title';
            const el = document.getElementById(firstErrorId);
            if (el) el.focus();
            return;
        }

        // If this hidden field is filled, treat it as spam and silently abort, it's a honeypot
        if (trimmed(honeypot)) {
            return;
        }

        const safeTalkTitle = trimmed(talkTitle) || 'N/A';

        const payload = {
            name: trimmed(name),
            email: trimmed(email),
            organisation: trimmed(organisation) || 'N/A',
            talkTitle: safeTalkTitle,
            notes: trimmed(notes) || 'None',
            subject: `SISTEM 2026 Speaker Proposal - ${safeTalkTitle} - ${trimmed(name)}`,
        };

        try {
            setIsSubmitting(true);
            setSubmitError(null);
            setSubmitSuccess(false);

            // Free plan for formspree is 50/mo so hopefully we don't go above that...
            const response = await fetch('https://formspree.io/f/xjgewole', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', Accept: 'application/json',
                }, body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setSubmitError('We could not send your proposal at this time. Please try again later.');
                return;
            }

            setSubmitSuccess(true);
            setName('');
            setEmail('');
            setOrganisation('');
            setTalkTitle('');
            setNotes('');
            setHoneypot('');
        } catch {
            setSubmitError('Something went wrong while sending your proposal. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<section className="speakers-main" aria-label="Speaker proposal form">
        <h2>Interested in speaking at SISTEM 2026?</h2>
        <p className="speakers-intro-text">
            Talks at SISTEM 2026 are 30 minutes in total. Within those 30 minutes, we encourage speakers to leave
            approximately 5–10 minutes for audience questions, but the exact balance of talk and Q&amp;A is up to
            you.
        </p>
        <p className="speakers-intro-text">
            Use the form below to submit a talk proposal. We review proposals on a rolling basis and will follow up
            with you by email.
        </p>

        <form className="speakers-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
                <label htmlFor="speaker-name">
                    Name <span className="required-indicator">*</span>
                </label>
                <input
                    id="speaker-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'speaker-name-error' : undefined}
                />
                {errors.name && (<p id="speaker-name-error" className="field-error">
                    {errors.name}
                </p>)}
            </div>

            <div className="form-field">
                <label htmlFor="speaker-email">
                    Email <span className="required-indicator">*</span>
                </label>
                <input
                    id="speaker-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'speaker-email-error' : undefined}
                />
                {errors.email && (<p id="speaker-email-error" className="field-error">
                    {errors.email}
                </p>)}
            </div>

            <div className="form-field">
                <label htmlFor="speaker-organisation">Organisation (optional)</label>
                <input
                    id="speaker-organisation"
                    type="text"
                    placeholder="Your organisation or N/A"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="speaker-talk-title">
                    Proposed talk title <span className="required-indicator">*</span>
                </label>
                <input
                    id="speaker-talk-title"
                    type="text"
                    value={talkTitle}
                    onChange={(e) => setTalkTitle(e.target.value)}
                    placeholder="Your talk title or N/A if not decided yet"
                    aria-required="true"
                    aria-invalid={errors.talkTitle ? 'true' : 'false'}
                    aria-describedby={errors.talkTitle ? 'speaker-talk-title-error' : undefined}
                />
                {errors.talkTitle && (<p id="speaker-talk-title-error" className="field-error">
                    {errors.talkTitle}
                </p>)}
            </div>

            <div className="form-field">
                <label htmlFor="speaker-notes">Additional notes (optional)</label>
                <textarea
                    id="speaker-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Anything else we should know about you or your talk?"
                />
            </div>

            {/* Honeypot field (hidden from users) */}
            <div className="form-field honeypot">
                <label htmlFor="speaker-website">Website (leave this field blank)</label>
                <input
                    id="speaker-website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                />
            </div>

            <p className="speakers-form-note">
                We will send your proposal directly to the SISTEM organising team. If selected, we will reach out
                to coordinate scheduling and logistics.
            </p>

            {submitSuccess && (<div className="speakers-success" role="status">
                <h3>Proposal submitted</h3>
                <p>
                    Thank you for submitting a talk proposal for SISTEM 2026. We have received your details and
                    will be in touch via email.
                </p>
            </div>)}

            {submitError && (<p className="field-error" role="alert">
                {submitError}
            </p>)}

            <button
                type="submit"
                className="btn btn-primary speakers-submit-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending…' : 'Submit proposal'}
            </button>
        </form>
    </section>);
}

function Speakers() {
    return (<div className="speakers-page">
        <div className="page-header">
            <h1>Conference Speakers</h1>
            <p>Share your expertise with Ireland's student tech community at SISTEM 2026.</p>
        </div>

        <div className="container speakers-layout">
            <SpeakerProposalForm/>
        </div>
    </div>);
}

export default Speakers;
