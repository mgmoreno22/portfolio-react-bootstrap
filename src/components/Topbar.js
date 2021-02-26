import React from "react";
import { Navbar } from "react-bootstrap";

export default function Topbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      </Navbar>
    </>
  );
}
