import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";
import icon from "../img/icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header({ songData }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(+1);
  };

  return (
    <div>
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 fixed-top"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
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
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Go to:
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto navbarLinks">
                  <Nav.Link>
                    <NavLink to="/" className="navLink">
                      Homepage
                    </NavLink>
                  </Nav.Link>
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
                      Test Page
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/anothersite" className="navLink">
                      Another Page
                    </NavLink>
                  </Nav.Link>
                </Nav>

                <SearchBar songData={songData} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
