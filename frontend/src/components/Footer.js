import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Navbar className="fixed-bottom" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/sendsomelove" className="footerLink">
                Brought to you by Jack, Tobias, Agata, Sindhura, Ve 💛
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
