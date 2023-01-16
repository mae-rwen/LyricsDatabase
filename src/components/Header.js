import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";

// implement router navlink to not refresh the page?

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lyricspage">Lyrics Page</Nav.Link>
          </Nav>
          <SearchBar />
        </Container>
      </Navbar>
    </div>
  );
}
