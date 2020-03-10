import React from 'react';
import './Masthead.css';
import Title from "../assets/Title.png"

const Masthead = () => {
    let eventbriteURL = "https://www.eventbrite.com/e/arbor-day-bash-celebrating-the-2020-canopy-awards-tickets-90219395641?_eboga=561584328.1583778672&_ga=2.212130205.805995504.1583778672-561584328.1583778672"
    return (
        <div className="Masthead">
            <img className="Masthead__title" src={Title}></img>
            <a className="Masthead__button" href={eventbriteURL}>Tickets</a>
        </div>
    )
}

export default Masthead;