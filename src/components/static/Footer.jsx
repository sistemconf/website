import "./Footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <h2>
                        <b>SISTEM<span>2023</span></b>
                    </h2>
                </div>

                <div className="footer-links">
                    <div className="footer-credit">
                        <p> 
                            Annual event hosted by Intersocs and volunteers like you! <br className="mobile-disabled"/> 
                            An unincorperated association of Computer Science Societies in Ireland <br/> <br className="mobile-obly"/> 
                            Website built by <a href="https://paradaux.io">Rían Errity</a>. <br className="mobile-disabled"/> <br className="mobile-obly"/>  Source available on <a href="https://github.com/sistemconf/website">GitHub</a> 
                        </p>
                    </div>

                    <div className="footer-page-links">
                        <a href="https://discord.gg/US8fhv8G7d">Discord</a>
                        <a href="https://www.instagram.com/sistem_conf/">Instagram</a>
                        <a href="https://twitter.com/sistem_conf">Twitter</a>
                        <a href="https://www.linkedin.com/company/sistemconf/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}