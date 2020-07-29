import React, { Component } from 'react'
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import '../css/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-container">
                    <div className="links">
                        <a href="/about">ABOUT</a>
                        <a href="/delivery">DELIVERY</a>
                        <a href="/contact">CONTACT</a>
                    </div>
                    <div className="social-media">
                        <a href="#">
                            <img src={facebook} />
                        </a>
                        <a href="#">
                            <img src={twitter} />
                        </a>
                        <a href="#">
                            <img src={instagram} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
