import React from "react";
import { Button, Container } from "react-bootstrap";
import ProductList from "../../Products/ProductList";
import { Link } from "react-router-dom";

const AdminList = () => {
  return (
    <>
      <ProductList />
      <Link to="/admin-add">
        <Button
          style={{
            position: "fixed",
            top: "25vh",
            position: "fixed",
          }}
        >
          Add product
        </Button>
      </Link>
    </>
  );
};

export default AdminList;
