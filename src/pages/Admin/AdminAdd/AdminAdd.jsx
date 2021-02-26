import React, { useContext, useState } from "react";
import { productsContext } from "../../../contexts/ProductsContext/ProductsContext";
import { Container, FormControl, Button, Image } from "react-bootstrap";
import {Link} from "react-router-dom"

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
      quantity: 0,
      image: [image],
      quantity: 0,
      likes: 0,
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
      <Image src="https://cdn.wallpapersafari.com/73/41/V1Imlh.jpg" style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
/>
      <Container
        style={{
          
          width: "400px",
          paddingTop: "120px",
          paddingBottom: "278px"
        }}
      >
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
        <Link>
        <Button variant="dark" className="mt-2 " block onClick={handleClick}>
          Add Product
        </Button>
        </Link>
      </Container>
    </div>
  );
};

export default ProductsAdd;
