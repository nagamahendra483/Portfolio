import "./Contact.css";
import { Form, Button } from "react-bootstrap"
const Contact = () => {

    return (
    <div style={{ width: "40%", height: "50%", marginLeft: "30%", marginTop: "5%" }}>
        <Form>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group><Form.Group controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" placeholder="Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    </div>);
}

export default Contact;