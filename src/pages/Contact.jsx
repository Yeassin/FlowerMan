import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../css/Contact.css'
import contact_flowers from '../images/contact_flowers.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact-page">
                <div className="contact-banner">
                    <div className="contact-heading">
                        <h1>CONTACT ME</h1>
                    </div>
                    <img src={contact_flowers} />
                </div>
                <div className="contact-info">
                    <p><strong>Phone:</strong> ###-###-####</p>
                    <p><strong>Email:</strong> somerandomfloristguy@email.com</p>
                    <p><strong>Address:</strong> 123 Some Road St.
                        <br />
                        Some City, NY 12345
                    </p>
                </div>
                <hr />
                <h1>Questions or Comments?</h1>
                <Form className="contact-form">
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" as="textarea" rows="5" />
                    </Form.Group>
                    <Button variant="primary" size="lg" block id="send-msg-btn">
                        Send Message
                    </Button>
                </Form>
            </div>
        )
    }
}
