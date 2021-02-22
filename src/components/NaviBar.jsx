import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Col} from "react-bootstrap"


const NaviBar = () => {
    return (
        <div>
           <Navbar bg="dark" expand="lg" style={{color:"white"}} sticky="top">
  <Navbar.Brand href="#home">Gamer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">   
      <Nav.Link href="#home" style={{color:"white"}}>Shop</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}>About Us</Nav.Link>
      <Nav.Link href="#link" style={{color:"white"}}></Nav.Link>

     
    </Nav>
    <Form inline>
      <Button variant="outline-warning">Sign Up</Button>
      <Button variant="outline-danger">Sign In</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NaviBar;