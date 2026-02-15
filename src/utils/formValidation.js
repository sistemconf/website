export const trimmed = (value) => (typeof value === 'string' ? value.trim() : '');

export const isValidEmail = (value) => {
    const t = trimmed(value);
    if (!t) return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(t);
};

