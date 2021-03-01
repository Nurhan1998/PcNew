import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { SiPlaystation } from "react-icons/si";
import { FaCartPlus } from "react-icons/fa";
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
    history.push("/login");
  };
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("role");
    if (admin) {
      setIsAdmin(true);
    }
  }, []);

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
          <Link
            className="nav-link"
            to={isAdmin ? "/admin-list" : "/list"}
            variant="outline-info"
          >
            <strong>Shop</strong>
          </Link>
          <h4>
            <FiTriangle />
          </h4>
          <Link className="nav-link" to="/" variant="outline-info">
            <strong>Out now</strong>
          </Link>
          <h4>
            <FiCircle />
          </h4>
          <Link className="nav-link" to="/list" variant="outline-info">
            <strong>Main</strong>
          </Link>
          <h4>
            <GrClose />
          </h4>
          <Link className="nav-link" to="/" variant="outline-info">
            <strong>Home</strong>
          </Link>
          <h4>
            <BsSquare />
          </h4>
          <Link className="nav-link" to="/payment" variant="outline-info">
            <strong>Payment</strong>
          </Link>
        </Nav>

        <Form inline>
          <h5>{user}</h5>
          <Button
            variant="outline-primary"
            className="mr-3 ml-3 rounded-pill border border-primary"
            onClick={() => history.push("/cart")}
          >
            <FaCartPlus />
          </Button>
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
