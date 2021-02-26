import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../styles/Topbar.css";

export default function Topbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
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
