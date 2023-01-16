import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// implement router navlink to not refresh the page?


export default function Footer() {
  return (
    <div>
      <Navbar className="fixed-bottom" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Some</Nav.Link>
            <Nav.Link href="#features">Footer</Nav.Link>
            <Nav.Link href="#pricing">Things</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
