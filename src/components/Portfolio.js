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

        {/* -----------START OF CARD ROW----------- */}
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
                    Axios/API, Javascript
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
              <Card.Body>
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

          {/* START OF A NEW CARD - UPC */}
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Header>Pub Crawl</Card.Header>
              <a
                target="_blank"
                href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              >
                <Card.Img
                  variant="bottom"
                  className="portThumb"
                  src="./assets/images/pubProject1.png"
                  alt="Ultimate Pub Crawl home page"
                />
              </a>
              <Card.Body>
                <Card.Text>
                  <p className="portAbout text-justify">
                    Javascript-based Pub Crawl Generator where users can
                    generate and route bars, lounges, and restaurants.
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="portTech">
                    Javascript, HTML/CSS, Axios/API, Materialize Framework,
                    Geoapify
                  </p>
                </Card.Text>
                <Row className="portLinkBody">
                  <Col>
                    <Button
                      variant="red"
                      className="portLinks"
                      target="_blank"
                      href="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="portLinks"
                      target="_blank"
                      href="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
                    >
                      View
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="headerText">Extra Projects</h1>
          </Col>
        </Row>

        {/* -----------START OF CARD ROW----------- */}
        <Row>
          {/* START OF A NEW CARD - Daily Planner */}
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Header>Daily Planner</Card.Header>
              <a
                target="_blank"
                href="https://mgmoreno22.github.io/DailyPlanner/"
              >
                <Card.Img
                  variant="bottom"
                  className="portThumb"
                  src="./assets/images/DailyPlanner1.png"
                  alt="Daily Planner website"
                />
              </a>
              <Card.Body>
                <Card.Text>
                  <p className="portAbout text-justify">
                    Program that tracks daily plans using local storage.
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="portTech">
                    Javascript, HTML/CSS, Bootstrap, Moment.js
                  </p>
                </Card.Text>
                <Row className="portLinkBody">
                  <Col>
                    <Button
                      variant="red"
                      className="portLinks"
                      target="_blank"
                      href="https://github.com/mgmoreno22/DailyPlanner"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="portLinks"
                      target="_blank"
                      href="https://mgmoreno22.github.io/DailyPlanner/"
                    >
                      View
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* START OF A NEW CARD - ReadMe Generator */}
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Header>ReadMe Generator</Card.Header>
              <a
                target="_blank"
                href="https://mgmoreno22.github.io/DailyPlanner/"
              >
                <Card.Img
                  variant="bottom"
                  className="portThumb"
                  src="./assets/images/ReadMeGenerator.png"
                  alt="Read Me Generator Example Page"
                />
              </a>
              <Card.Body>
                <Card.Text>
                  <p className="portAbout text-justify">
                    Node-based program to generate professional README
                    templates.
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="portTech">Javascript, Node.js</p>
                </Card.Text>
                <Row className="portLinkBody">
                  <Col>
                    <Button
                      variant="red"
                      className="portLinks"
                      target="_blank"
                      href="https://github.com/mgmoreno22/MarkdownGenerator"
                    >
                      Github
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <p className="portTech portClarify text-center">
                    *This program runs in Terminal
                  </p>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
