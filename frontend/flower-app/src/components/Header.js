import React, { Component } from 'react'
import { Nav, Dropdown, NavDropdown } from 'react-bootstrap'
import logo from '../icons/Logo.png'
import '../css/Header.css'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            services: false,
        }

        this.toggleServices = this.toggleServices.bind(this)
        this.disableServices = this.disableServices.bind(this)
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
                    <Nav.Item>
                        <Nav.Link href="/services" onMouseEnter={this.disableServices}>SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/designs" onMouseEnter={this.disableServices}>DESIGNS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/" onMouseEnter={this.disableServices}>
                            <img src={logo} className="home-logo" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" onMouseEnter={this.disableServices}>ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" onMouseEnter={this.disableServices}>CONTACT</Nav.Link>
                    </Nav.Item>

                </Nav>
            </header>
        )
    }
}
