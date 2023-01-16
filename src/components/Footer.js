import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

// implement router navlink to not refresh the page?


export default function Footer() {
  return (
    <div>
      <Navbar className="fixed-bottom" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link>
              <NavLink to="/#" className="footerLink">
                Brought to you by Jack, Tobias, Agata, Sindhura, Vedrana 💛
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
