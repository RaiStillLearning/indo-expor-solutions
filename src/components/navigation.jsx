import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/logo/briquette-logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            {" "}
            {/* Nav berada di tengah */}
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About us" id="about-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Visi & Misi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="product-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Superiority
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Cooperation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
