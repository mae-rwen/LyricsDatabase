import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";
import icon from "../img/icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function Header() {
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(+1);
  };

  return (
    <div>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Button
            variant="outline-light"
            onClick={goBack}
            className="navButtons"
          >
            {"<<"}
          </Button>
          <NavLink to="/">
            <img src={icon} className="headerIcon" alt="icon of the app" />
          </NavLink>
          <Button
            variant="outline-light"
            onClick={goForward}
            className="navButtons"
          >
            {">>"}
          </Button>
          <Nav className="me-auto navbarLinks">
            <Nav.Link>
              <NavLink to="/lyricspage" className="navLink">
                Lyrics Page
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/somepage" className="navLink">
                Some Page
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/testcomp" className="navLink">
                Test Comp
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/anothersite" className="navLink">
                Another Site
              </NavLink>
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Container>
      </Navbar>
    </div>
  );
}
