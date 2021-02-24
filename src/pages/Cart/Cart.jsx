import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { cartContext } from "../../contexts/CartContext/CartContext";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { carts, getCarts } = useContext(cartContext);
  useEffect(() => {
    getCarts();
  }, []);
  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                <Button type="submit">купить</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
