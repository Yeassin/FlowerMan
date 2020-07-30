import React, { Component } from 'react'
import logo from '../icons/Logo.png'
import search from '../icons/search.png'
import user from '../icons/user.png'
import cart from '../icons/shopping-cart.png'
import searchbutton from '../icons/searchbutton.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Carousel, Button, Modal, Card, CardDeck, Dropdown, Collapse } from 'react-bootstrap'
import '../css/Header.css'

export default class HeaderComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchEngine: false,
            accountPopup: false,
            cartPopup: false,
            occasions: false
        }

        this.searchEnabler = this.searchEnabler.bind(this)
        this.searchDisable = this.searchDisable.bind(this)
        this.accountSwitch = this.accountSwitch.bind(this)
        this.cartEnable = this.cartEnable.bind(this)
        this.cartDisable = this.cartDisable.bind(this)
        this.occasionsEnable = this.occasionsEnable.bind(this)
        this.occasionsDisable = this.occasionsDisable.bind(this)
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

    accountSwitch() {
        this.setState({
            accountPopup: !this.state.accountPopup
        })
    }

    cartEnable() {
        this.setState({
            cartPopup: true
        })
    }

    cartDisable() {
        this.setState({
            cartPopup: false
        })
    }

    occasionsEnable() {
        this.setState({
            occasions: true
        })
    }

    occasionsDisable() {
        this.setState({
            occasions: false
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
                                    <FormControl placeholder="Search" />

                                </Form>
                            </Modal.Header>
                        </Modal>

                        <Dropdown id="account-enabler">
                            <Dropdown.Toggle id="dropdown-basic">
                                <div className="account">
                                    <img src={user} />
                                    ACCOUNT
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu alignRight>
                                <h3>Sign In</h3>

                                <Form className="signin-stub">
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <Button variant="primary" className="login-btn" size="lg" >
                                        Login
                                    </Button>
                                </Form>
                                <Dropdown.Divider />
                                <h6>Don't have an account? <a href="/">Sign up.</a></h6>
                            </Dropdown.Menu>

                        </Dropdown>

                        <div className="cart" onClick={this.cartEnable}>
                            <img src={cart} />
                            CART
                        </div>

                        <Modal show={this.state.cartPopup} onHide={this.cartDisable} className="cart-container" id="shopping-cart" animation={true}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <h2>Your cart is empty.</h2>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.cartDisable} block>
                                    Continue Shopping
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </div>
                <Navbar expand="lg" className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#" onMouseEnter={this.occasionsEnable}>
                                OCCASIONS
                            </Nav.Link>
                            <Nav.Link href="#">SALE</Nav.Link>
                            <Nav.Link href="#">FLOWERS</Nav.Link>
                            <Nav.Link href="#">PLANTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div id="occasions" >
                    {this.state.occasions ?
                    <div id="occasions-lists" onMouseLeave={this.occasionsDisable}>
                        <ul>
                            <li>
                                <a href="/">Anniversary</a>

                            </li>
                            <li>
                                <a href="/">Apologizing</a>

                            </li>
                            <li>
                                <a href="/">Appreciation</a>

                            </li>
                            <li>
                                <a href="/">Birthday</a>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/">Cheering Up</a>

                            </li>
                            <li>
                                <a href="/">Congratulating</a>

                            </li>
                            <li>
                                <a href="/">Engagement</a>

                            </li>
                            <li>
                                <a href="/">Get Well</a>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/">Graduation</a>

                            </li>
                            <li>
                                <a href="/">Home Decoration</a>

                            </li>
                            <li>
                                <a href="/">Newborn Baby</a>

                            </li>
                            <li>
                                <a href="/">Retirement</a>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="/">Romance</a>

                            </li>
                            <li>
                                <a href="/">Wedding</a>

                            </li>
                        </ul>
                    </div> : ""}
                </div>
            </div>
        )
    }
}
