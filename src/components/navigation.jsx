import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo/briquette-logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            {/* HOME */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* ABOUT US */}
            <NavDropdown title="About Us" id="about-dropdown">
              {/* Scroll to About Section */}
              <NavDropdown.Item as={Link} to="/landing/about/visi-misi#about">
                About Company
              </NavDropdown.Item>

              {/* Scroll to Vision */}
              <NavDropdown.Item
                as={Link}
                to="/landing/about/visi-misi#visimisi"
              >
                Vision & Mission
              </NavDropdown.Item>
              {/* Scroll to Team */}
              <NavDropdown.Item as={Link} to="/landing/about/visi-misi#ourteam">
                Our Team
              </NavDropdown.Item>

              {/* Scroll to Contact */}
              <NavDropdown.Item as={Link} to="/landing/about/visi-misi#contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>

            {/* PRODUCT */}
            <NavDropdown title="Product" id="product-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/landing/product/Superiority#superiority"
              >
                Superiority
              </NavDropdown.Item>
            </NavDropdown>
            {/* COOPERATION */}
            <Nav.Link as={Link} to="/cooperation#partner">
              Cooperation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
