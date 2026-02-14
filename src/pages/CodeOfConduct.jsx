import {useState, useEffect} from 'react';
import {markdownToHtml, extractHeadings} from '../utils/markdownLoader';
import cocMarkdown from '../assets/text/coc.md?raw';
import './CodeOfConduct.css';

function CodeOfConduct() {
    const [content, setContent] = useState('');
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Process imported markdown synchronously
        // I'm not an expert in synchronous stuff in React
        const html = markdownToHtml(cocMarkdown);
        const toc = extractHeadings(cocMarkdown).filter(h => h.level >= 2 && h.level <= 3);
        setContent(html);
        setHeadings(toc);
    }, []);

    const renderQuickLinks = () => {
        if (!headings.length) return null;

        return (<ul>
            {headings.map((heading, index) => (<li key={index} className={`toc-level-${heading.level}`}>
                <a href={`#${heading.id}`}>{heading.text}</a>
            </li>))}
        </ul>);
    };

    return (<div className="coc-page">
        <div className="page-header">
            <h1>Code of Conduct</h1>
            <p>Our commitment to a respectful and inclusive community</p>
        </div>

        <div className="container">
            <div className="coc-content">
                {!content ? (<p className="loading">Loading content...</p>) : (<div
                    className="markdown-content"
                    // I know it says "Dangerously" here don't worry it's safe
                    dangerouslySetInnerHTML={{__html: content}}
                />)}
            </div>

            <aside className="coc-sidebar">
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    {renderQuickLinks()}
                </div>

                <div className="report-section">
                    <h3>Need to Report Something?</h3>
                    <p>If you experience or witness unacceptable behavior, please reach out to our organizing
                        committee. You can also reach out to the Director or any other Committee member in-person.</p>
                    <a href="mailto:sistemconf@gmail.com" className="btn btn-primary">Report an Issue</a>
                </div>
            </aside>
        </div>
    </div>);
}

export default CodeOfConduct;
