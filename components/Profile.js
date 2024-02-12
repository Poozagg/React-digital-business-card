import React from "react"
import ContactLink from "./ContactLink"

export default function Profile () {
    return (
        <div className="profile">
            <img className="dp-photo" src="./images/pooja.png" />
            <h2> Pooja Gurung </h2>
            <h4>Full Stack Developer </h4>
            <ContactLink />
        </div>
    )
}