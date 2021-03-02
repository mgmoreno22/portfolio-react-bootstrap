import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./styles/Topbar.css";

export default function Topbar() {
  return (
    <>
      <Navbar variant="light" id="navbar" expand="lg">
        <Navbar.Brand id="navbar-brand" href="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-items" to="/">
              Home
            </Link>
            <Link className="nav-items" to="/About">
              About
            </Link>
            <Link className="nav-items" to="/Portfolio">
              Portfolio
            </Link>
            <Link className="nav-items" to="/Contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
