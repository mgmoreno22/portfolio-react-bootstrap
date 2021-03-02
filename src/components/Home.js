import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "./Topbar";
import "./styles/Home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <Container className="introContainer">
        <Row>
          <Col xs={12} md={6}>
            <img
              id="author-photo"
              src="./assets/images/Seattle_MM550.png"
              alt="Michael Moreno Headshot in front of trees and city"
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="homeText text-center">Hello, I am Michael</h1>
            <p className="homeText text-justify" id="aboutText">
              I am a Front-End Web Developer with a Bachelors in Psychology from
              the University of San Francisco with additional study of Java
              programming and web design at East Los Angeles College. I have
              recently completed a certificate in full-stack web development
              from the UCLA Extension Coding Bootcamp with newly developed
              skills in CSS, JavaScript, React, SQL/NoSQL Databases, and
              Responsive Web Design.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            xs={4}
            md={{ span: 2, offset: 6 }}
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
    </>
  );
}
