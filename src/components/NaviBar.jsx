import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Col,Image, Container,Row} from "react-bootstrap"
import {FaPlaystation} from 'react-icons/fa'

const NaviBar = () => {
    return (
      <Navbar fixed="top" expand="lg" style={{backgroundColor:"white"}} >
        {/* Logo */}
        <Container>
          <Navbar.Brand href="#"><FaPlaystation/>playstation.store</Navbar.Brand>
        </Container>  
        {/* Links */}
        <Container className="justify-content-center">
        
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        {/* User Buttons */}
        <Container className="justify-content-end">
          <Form >
          <Button variant="outline-primary" className="mr-3 rounded-pill border border-dark">Sign Up</Button>
          <Button className="rounded-pill border border-dark">Sign In</Button>
          </Form>
        </Container>
      </Navbar>
         
  
      
    );
};

export default NaviBar;