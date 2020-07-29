import React, { Component } from 'react'
import '../css/Home.css'
import sample_flower1 from '../images/sample_flower1.jpg'
import sample_flower2 from '../images/sample_flower2.jpg'
import sample_flower3 from '../images/sample_flower3.jpg'
import flower1 from '../images/flower1.jpeg'
import flower2 from '../images/flower2.jpeg'
import flower3 from '../images/flower3.jpeg'
import flower4 from '../images/flower4.jpeg'
import flower5 from '../images/flower5.jpeg'
import flower6 from '../images/flower6.jpeg'
import flower7 from '../images/flower7.png'
import flower8 from '../images/flower8.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Carousel, Button, Modal, Card, CardDeck } from 'react-bootstrap'


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchEngine: false
        }

        this.searchEnabler = this.searchEnabler.bind(this)
        this.searchDisable = this.searchDisable.bind(this)
    }

    searchEnabler() {
        this.setState({
            searchEngine: true
        })
    }

    searchDisable() {
        this.setState({
            searchEngine: false
        })
    }

    render() {
        return (
            <div className="component-body">

                <Carousel className="carousel-section">
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={sample_flower1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={sample_flower2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={sample_flower3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="products-heading">
                    Best Sellers
                </div>

                <CardDeck className="product-grid">
                    <Card>
                        <Card.Img variant="top" src={flower1} />
                        <Card.Body>
                            <Card.Title>$29.99</Card.Title>
                            <Card.Text>
                                Buy Now
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={flower2} />
                        <Card.Body>
                            <Card.Title>$29.99</Card.Title>
                            <Card.Text>
                                Buy Now
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={flower3} />
                        <Card.Body>
                            <Card.Title>$29.99</Card.Title>
                            <Card.Text>
                                Buy Now
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={flower4} />
                        <Card.Body>
                            <Card.Title>$29.99</Card.Title>
                            <Card.Text>
                                Buy Now
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </div>
        )
    }
}
