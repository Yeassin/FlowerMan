import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import '../css/Designs.css'
import engagements from '../images/engagements.jpg'
import flowers1 from '../images/gallery/flowers1.jpg'
import flowers2 from '../images/gallery/flowers2.jpg'
import design1 from '../images/gallery/designs/design1.jpg'
import design2 from '../images/gallery/designs/design2.jpg'
import design3 from '../images/gallery/designs/design3.jpg'
import event1 from '../images/gallery/events/event1.jpg'
import event2 from '../images/gallery/events/event2.jpg'
import event3 from '../images/gallery/events/event3.jpg'
import shop_flowers from '../images/shop.jpg'

export default class Designs extends Component {

    constructor() {
        super()
        this.state = {
            category: "none"
        }
        this.showDesigns = this.showDesigns.bind(this)
        this.showEvents = this.showEvents.bind(this)
    }

    showDesigns() {
        this.setState({
            category: "designs"
        })
    }

    showEvents() {
        this.setState({
            category: "events"
        })
    }

    render() {
        let cat;
        if (this.state.category === "designs") {
            cat = <CardDeck className="design-container">
                <Card>
                    <Card.Img src={design1} />
                </Card>
                <Card>
                    <Card.Img src={design2} />
                </Card>
                <Card>
                    <Card.Img src={design3} />
                </Card>
            </CardDeck>
        }
        if (this.state.category === "events") {
            cat = <CardDeck className="event-container">
                <Card>
                    <Card.Img src={event1} />
                </Card>
                <Card>
                    <Card.Img src={event2} />
                </Card>
                <Card>
                    <Card.Img src={event3} />
                </Card>
            </CardDeck>
        }
        return (
            <div>
                <div className="designs-banner">
                    <div className="designs-heading">
                        <h1>DESIGNS</h1>
                        <p>
                            Mohammad Din has created all kinds of different floral designs for different kinds of events and occasions. Here are some of his previous works.
                        </p>
                    </div>
                    <img src={shop_flowers} />
                </div>
                {/* <div className="heading">
                    <h1>Previous Works</h1>
                </div> */}
                <CardDeck className="categories">
                    <Card className="category-card" onClick={this.showDesigns}>
                        <Card.Img src={flowers1} />
                        <Card.ImgOverlay>DESIGNS</Card.ImgOverlay>
                        <div className="overlay-bg"></div>
                    </Card>
                    <Card className="category-card" onClick={this.showEvents}>
                        <Card.Img src={flowers2} />
                        <Card.ImgOverlay>WEDDINGS/EVENTS</Card.ImgOverlay>
                        <div className="overlay-bg"></div>
                    </Card>
                </CardDeck>

                {cat}
            </div>
        )
    }
}
