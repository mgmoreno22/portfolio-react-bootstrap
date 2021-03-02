import React from "react";
import Topbar from "./Topbar";
import "./styles/Portfolio.css";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <Topbar />
      <Container className="portContainer">
        <Row>
          <Col>
            <h1 className="headerText">Main Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card xs={12} md={6} lg={4}>
              <Card.Header>Vibee</Card.Header>
              <Card.Img
                variant="bottom"
                className="portThumb"
                src="./assets/images/Vibee.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Live Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
