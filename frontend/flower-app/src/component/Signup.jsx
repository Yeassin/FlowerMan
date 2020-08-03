import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Signup extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <Form>
                    <Form.Group controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Text"/>
                    </Form.Group>
                    <Form.Group controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Text"/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Form.Group controlId="confirm_password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Button>
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}
