import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import '../css/About.css'
import profile from '../images/profile.jpg'
import engagements from '../images/engagements.jpg'
import flowers1 from '../images/gallery/flowers1.jpg'
import flowers2 from '../images/gallery/flowers2.jpg'
import design1 from '../images/gallery/designs/design1.jpg'
import design2 from '../images/gallery/designs/design2.jpg'
import design3 from '../images/gallery/designs/design3.jpg'
import event1 from '../images/gallery/events/event1.jpg'
import event2 from '../images/gallery/events/event2.jpg'
import event3 from '../images/gallery/events/event3.jpg'


export default class About extends Component {

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
            <div id="about-page">
                {/* <div className="heading">
                    <h1>ABOUT ME</h1>
                </div> */}
                <div className="about-container">
                    <img src={profile} />
                    <p>
                        Mohammad Din is a floral designer who Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="heading">
                    <h1>Previous Works</h1>
                </div>
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
