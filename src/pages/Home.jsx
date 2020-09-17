import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import '../css/Home.css'
import flowers1 from '../images/flower_carousel_1.jpg'
import flowers2 from '../images/flower_carousel_2.jpg'
import flowers3 from '../images/flower_carousel_3.jpg'
import intro from '../videos/intro.mov'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <div className="carousel-container">
                    <Carousel fade="true" className="w-75">
                        <Carousel.Item >
                            <img src={flowers1} className="d-block w-100" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={flowers2} className="d-block w-100" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={flowers3} className="d-block w-100" alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div> */}
                <div className="cover"></div>
                <div className="intro-container">
                    <div className="headline">
                        <h1>Floral design starts here.</h1>
                        <h3><a href="/FlowerMan/designs">Learn More</a></h3>
                    </div>
                    <video autoPlay loop muted>
                        <source src={intro} type="video/mp4" />
                    </video>
                </div>

            </div>
        )
    }
}
