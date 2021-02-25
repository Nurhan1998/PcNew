import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Image,
  Container,
  Row,
} from "react-bootstrap";
import { FaPlaystation } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const NaviBar = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    history.push("/login");
  };

  return (
    <Navbar fixed="top" expand="lg" style={{ backgroundColor: "white" }}>
      {/* Logo */}
      <Container>
        <Navbar.Brand href="#">
          <FaPlaystation />
          playstation.store
        </Navbar.Brand>
      </Container>
      {/* Links */}
      <Container className="justify-content-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/list ">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
      {/* User Buttons */}
      <Container className="justify-content-end">
        <Form>
          <h1>{user}</h1>
          <Button
            variant="outline-primary"
            className="mr-3 rounded-pill border border-dark"
            onClick={() => history.push("/register")}
          >
            Sign Up
          </Button>
          {user ? (
            <Button
              className="rounded-pill border border-dark"
              onClick={() => handleLogOut()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              className="rounded-pill border border-dark"
              onClick={() => history.push("/login")}
            >
              Sign In
            </Button>
          )}
        </Form>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
