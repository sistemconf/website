import {useState} from 'react';

/*
 * A simple A/B Color tester I made to quickly switch between color variants during development.
 * Likely won't exist in actual deployment.
 */
const COLOR_VARIANTS = [
    {id: 'green-deep', label: 'Deep Green', primary: '#166534', dark: '#14532d'}, {
        id: 'teal-ink', label: 'Teal Ink', primary: '#0f766e', dark: '#115e59'
    }, {id: 'orange-deep', label: 'Deep Orange', primary: '#c2410c', dark: '#9a3412'}, {
        id: 'near-black', label: 'Near Black', primary: '#111827', dark: '#020617'
    }, {id: 'blue-ink', label: 'Blue Ink', primary: '#1e40af', dark: '#1e3a8a'}, {
        id: 'light-green', label: 'Light Green', primary: '#22c55e', dark: '#16a34a'
    }, {id: 'blue-sky', label: 'Sky Blue', primary: '#0ea5e9', dark: '#0369a1'}, {
        id: 'blue-soft', label: 'Soft Blue', primary: '#38bdf8', dark: '#0284c7'
    }, {id: 'blue-slate', label: 'Slate Blue', primary: '#2563eb', dark: '#1d4ed8'}, {
        id: 'blue-midnight', label: 'Midnight Blue', primary: '#0f172a', dark: '#020617'
    }, {id: 'emerald', label: 'Emerald', primary: '#059669', dark: '#047857'}, {
        id: 'forest', label: 'Forest', primary: '#14532d', dark: '#052e16'
    }, {id: 'teal-bright', label: 'Bright Teal', primary: '#14b8a6', dark: '#0f766e'}, {
        id: 'cyan-deep', label: 'Deep Cyan', primary: '#0891b2', dark: '#0e7490'
    }, {id: 'indigo', label: 'Indigo', primary: '#4f46e5', dark: '#3730a3'}, {
        id: 'blue-royal', label: 'Royal Blue', primary: '#1d4ed8', dark: '#1e3a8a'
    }, {id: 'violet', label: 'Violet', primary: '#7c3aed', dark: '#5b21b6'}, {
        id: 'purple-deep', label: 'Deep Purple', primary: '#6d28d9', dark: '#5b21b6'
    }, {id: 'red-deep', label: 'Deep Red', primary: '#b91c1c', dark: '#7f1d1d'}, {
        id: 'rose', label: 'Rose', primary: '#e11d48', dark: '#9f1239'
    }, {id: 'magenta', label: 'Magenta', primary: '#db2777', dark: '#9d174d'}, {
        id: 'amber', label: 'Amber', primary: '#f59e0b', dark: '#b45309'
    }, {
        id: 'burnt-orange', label: 'Burnt Orange', primary: '#ea580c', dark: '#c2410c'
    }, {id: 'gold', label: 'Gold', primary: '#eab308', dark: '#a16207'}, {
        id: 'slate', label: 'Slate', primary: '#334155', dark: '#1f2937'
    }, {
        id: 'stone', label: 'Stone', primary: '#4b5563', dark: '#374151'
    }, {id: 'warm-gray', label: 'Warm Gray', primary: '#6b7280', dark: '#4b5563'}, {
        id: 'turquoise', label: 'Turquoise', primary: '#06b6d4', dark: '#0e7490'
    }, {
        id: 'lime', label: 'Lime', primary: '#84cc16', dark: '#4d7c0f'
    }, {id: 'fuchsia', label: 'Fuchsia', primary: '#c026d3', dark: '#86198f'},];

function applyColorScheme(scheme) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', scheme.primary);
    root.style.setProperty('--primary-dark', scheme.dark);
}

function ColorTester() {
    const [index, setIndex] = useState(0);

    const current = COLOR_VARIANTS[index];

    const handleCycle = () => {
        const nextIndex = (index + 1) % COLOR_VARIANTS.length;
        setIndex(nextIndex);
        applyColorScheme(COLOR_VARIANTS[nextIndex]);
    };

    // Ensure the initial scheme matches CSS defaults on first render
    // without forcing it if user has already interacted.
    if (typeof document !== 'undefined') {
        applyColorScheme(current);
    }

    return (<button
        type="button"
        onClick={handleCycle}
        className="btn btn-secondary color-tester-button"
        aria-label={`Cycle primary color variant (current: ${current.label})`}
    >
        Color: {current.label}
    </button>);
}

export default ColorTester;

