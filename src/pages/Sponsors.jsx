import {useMemo, useState, useEffect} from 'react';
import './Sponsors.css';
import {sponsorsData} from '../data/sponsors';
import {isValidEmail, trimmed} from '../utils/formValidation';

const MAX_PLATINUM_SLOTS = 3;

const SPONSOR_PACKAGES = [{
    id: 'platinum',
    name: 'Platinum',
    price: '€1000',
    summary: 'Flagship tier with maximum visibility and first keynote slot.',
    recommended: false,
    benefits: ['Social media announcement', 'Logo on SISTEM-related social media', 'Logo & name on posters/signage', 'Company merchandise in event goodie bag', 'Volunteer uniforms featuring logo', 'Verbal recognition during the event', 'Pods/desks to showcase your company', '1st keynote at conference',],
}, {
    id: 'gold',
    name: 'Gold',
    price: '€700',
    summary: 'High-visibility package for strong presence throughout the event.',
    recommended: true,
    benefits: ['Social media announcement', 'Logo & name on posters/signage', 'Company merchandise in event goodie bag', 'Volunteer uniforms featuring logo', 'Verbal recognition during the event', 'Pods/desks to showcase your company',],
}, {
    id: 'silver',
    name: 'Silver',
    price: '€500',
    summary: 'Great option for sponsors looking for a solid conference presence.',
    recommended: false,
    benefits: ['Social media announcement', 'Logo & name on posters/signage', 'Verbal recognition during the event', 'Pods/desks to showcase your company',],
}, {
    id: 'community',
    name: 'Community',
    price: '< €500',
    summary: 'Support the community and be recognised during the conference.',
    recommended: false,
    benefits: ['Social media announcement', 'Logo & name on posters/signage', 'Verbal recognition during event sponsorship section',],
},];

function SponsorPackagesSidebar({packages, selectedPackageId, onSelectPackage}) {
    const selectedPackage = useMemo(() => packages.find((p) => p.id === selectedPackageId) || packages[0], [packages, selectedPackageId],);

    const keyBenefits = [{
        id: 'social',
        label: 'Social media announcement',
        match: (b) => b.toLowerCase().includes('social media announcement')
    }, {
        id: 'social-logo',
        label: 'Logo on SISTEM social media',
        match: (b) => b.toLowerCase().includes('sistem-related social media')
    }, {
        id: 'posters',
        label: 'Logo & name on posters/signage',
        match: (b) => b.toLowerCase().includes('posters/signage')
    }, {
        id: 'goodie-bag', label: 'Goodie bag merchandise', match: (b) => b.toLowerCase().includes('goodie bag')
    }, {
        id: 'volunteers', label: 'Volunteer uniforms', match: (b) => b.toLowerCase().includes('volunteer uniforms')
    }, {id: 'pods', label: 'Pods/desks at event', match: (b) => b.toLowerCase().includes('pods/desks')}, {
        id: 'keynote', label: 'Keynote slot', match: (b) => b.toLowerCase().includes('keynote')
    }, {id: 'verbal', label: 'Verbal recognition', match: (b) => b.toLowerCase().includes('verbal recognition')},];

    const hasBenefit = (pkg, matcher) => pkg.benefits.some((b) => matcher(b));

    return (<aside className="sponsors-sidebar" aria-label="Sponsorship packages">
        <div className="sponsors-sidebar-header">
            <h2>Sponsorship Packages</h2>
            <p>
                Explore our packages and select the option that best matches your organisation. You can always
                request adjustments in your enquiry.
            </p>
        </div>

        {/* At-a-glance comparison grid */}
        <div className="sponsor-at-a-glance" aria-label="At-a-glance package comparison">
            <div className="sponsor-at-a-glance-header">At a glance</div>
            <div className="sponsor-at-a-glance-scroll">
                <div className="sponsor-at-a-glance-grid" role="table">
                    <div className="sponsor-at-a-glance-row sponsor-at-a-glance-row--head" role="row">
                        <div className="sponsor-at-a-glance-cell sponsor-at-a-glance-cell--label" role="columnheader">
                            Privilege
                        </div>
                        {packages.map((pkg) => (<div
                            key={pkg.id}
                            className="sponsor-at-a-glance-cell sponsor-at-a-glance-cell--package"
                            role="columnheader"
                        >
                            {pkg.name}
                        </div>))}
                    </div>
                    {keyBenefits.map((benefit) => (<div key={benefit.id} className="sponsor-at-a-glance-row" role="row">
                        <div
                            className="sponsor-at-a-glance-cell sponsor-at-a-glance-cell--label"
                            role="rowheader"
                        >
                            {benefit.label}
                        </div>
                        {packages.map((pkg) => (<div
                            key={pkg.id}
                            className="sponsor-at-a-glance-cell sponsor-at-a-glance-cell--package"
                            role="cell"
                        >
                            {hasBenefit(pkg, benefit.match) ? <span aria-label="Included">✓</span> : ''}
                        </div>))}
                    </div>))}
                </div>
            </div>
        </div>

        <ul className="sponsor-package-list" role="list">
            {packages.map((pkg) => {
                const isSelected = pkg.id === selectedPackage.id;
                return (<li key={pkg.id} className="sponsor-package-list-item" role="listitem">
                    <button
                        type="button"
                        className={`sponsor-package-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => onSelectPackage(pkg.id)}
                        aria-pressed={isSelected}
                    >
                        <div className="sponsor-package-item-header">
                            <span className="sponsor-package-name">{pkg.name}</span>
                            <span className="sponsor-package-price">{pkg.price}</span>
                        </div>
                        <p className="sponsor-package-summary">{pkg.summary}</p>
                        {pkg.recommended && (<span className="sponsor-package-badge" aria-label="Recommended package">
                                        Recommended
                                    </span>)}
                    </button>
                </li>);
            })}
        </ul>

        <div className="sponsor-package-details" aria-live="polite">
            <h3>{selectedPackage.name} package details</h3>
            <p className="sponsor-package-details-price">{selectedPackage.price}</p>
            <ul className="sponsor-package-benefits">
                {selectedPackage.benefits.map((benefit) => (<li key={benefit}>{benefit}</li>))}
            </ul>
        </div>
    </aside>);
}

function SponsorshipEnquiryForm({packages, selectedPackageId}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [desiredPackage, setDesiredPackage] = useState(selectedPackageId || '');
    const [modifications, setModifications] = useState('');
    const [extraComments, setExtraComments] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const openPlatinumSlots = useMemo(() => {
        const platinumCount = sponsorsData.filter((s) => s.stage === 'platinum').length;
        const remaining = MAX_PLATINUM_SLOTS - platinumCount;
        return remaining > 0 ? remaining : 0;
    }, []);

    useEffect(() => {
        setDesiredPackage((current) => (current ? current : selectedPackageId || ''));
    }, [selectedPackageId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!trimmed(email)) {
            newErrors.email = 'Please enter your email address.';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!trimmed(name)) {
            newErrors.name = 'Please enter your name.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            const firstErrorFieldId = newErrors.email ? 'sponsor-email' : newErrors.name ? 'sponsor-name' : null;
            if (firstErrorFieldId) {
                const el = document.getElementById(firstErrorFieldId);
                if (el) {
                    el.focus();
                }
            }
            return;
        }

        // Honeypot: if this hidden field is filled, treat it as spam and silently abort
        if (trimmed(honeypot)) {
            return;
        }

        const selected = packages.find((p) => p.id === desiredPackage);
        const packageName = selected ? selected.name : desiredPackage || 'Not specified';

        const organisationValue = trimmed(organisation) || 'N/A';
        const modificationsValue = trimmed(modifications) || 'None specified';
        const commentsValue = trimmed(extraComments) || 'None';

        const subjectText = `SISTEM 2026 Sponsorship Enquiry - ${packageName} - ${organisationValue}`;

        const payload = {
            email: trimmed(email),
            name: trimmed(name),
            organisation: organisationValue,
            desiredPackage: packageName,
            modifications: modificationsValue,
            comments: commentsValue,
            subject: subjectText,
        };

        try {
            setIsSubmitting(true);
            setSubmitError(null);
            setSubmitSuccess(false);

            const response = await fetch('https://formspree.io/f/mlgwblaz', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json', Accept: 'application/json',
                }, body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setSubmitError('We could not send your enquiry at this time. Please try again later.');
                return;
            }

            setSubmitSuccess(true);
            setEmail('');
            setName('');
            setOrganisation('');
            setDesiredPackage(selectedPackageId || '');
            setModifications('');
            setExtraComments('');
            setHoneypot('');
        } catch {
            setSubmitError('Something went wrong while sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<section className="sponsors-main" aria-label="Sponsorship enquiry form">
        <h2>Express your interest</h2>
        <p className="sponsors-intro-text">
            Interested in sponsoring SISTEM 2026? Fill in the form below and we will follow up with you by email.
        </p>

        <form className="sponsors-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
                <label htmlFor="sponsor-email">
                    Email <span className="required-indicator">*</span>
                </label>
                <input
                    id="sponsor-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'sponsor-email-error' : undefined}
                />
                {errors.email && (<p id="sponsor-email-error" className="field-error">
                    {errors.email}
                </p>)}
            </div>

            <div className="form-field">
                <label htmlFor="sponsor-name">
                    Name <span className="required-indicator">*</span>
                </label>
                <input
                    id="sponsor-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'sponsor-name-error' : undefined}
                />
                {errors.name && (<p id="sponsor-name-error" className="field-error">
                    {errors.name}
                </p>)}
            </div>

            <div className="form-field">
                <label htmlFor="sponsor-organisation">Organisation (optional)</label>
                <input
                    id="sponsor-organisation"
                    type="text"
                    placeholder="Your organisation name or N/A"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label htmlFor="sponsor-package">Desired package</label>
                <select
                    id="sponsor-package"
                    value={desiredPackage}
                    onChange={(e) => setDesiredPackage(e.target.value)}
                >
                    <option value="">Not sure yet</option>
                    {packages.map((pkg) => {
                        let label = `${pkg.name} (${pkg.price})`;
                        if (pkg.id === 'platinum') {
                            label += ` – ${openPlatinumSlots} slot${openPlatinumSlots === 1 ? '' : 's'} remaining`;
                        }
                        return (<option key={pkg.id} value={pkg.id}>
                            {label}
                        </option>);
                    })}
                </select>
                <p className="field-help">You can adjust this later – we will work with you to find the right
                    fit.</p>
            </div>

            <div className="form-field">
                <label htmlFor="sponsor-modifications">Package modifications or specific requests</label>
                <textarea
                    id="sponsor-modifications"
                    rows={3}
                    value={modifications}
                    onChange={(e) => setModifications(e.target.value)}
                    placeholder="Let us know if you have any adjustments in mind to the chosen package."
                />
            </div>

            <div className="form-field">
                <label htmlFor="sponsor-comments">Additional comments</label>
                <textarea
                    id="sponsor-comments"
                    rows={3}
                    value={extraComments}
                    onChange={(e) => setExtraComments(e.target.value)}
                    placeholder="Anything else you'd like to share?"
                />
            </div>

            {/* Honeypot field (hidden from users) */}
            <div className="form-field honeypot">
                <label htmlFor="sponsor-website">Website (leave this field blank)</label>
                <input
                    id="sponsor-website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                />
            </div>

            <p className="sponsors-form-note">
                We will send your enquiry directly to the SISTEM organisers. You should receive a confirmation or
                follow-up email shortly after submitting.
            </p>

            {submitSuccess && (<div className="sponsors-success" role="status">
                <h3>Enquiry sent</h3>
                <p>
                    Thank you for your interest in sponsoring SISTEM 2026. Your enquiry has been successfully sent
                    to our organising team.
                </p>
                <p>
                    Please keep an eye on your inbox (and spam folder, just in case) for a reply from
                    sistemconf@gmail.com.
                </p>
            </div>)}

            {submitError && (<p className="field-error" role="alert">
                {submitError}
            </p>)}

            <button
                type="submit"
                className="btn btn-primary sponsors-submit-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending…' : 'Send enquiry'}
            </button>
        </form>

        <div className="sponsors-direct-contact">
            <p>
                Prefer to contact us directly? Email us at{' '}
                <a href="mailto:sistemconf@gmail.com">sistemconf@gmail.com</a>.
            </p>
        </div>
    </section>);
}

function Sponsors() {
    const [selectedPackageId, setSelectedPackageId] = useState('platinum');

    return (<div className="sponsors-page">
        <div className="page-header">
            <h1>Sponsors</h1>
            <p>Partner with SISTEM 2026 and support a long-running Student-Run Tech Conference.</p>
        </div>

        <div className="container sponsors-layout">
            <SponsorshipEnquiryForm
                packages={SPONSOR_PACKAGES}
                selectedPackageId={selectedPackageId}
            />

            <SponsorPackagesSidebar
                packages={SPONSOR_PACKAGES}
                selectedPackageId={selectedPackageId}
                onSelectPackage={setSelectedPackageId}
            />
        </div>
    </div>);
}

export default Sponsors;

