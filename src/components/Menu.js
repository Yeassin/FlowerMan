import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export default class Menu extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Modal animation="true" >
                    <Nav className="mobile-nav" onMouseLeave={this.disableServices}>
                        {/* <Nav.Item>
                        <Nav.Link href="/shop" onMouseEnter={this.disableServices}>SHOP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services" onMouseEnter={this.toggleServices}>SERVICES</Nav.Link>
                        {dropdown}
                    </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href="/FlowerMan/#/services">SERVICES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/FlowerMan/#/designs">CREATIONS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/FlowerMan/#/about">ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/FlowerMan/#/contact">CONTACT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Modal>

            </div>
        )
    }
}
