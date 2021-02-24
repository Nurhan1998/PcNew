import React, { useState } from 'react';
import {Form, Col, Button, Image, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const FormPage = () => {
    
    return (
        <>
        <Container >

        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Fullname</Form.Label>
      <Form.Control type="name" placeholder="Enter fullname" />
    </Form.Group>

    {/* <Form.Group as={Col} controlId="formGridSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="surname" placeholder="Surname" />
    </Form.Group> */}
  </Form.Row>

  <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="email@gmail.com" />
  </Form.Group>

  <Form.Group controlId="formGridPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="number" placeholder="Enter phone" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Chui</option>
        <option>Talas</option>
        <option>Issyk-Kol</option>
        <option>Naryn</option>
        <option>Jalal-Abad</option>
        <option>Osh</option>
        <option>Batken</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

<Link to="/payment">
  <Button variant="primary" type="submit">
    Добавить карту
  </Button>
</Link>

<Link to="/cart">
  <Button variant="danger">
      Отмена
  </Button>
</Link>
</Form>
        </Container>
        
        </>

    );
};

export default FormPage;