import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../css/Contact.css'
import contact_flowers from '../images/contact_flowers.jpg'

export default class Contact extends Component {


    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            status: "",
            validated: false
        }

        this.submitForm = this.submitForm.bind(this);
        this.nameChange = this.nameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.messageChange = this.messageChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    messageChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    sendMessage(e) {

        if (this.state.name === '') {
            this.setState({
                validated: false
            })
        }
        if (this.state.email === '') {
            this.setState({
                validated: false
            })
        }
        if (this.state.message === '') {
            this.setState({
                validated: false
            })
        }

        axios.post("http://localhost:3002/send", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" })
          } else {
            this.setState({ status: "ERROR" })
          }
        }
        xhr.send(data)
    }

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
                <Form className="contact-form" onSubmit={this.submitForm} method="POST"  action="https://formspree.io/mdopndnq">
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.nameChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.emailChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" as="textarea" rows="5" name="message" onChange={this.messageChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button variant="primary" size="lg" block id="send-msg-btn" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        )
    }
}
