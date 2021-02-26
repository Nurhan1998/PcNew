
import React from "react";
import { Button } from "react-bootstrap";
import ProductList from "../../Products/ProductList";
import { Link } from "react-router-dom";

const AdminList = () => {
  return (
    <>
      <ProductList />
      <Link to="/admin-add">
        <Button style={{ position: "fixed", right: "15px", top: "25vh" }}>
          Add product
        </Button>
        <Button  style={{ backgroundColor: "#dc3545" ,position: "fixed", right: "15px", top: "15vh" }}>
         exit
        </Button>

      </Link>
    </>
  );
};

export default AdminList;
