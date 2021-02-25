import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Col,Image, Container,Row} from "react-bootstrap"
import {FaPlaystation} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SiPlaystation} from 'react-icons/si'
import {GiConsoleController} from 'react-icons/gi'
import {FiTriangle,FiCircle} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import {BsSquare} from 'react-icons/bs'
// import {isAdmin} from "../contexts/ProductsContext/ProductsContext"

const NaviBar = () => {
    return (
      <Navbar bg="white" expand="lg" sticky="top" >
      <Navbar.Brand href="/">
        <h3 className="ml-3"><SiPlaystation/></h3>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
            <Nav.Link href="/list" variant="outline-info"><strong>Shop</strong></Nav.Link>
            <h4><FiTriangle/></h4>
            <Nav.Link href="/Info" variant="outline-info"><strong>Out now</strong></Nav.Link>
            <h4><FiCircle/></h4>
            <Nav.Link href="/Info" variant="outline-info"><strong>About Us</strong></Nav.Link>
            <h4><GrClose/></h4>
            <Nav.Link href="/Info" variant="outline-info"><strong>Games</strong></Nav.Link>
            <h4><BsSquare/></h4>
            <Nav.Link href="/Info" variant="outline-info"><strong>Payment</strong></Nav.Link>
        </Nav>
        
        <Form inline>
        <Link to='/register'>
           <Button variant="outline-primary" className="mr-3 rounded-pill border border-dark" size="sm">Sign Up</Button>
             </Link>
             <Link to='/login'>
           <Button className="rounded-pill border border-dark" size="sm">Log In</Button>
             </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  
      
    );
};

export default NaviBar;