import React from "react";
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
import { Link, useHistory } from "react-router-dom";
import { SiPlaystation } from "react-icons/si";
import { GiConsoleController } from "react-icons/gi";
import { FiTriangle, FiCircle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { BsSquare } from "react-icons/bs";

// import {isAdmin} from "../contexts/ProductsContext/ProductsContext"

const NaviBar = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    history.push("/");
  };



    return (
      <Navbar expand="lg" sticky="top" bg="white">
      <Navbar.Brand href="/">
        <h3 className="ml-3">
          <SiPlaystation />
        </h3>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="/list" variant="outline-info">
            <strong>Shop</strong>
          </Nav.Link>
          <h4>
            <FiTriangle />
          </h4>
          <Nav.Link href="/Info" variant="outline-info">
            <strong>Out now</strong>
          </Nav.Link>
          <h4>
            <FiCircle />
          </h4>
          <Nav.Link href="/Info" variant="outline-info">
            <strong>About Us</strong>
          </Nav.Link>
          <h4>
            <GrClose />
          </h4>
          <Nav.Link href="/Info" variant="outline-info">
            <strong>Games</strong>
          </Nav.Link>
          <h4>
            <BsSquare />
          </h4>
          <Nav.Link href="/Info" variant="outline-info">
            <strong>Payment</strong>
          </Nav.Link>
        </Nav>

        <Form inline>
          <h1>{user}</h1>
          <Link to="/register">
            <Button
              variant="outline-primary"
              className="mr-3 rounded-pill border border-dark"
              size="sm"
            >
              Sign Up
            </Button>
          </Link>

          {user ? (
            <Button
              className="rounded-pill border border-dark"
              size="sm"
              onClick={() => handleLogOut()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              className="rounded-pill border border-dark"
              size="sm"
              onClick={() => history.push("/login")}
            >
              Log In
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NaviBar;
