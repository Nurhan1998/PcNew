
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductList from "../../Products/ProductList";

const AdminList = () => {
  return (
    <div>
      <ProductList />
      <Link to='/admin-add'>
      <Button style = {{position :"fixed", right :"15px",top :"25vh"}}>Add product</Button>
      </Link>
    </div>
  );
};

export default AdminList;
