import React, { Component } from 'react'
import logo from '../icons/Logo.png'
import search from '../icons/search.png'
import user from '../icons/user.png'
import cart from '../icons/shopping-cart.png'
import searchbutton from '../icons/searchbutton.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Carousel, Button, Modal, Card, CardDeck } from 'react-bootstrap'
import '../css/Header.css'

export default class HeaderComp extends Component {

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
            <div>
                <div className="top-container">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="top-items">
                        <div className="search" onClick={this.searchEnabler}>
                            <img src={search} />
                                SEARCH
                        </div>

                        <Modal show={this.state.searchEngine} onHide={this.searchDisable} className="searchBar">
                            <Modal.Header closeButton>
                                <Form className="search-field">
                                    <img src={searchbutton} />
                                    <FormControl placeholder="Search"/>

                                </Form>
                            </Modal.Header>
                        </Modal>

                        <div className="account">
                            <img src={user} />
                            ACCOUNT
                        </div>
                        <div className="cart">
                            <img src={cart} />
                            CART
                        </div>
                    </div>

                </div>
                <Navbar expand="lg" className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#">OCCASSIONS</Nav.Link>
                            <Nav.Link href="#">SALE</Nav.Link>
                            <Nav.Link href="#">FLOWERS</Nav.Link>
                            <Nav.Link href="#">PLANTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
