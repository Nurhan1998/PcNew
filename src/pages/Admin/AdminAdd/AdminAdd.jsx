import React, { useContext, useState } from "react";
import { productsContext } from "../../../contexts/ProductsContext/ProductsContext";
import {Container,FormControl,Button} from 'react-bootstrap'

const ProductsAdd = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const { addProduct } = useContext(productsContext);

  function handleClick() {
    let newObj = {
      name,
      category,
      price,
      description,
      quantity:0,
      image: [image],
      quantity: 0,
    };
    addProduct(newObj);
    setName("");
    setCategory("");
    setPrice("");
    setDescription("");
    setImage("");
  }
  return (
    <div>
      <Container 
        style={{
        width:"400px",
        marginTop:"120px"
  }}> 
    <h1>Admin Add Product</h1>
      <FormControl
        className="mt-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <FormControl
        className="mt-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Category"
      />
      <FormControl
        className="mt-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Price"
      />
      <FormControl
        className="mt-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <FormControl
        className="mt-2"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image URL"
      />
      <Button className="mt-2 " block onClick={handleClick}>Add Product</Button>
      </Container>
     
    </div>
  );
  return <div></div>;
};

export default ProductsAdd;
