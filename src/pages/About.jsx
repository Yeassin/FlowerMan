import React, { Component } from 'react'
import '../css/About.css'
import profile from '../images/profile.jpg'



export default class About extends Component {
    
    render() {

        return (
            <div id="about-page">
                {/* <div className="heading">
                    <h1>ABOUT ME</h1>
                </div> */}
                <div className="about-container">
                    <img src={profile} id="profile-pic" />
                    <p id="about-description">
                        Mohammad Din is a floral designer based in NY. For over 30 years, he has designed floral decorations for many different weddings, parties, events, and other occasions. From tabletop designs to centerpieces, his creativity will ensure that no matter the occasion, your experience will be very elegant and memorable.
                    </p>
                </div>


            </div>
        )
    }
}
