import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import ContactInfo from './ContactInfo'
import pin from '../icons/pin.png'
import mail from '../icons/mail.png'
import phone from '../icons/phone.png'
import '../css/Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-info-container">
                    <div className="location">
                        <img src={pin} alt="" />
                        <h5>
                            123 Some Street Rd.
                            <br/>
                            Hicksville, NY 12345
                        </h5>
                    </div>
                    <div className="mail">
                        <img src={mail} alt="" />
                        <h5>
                            somerandomflorist@email.com
                        </h5>
                    </div>
                    <div className="phone">
                        <img src={phone} alt="" />
                        <h5>
                            ###-###-####
                        </h5>
                    </div>

                </div>
                <ContactInfo />

                <div className="message-heading">
                    <h2>
                        Questions or Comments?
                    </h2>
                </div>
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
                    <Button variant="primary" size="lg" block>
                        Send Message
                    </Button>
                </Form>
            </div>
        )
    }
}
