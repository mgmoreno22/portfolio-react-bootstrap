import React from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topbar from "./Topbar";
import "./styles/Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    //Alert is temporary - confirmation that function has run successfully
    alert("Your email has been sent");
  }
  return (
    <div>
      <Topbar />
      <Container className="contactContainer">
        <Row>
          <Col>
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Form.Group controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="user_name" required />
              </Form.Group>
              <Form.Group controlId="formUserEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" required />
              </Form.Group>
              <Form.Group controlId="formContactSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" />
              </Form.Group>
              <Form.Group controlId="formContactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" />
              </Form.Group>

              <Button type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
