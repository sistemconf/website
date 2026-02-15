import {marked} from 'marked';

function slugify(text) {
    if (typeof text !== 'string') {
        text = String(text ?? '');
    }
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

// Convert markdown to HTML and add ids to headings for linking
export function markdownToHtml(markdown) {
    const source = typeof markdown === 'string' ? markdown : String(markdown ?? '');
    const html = marked.parse(source);

    // Add IDs to headings so we can link to them in the sidebar
    return html.replace(/<h([1-6])([^>]*)>(.*?)<\/h\1>/gims, (match, level, attrs, inner) => {
        let newAttrs = attrs.replace(/\sid="[^"]*"/gi, '');
        const textContent = inner.replace(/<[^>]*>/g, '');
        const id = slugify(textContent);
        return `<h${level} id="${id}"${newAttrs}>${inner}</h${level}>`;
    });
}

// Parse Markdown headings into a table of contents based on the raw markdown
export function extractHeadings(markdown) {
    const source = typeof markdown === 'string' ? markdown : String(markdown ?? '');
    const lines = source.split('\n');
    const headings = [];

    for (const line of lines) {
        const match = /^(#{1,6})\s+(.*)$/.exec(line.trim());
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = slugify(text);

            headings.push({level, text, id});
        }
    }

    return headings;
}
