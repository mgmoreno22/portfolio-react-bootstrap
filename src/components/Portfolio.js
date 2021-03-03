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

        {/* START OF CARD ROW */}
        <Row>
          {/* START OF A NEW CARD - VIBEE */}
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
                  alt="Vibee Home Page"
                />
              </a>
              <Card.Body>
                <Card.Text>
                  <p className="portAbout text-justify">
                    React-based Music-themed Social Media Website. Users type a
                    post, choose a song, and post it to a global feed.
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="portTech">
                    React, MongoDB, Firebase Auhentication, Socket.io,
                    Axios/API, Javascript, Bootstrap
                  </p>
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
                      View
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* START OF A NEW CARD - BUZZKILL */}
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Header>Buzzkill</Card.Header>
              <a
                target="_blank"
                href="https://salty-hollows-77148.herokuapp.com/"
              >
                <Card.Img
                  variant="bottom"
                  className="portThumb"
                  src="./assets/images/Buzzkill1.png"
                  alt="Buzzkill logo"
                />
              </a>
              <Card.Body className="h-100">
                <Card.Text>
                  <p className="portAbout text-justify">
                    MySQL/Sequelize-based live database themed around reviewing
                    and rating public locations.
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="portTech">
                    SQL/Sequelize, Bootstrap, Axios/API, Javascript
                  </p>
                </Card.Text>
                <Row className="portLinkBody">
                  <Col>
                    <Button
                      variant="red"
                      className="portLinks"
                      target="_blank"
                      href="https://github.com/mgmoreno22/BuzzKill"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="portLinks"
                      target="_blank"
                      href="https://salty-hollows-77148.herokuapp.com/"
                    >
                      View
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
