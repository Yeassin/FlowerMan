import React, { Component } from 'react'
import '../css/Footer.css'
import pinterest from '../icons/pinterest.png'
import insta from '../icons/instagram.png'
import { Form, Button } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer-container">
                <div className="social-container">
                    <a href="https://pin.it/1k4zG99">
                        <img src={pinterest} />
                    </a>
                    <a href="/#">
                        <img src={insta} />
                    </a>
                </div>
                {/* <div className="signup">
                    <Form>
                        <h2>Sign up for </h2>
                        <Form.Control type="text" placeholder="Email"/>
                        <Button>
                            Sign Up Now! 
                        </Button>
                    </Form>
                </div> */}
            </footer>
        )
    }
}
