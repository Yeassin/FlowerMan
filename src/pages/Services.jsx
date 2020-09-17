import React, { Component } from 'react'
import '../css/Services.css'
import services_flowers from '../images/services.jpg'
import wedding from '../images/bridal-stage.jpg'
import tabletop from '../images/tabletop.jpg'
import special from '../images/special.jpg'
import { Button } from 'react-bootstrap'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="services-banner">
                    <div className="services-heading">
                        <h1>SERVICES</h1>
                    </div>
                    <img src={services_flowers} />
                </div>
                <div className="design-sections">
                    <div className="wedding-container">
                        <img src={wedding} />
                        <div className="description">
                            <h1>Wedding Designs</h1>
                            <p>
                                Make your wedding very special and memorable with an amazing decorative floral design.
                            </p>
                            <Button variant="outline-success" href="/FlowerMan/designs">View My Previous Work</Button>
                        </div>
                    </div>
                    <div className="tabletop-container">
                        <img src={tabletop} />
                        <div className="description">
                            <h1>Tabletop Decorations</h1>
                            <p>
                                Decorating your party or event with a nice centerpiece design will make it more elegant.
                            </p>
                            <Button variant="outline-danger" href="/FlowerMan/designs">View My Previous Work</Button>
                        </div>
                    </div>
                    <div className="special-design-container">
                        <img src={special} />
                        <div className="description">
                            <h1>Special Designs</h1>
                            <p>
                                Have a special design in mind? Contact me for more information.
                            </p>
                            <Button variant="outline-secondary" href="/FlowerMan/contact">Contact Me</Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
