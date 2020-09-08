import React, { Component } from 'react'
import { Nav, Dropdown, NavDropdown, Modal } from 'react-bootstrap'
import logo from '../icons/Logo.png'
import hamburger from '../icons/menu.png'
import '../css/Header.css'
import { Link } from 'react-router-dom'
import pinterest from '../icons/pinterest.png'
import insta from '../icons/instagram.png'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            services: false,
            mobile_nav: false
        }

        this.toggleServices = this.toggleServices.bind(this)
        this.disableServices = this.disableServices.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.disableMenu = this.disableMenu.bind(this)
    }

    toggleServices(e) {
        this.setState({
            services: true,
        })
    }

    disableServices(e) {
        this.setState({
            services: false,
        })
    }

    toggleMenu() {
        this.setState({
            mobile_nav: true
        })
    }

    disableMenu() {
        this.setState({
            mobile_nav: false
        })
    }

    render() {
        let dropdown
        const services_activate = {
            display: 'flex'
        }
        const services_remove = {
            display: 'none'
        }
        if (this.state.services === true) {
            dropdown = <div id="services-dropdown" style={services_activate}>
                <a href="/services">DESIGNS</a>
                <a href="/services">MAKE YOUR OWN</a>
            </div>
        }
        else if (this.state.services === false) {
            dropdown = <div id="services-dropdown" style={services_remove}></div>
        }

        if (window.innerWidth >= 768 && this.state.mobile_nav) {
            this.setState({
                mobile_nav: false
            })
        }

        return (
            <header>
                <Nav className="nav-container" onMouseLeave={this.disableServices}>
                    {/* <Nav.Item>
                        <Nav.Link href="/shop" onMouseEnter={this.disableServices}>SHOP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services" onMouseEnter={this.toggleServices}>SERVICES</Nav.Link>
                        {dropdown}
                    </Nav.Item> */}
                    <Nav.Item className="non-mobile-nav-item">
                        <Nav.Link href="/FlowerMan/#/services" onMouseEnter={this.disableServices}>SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="non-mobile-nav-item">
                        <Nav.Link href="/FlowerMan/#/designs" onMouseEnter={this.disableServices}>CREATIONS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="home-link">
                        <Nav.Link href="/FlowerMan" onMouseEnter={this.disableServices}>
                            <img src={logo} className="home-logo" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="non-mobile-nav-item">
                        <Nav.Link href="/FlowerMan/#/about" onMouseEnter={this.disableServices}>ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="non-mobile-nav-item">
                        <Nav.Link href="/FlowerMan/#/contact" onMouseEnter={this.disableServices}>CONTACT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="menu-link" onClick={this.toggleMenu}>
                        <div id="menu-container">
                            <img src={hamburger} className="hamburger-menu" />
                        </div>
                    </Nav.Item>
                </Nav>

                <Modal animation={true} show={this.state.mobile_nav} onHide={this.disableMenu} id="side-menu">
                    <Modal.Body>
                        {/* <div className="mobile-link">
                            <a href="/FlowerMan/#/services">SERVICES</a>
                        </div>
                        <div className="mobile-link">
                            <a href="/FlowerMan/#/designs">CREATIONS</a>
                        </div>
                        <div className="mobile-link">
                            <a href="/FlowerMan/#/about">ABOUT</a>
                        </div>
                        <div className="mobile-link">
                            <a href="/FlowerMan/#/contact">CONTACT</a>
                        </div> */}
                        <Nav id="mobile-nav" onMouseLeave={this.disableServices}>
                            <Nav.Item className="mobile-nav-item">
                                <Nav.Link href="/FlowerMan/#/services">SERVICES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mobile-nav-item">
                                <Nav.Link href="/FlowerMan/#/designs">CREATIONS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mobile-nav-item">
                                <Nav.Link href="/FlowerMan/#/about">ABOUT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mobile-nav-item">
                                <Nav.Link href="/FlowerMan/#/contact">CONTACT</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="mobile-social-container">
                            <a href="/#">
                                <img src={pinterest} />
                            </a>
                            <a href="/#">
                                <img src={insta} />
                            </a>
                        </div>
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
}