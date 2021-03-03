import React from "react";
import Topbar from "./Topbar";
import "./styles/Portfolio.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

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
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Header>Vibee</Card.Header>
              <a
                target="_blank"
                href="https://evening-sands-41595.herokuapp.com/"
              >
                <Card.Img
                  variant="bottom"
                  className="portThumb"
                  src="./assets/images/Vibee.png"
                />
              </a>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row className="portLinkBody">
                  <Col>
                    <Button
                      variant="red"
                      className="portLinks"
                      target="_blank"
                      href="https://github.com/jfrausto/FindYourVibe"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="portLinks"
                      target="_blank"
                      href="https://evening-sands-41595.herokuapp.com/"
                    >
                      Website
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
