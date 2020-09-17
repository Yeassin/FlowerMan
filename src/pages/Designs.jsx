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
import designs_flowers from '../images/designs.jpg'

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
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/2b/9b/e0/2b9be0e8c3dd2595429f67243ec9dd1d.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/33/cf/cf/33cfcf91bf25268f54ea2678def91346.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/2d/c8/c1/2dc8c167b1adb3702568653e6e9bec52.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/1a/7d/68/1a7d68e1002d39db5ad9ca85ba06e5d8.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/df/16/b6/df16b62143692a1e1ff0132477fd4493.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/0d/74/54/0d745426fb28fe6eb864259aa12e80cd.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/0f/5d/de/0f5dded1358e2d10e70a68a6a578f4dc.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/92/67/23/92672375995a14a2b0a7c58454207275.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/db/72/ba/db72bae3386526b4a589427fcbedf991.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/70/05/2f/70052fc67f0b6056fe161c2585cbce49.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/59/5e/cd/595ecdfcf26137dccb148fe9835aeb31.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/b7/c7/95/b7c7951b8127f9606a34e1d058bfd653.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/1a/bf/9b/1abf9b6b62f6a6c8cc43970adfadaeab.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/04/22/78/042278393e209fa06e903a8b4c3cbd7e.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/f1/54/31/f154312c79a1585f45a7d8914ecd0baa.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/38/a7/07/38a707ba37c87654f1c396807dea6af5.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/ff/3b/67/ff3b67459ff1cfaeae943414980dce3b.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/e9/06/cf/e906cf83ccdc0d1f3f01fc30a3bb6794.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/0c/8e/15/0c8e15eab20afd2fa705244bc0a642b0.jpg" />
                </Card>
                <Card className="design-image">
                    <Card.Img src="https://i.pinimg.com/originals/c7/2b/4d/c72b4d2e0ebce6957e1bb5a9d357bab1.jpg" />
                </Card>
            </CardColumns>

        }
        if (this.state.category === "events") {
            cat = <div>
                <CardColumns className="event-container">
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/5f/c2/ea/5fc2ea436ac9223739a855743af71e23.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/ad/54/fc/ad54fcf11d131502d5d0438f9d84e15b.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/e6/22/7c/e6227c07a6469298b1a421b0cd47778a.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/2d/a2/4e/2da24e8929274d63ae4ff224c24ad5e9.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/a4/c1/71/a4c171866dec94da139aa938165ed1ab.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/e2/49/44/e2494425a0bbe3abd70fae56381fff50.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/4b/41/01/4b41017a0e46bd1834797f8d0b5d02c1.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/1a/71/ee/1a71ee62d1e2d34afbac149f32fc7404.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/fe/e5/eb/fee5eb1a1d0faf6cdcfeb7d5592c1068.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/9d/9a/e1/9d9ae1e3a9322f54ca395c168eb77540.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/5c/ac/7d/5cac7d4870bf0f78beab5ec44466a404.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/75/7f/5b/757f5b5ac83d79103ff59366f9c02d5a.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/dd/06/14/dd061467db64a78e600d70aa891815ee.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/d9/a9/ee/d9a9eec24a0252d1c2c4b8c6a826cce0.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/47/2c/54/472c546b4bff997aa7c4cd0867a49f41.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/10/2b/ad/102bad19a3dd2cd817870eb7969f797f.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/0f/c5/03/0fc503bee608f8ebab701f9ea15db882.jpg" />
                    </Card>
                    <Card className="design-image">
                        <Card.Img src="https://i.pinimg.com/originals/7c/cc/46/7ccc46e5c6c89ebbe9f3615ea8affe16.jpg" />
                    </Card>
                </CardColumns>
            </div>
        }
        return (
            <div>
                <div className="designs-banner">
                    <div className="designs-heading">
                        <h1>CREATIONS</h1>
                    </div>
                    <img src={designs_flowers} />
                </div>
                {/* <div className="heading">
                    <h1>Previous Works</h1>
                </div> */}
                <CardDeck className="categories">
                    <Card className="category-card" onClick={this.showDesigns}>
                        <Card.Img src={flowers2} />
                        <Card.ImgOverlay>DESIGNS</Card.ImgOverlay>
                        <div className="overlay-bg"></div>
                    </Card>
                    <Card className="category-card" onClick={this.showEvents}>
                        <Card.Img src={flowers1} />
                        <Card.ImgOverlay>WEDDINGS/EVENTS</Card.ImgOverlay>
                        <div className="overlay-bg"></div>
                    </Card>
                </CardDeck>

                {cat}
            </div>
        )
    }
}
