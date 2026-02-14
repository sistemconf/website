import {useState, useEffect} from 'react';
import {markdownToHtml} from '../utils/markdownLoader';
import faqMarkdown from '../assets/text/faq.md?raw';
import './FAQ.css';

function FAQ() {
    const [content, setContent] = useState('');

    useEffect(() => {
        const html = markdownToHtml(faqMarkdown);
        setContent(html);
    }, []);

    return (<div className="faq-page">
        <div className="page-header">
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about SISTEM 2026</p>
        </div>

        <div className="container">
            <div className="faq-content">
                {!content ? (<p className="loading">Loading content...</p>) : (<div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{__html: content}}
                />)}
            </div>

            <aside className="faq-sidebar">
                <div className="contact-section">
                    <h3>Can't Find Your Answer?</h3>
                    <p>If you have additional questions, please don't hesitate to reach out.</p>
                    <a href="mailto:sistemconf@gmail.com" className="btn btn-primary">Contact Us</a>
                </div>

                {/*<div className="quick-stats">*/}
                {/*    <h3>Conference Stats</h3>*/}
                {/*    <ul>*/}
                {/*        <li><strong>1</strong> Day</li>*/}
                {/*        <li><strong>5</strong> Speakers</li>*/}
                {/*        <li><strong>6</strong> Hours</li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </aside>
        </div>
    </div>);
}

export default FAQ;
