import React, { Component } from 'react'
import '../css/Services.css'
import shop_flowers from '../images/shop.jpg'
import wedding from '../images/bridal-stage.jpg'
import tabletop from '../images/tabletop.jpg'
import special from '../images/special.jpg'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="designs-banner">
                    <div className="designs-heading">
                        <h1>SERVICES</h1>
                        <p>
                            We have designed all kinds of flowers for different kinds of weddings and events and blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
                        </p>
                    </div>
                    <img src={shop_flowers} />
                </div>
                <div className="design-sections">
                    <div className="wedding-container">
                        <img src={wedding} />
                        <div className="description">
                            <h2>
                                Make your wedding very special and memorable with an amazing decorative floral design.
                        </h2>
                        </div>
                    </div>
                    <div className="tabletop-container">
                        <img src={tabletop} />
                        <div className="description">
                            <h2>
                                Decorating your party or event with a nice centerpiece design will make it more elegant.
                        </h2>
                        </div>
                    </div>
                    <div className="special-design-container">
                        <img src={special} />
                        <div className="description">
                            <h2>
                                Have a special design in mind? Contact me for more information.
                        </h2>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
