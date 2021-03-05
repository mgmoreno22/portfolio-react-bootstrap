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

              <Button className="submitBtn" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center contact-text">
              You can also contact me directly at{" "}
              <span className="pEmail">MichaelMoreno751@gmail.com</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            xs={4}
            md={{ span: 2, offset: 3 }}
            lg={2}
          >
            <a target="_blank" href="https://www.linkedin.com/in/mgmoreno22/">
              <i class="fab fa-linkedin"></i>
            </a>
          </Col>
          <Col className="text-center" xs={4} md={2} lg={2}>
            <a target="_blank" href="https://github.com/mgmoreno22">
              <i class="fab fa-github-square"></i>
            </a>
          </Col>
          <Col className="text-center" xs={4} md={2} lg={2}>
            <a target="_blank" href="https://www.instagram.com/mikemoreno22/">
              <i class="fab fa-instagram-square"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
