import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "./Topbar";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div>
      <Topbar />
      <Container className="contactContainer">
        <Row>
          <Col>
            <h1>Contact Me</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
