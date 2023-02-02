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
                    <p> Annual event hosted by Intersocs and volunteers like you! <br/>An unincorperated association of Computer Science Societies in Ireland  </p>
                </div>

                <div className="footer-page-links">
                    <a href="#ß">Discord</a>
                    <a href="https://www.instagram.com/sistem_conf/">Instagram</a>
                    <a href="https://twitter.com/sistem_conf">Twitter</a>
                    <a href="https://www.linkedin.com/company/sistemconf/">LinkedIn</a>
                </div>

                <div className="footer-socials">
                    <a href="https://instagram.com/tcdtrinder">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/tcdtrinder">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}