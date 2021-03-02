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
          <Col>
            <img
              id="author-photo"
              src="./assets/images/Seattle_MM550.png"
              alt="Michael Moreno Headshot in front of trees and city"
            />
          </Col>
          <Col>
            <h1 className="homeText">Hello, I am Michael</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
