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
                    <img src={profile} id="profile-pic"/>
                    <p id="about-description">
                        Mohammad Din is a floral designer who Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                

            </div>
        )
    }
}
