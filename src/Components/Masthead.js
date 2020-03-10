import React from 'react';
import './Masthead.css';
import Title from "../assets/Title.png"
import formURL from "../assets/sponsorship-form.pdf"
const Masthead = () => {
    let eventbriteURL = "https://www.eventbrite.com/e/arbor-day-bash-celebrating-the-2020-canopy-awards-tickets-90219395641?_eboga=561584328.1583778672&_ga=2.212130205.805995504.1583778672-561584328.1583778672"
    return (
        <div className="Masthead">
            <img className="Masthead__title" src={Title}></img>
            <div className="Masthead__button-group">
                <a className="Masthead__button" href={eventbriteURL}>Tickets</a>
                <a className="Masthead__button" href={formURL} target="_blank">Sponsor</a>
            </div>
        </div>
    )
}

export default Masthead;