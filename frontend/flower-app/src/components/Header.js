import React, { Component } from 'react'
import { Nav, Dropdown, NavDropdown } from 'react-bootstrap'
import logo from '../icons/Logo.png'
import '../css/Header.css'

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            services: false
        }

        this.toggleServices = this.toggleServices.bind(this)
        this.disableServices = this.disableServices.bind(this)
    }

    toggleServices(e) {
        this.setState({
            services: true
        })
    }

    disableServices(e) {
        this.setState({
            services: false
        })
    }
    
    render() {

        return (
            <header>
                <Nav className="nav-container">
                    <Nav.Item>
                        <Nav.Link href="/shop">SHOP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown" onMouseEnter={this.toggleServices} onMouseLeave={this.disableServices}>
                            <NavDropdown.Item>DESIGNS</NavDropdown.Item>
                            <NavDropdown.Item>MAKE YOUR OWN</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">
                            <img src={logo} className="home-logo" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav.Item>

                </Nav>
            </header>
        )
    }
}
