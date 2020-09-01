import React, { Component } from 'react'
import { Card, CardColumns, CardDeck } from 'react-bootstrap'
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
            cat = <CardColumns className="design-container">
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/2b/9b/e0/2b9be0e8c3dd2595429f67243ec9dd1d.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/33/cf/cf/33cfcf91bf25268f54ea2678def91346.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/2d/c8/c1/2dc8c167b1adb3702568653e6e9bec52.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/1a/7d/68/1a7d68e1002d39db5ad9ca85ba06e5d8.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/df/16/b6/df16b62143692a1e1ff0132477fd4493.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/0d/74/54/0d745426fb28fe6eb864259aa12e80cd.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/0f/5d/de/0f5dded1358e2d10e70a68a6a578f4dc.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/92/67/23/92672375995a14a2b0a7c58454207275.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/db/72/ba/db72bae3386526b4a589427fcbedf991.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/70/05/2f/70052fc67f0b6056fe161c2585cbce49.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/59/5e/cd/595ecdfcf26137dccb148fe9835aeb31.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/b7/c7/95/b7c7951b8127f9606a34e1d058bfd653.jpg" />
                </Card>
                <Card>
                    <Card.Img src="https://i.pinimg.com/originals/1a/bf/9b/1abf9b6b62f6a6c8cc43970adfadaeab.jpg" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
                <Card>
                    <Card.Img src="" />
                </Card>
            </CardColumns>

        }
        if (this.state.category === "events") {
            cat = <div>
                <CardColumns className="event-container">
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/5f/c2/ea/5fc2ea436ac9223739a855743af71e23.jpg" />
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/e6/22/7c/e6227c07a6469298b1a421b0cd47778a.jpg" />
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/a4/c1/71/a4c171866dec94da139aa938165ed1ab.jpg" />
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/1a/71/ee/1a71ee62d1e2d34afbac149f32fc7404.jpg" />
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/5c/ac/7d/5cac7d4870bf0f78beab5ec44466a404.jpg" />
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/75/7f/5b/757f5b5ac83d79103ff59366f9c02d5a.jpg"/>
                    </Card>
                    <Card>
                        <Card.Img src="https://i.pinimg.com/originals/dd/06/14/dd061467db64a78e600d70aa891815ee.jpg"/>
                    </Card>
                </CardColumns>
            </div>
        }
        return (
            <div>
                <div className="designs-banner">
                    <div className="designs-heading">
                        <h1>CREATIONS</h1>
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
