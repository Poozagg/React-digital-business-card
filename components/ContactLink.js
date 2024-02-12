import React from "react"

export default function ContactLink () {
    return (
        <div className="contact-link">
            <button className="link">
                <img className="social-link" src="./images/linkedin.png"/>
            </button>
            <button className="link">
                <img className="social-link" src="./images/email.png"/>
            </button>
        </div>
    )
}