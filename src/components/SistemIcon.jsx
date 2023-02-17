import emailIcon from "../assets/icons/email.png"
import linkIcon from "../assets/icons/link.png"
import twitterIcon from "../assets/icons/twitter.png"
import linkedinIcon from "../assets/icons/linkedin.png"

import "./SistemIcon.scss"

export default function SistemIcon({type, href}) {
    let icon;

    switch (type) {
        case "linkedin": 
            icon = linkedinIcon;
            break;
        case "twitter":
            icon = twitterIcon;
            break;
        case "link":
            icon = linkIcon;
            break;
        case "email":
            icon = emailIcon;
            break;
        default: 
            console.error("Invalid icon.");
    }

    if (href) {
        return (
            <a href={href} className="sistem-icon">
                <img src={icon} className="sistem-icon"/>
            </a>
        )
    }

    return (
        <div className="sistem-icon">
            <img src={icon} className="sistem-icon"/>
        </div>
    )

}