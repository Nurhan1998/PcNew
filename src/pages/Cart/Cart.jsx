import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { cartContext } from "../../contexts/CartContext/CartContext";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import {Container,Row,Col,Image} from "react-bootstrap";
import {RiAddCircleLine,RiDeleteBin6Line} from "react-icons/ri"

const Cart = () => {
  const { carts, getCarts } = useContext(cartContext);
  useEffect(() => {
    getCarts();
  }, []);
  
  return (
    <div>
      <Container>
      
        <Row>
          <Col>
          <Container style={{ width: '20rem' , marginTop:"30px" ,backgroundColor:'white'}} fluid className="border"> 
          <h5 className="text-center border-bottom">MY CART</h5>
            {carts.map((item) => (
            <div key={item.id} className="text-center mb-5 border-bottom">
              <Image src={item.image[0]} fluid/>
              <h5><strong>{item.name}</strong></h5>
              <h6>Price: <strong>${item.price}</strong></h6>
              <h6>Qty: <strong>{item.quantity}</strong></h6>
              <h6>ToI: <strong>${item.quantity * item.price}</strong></h6>
              <Button type="submit" variant="outline-primary" className="mb-2 mr-3"><RiAddCircleLine/></Button>
              <Button type="submit" variant="outline-primary" className="mb-2"><RiDeleteBin6Line/></Button>
              </div>
               ))}
          </Container >
          </Col>
              <Col>
                <Container fluid style={{ width: '20rem' , marginTop:"30px",height:"400px" }} className="border" >
                <h5 className="text-center border-bottom" >TOTAL</h5>
                <Button block>CHECKOUT</Button>
                <h6>WE ACCEPT:</h6>
                <Image
                style={{width:'18rem'}} 
                src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" />
                
                </Container>
              </Col>
        </Row>
      </Container>
      
      
    </div>
  );
};

export default Cart;
