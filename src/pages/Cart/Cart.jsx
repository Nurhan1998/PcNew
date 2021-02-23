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
  let active = 3;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

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
      <Pagination>{items}</Pagination>
    </>
  );
};

export default Cart;
