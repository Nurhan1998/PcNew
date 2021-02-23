import React, { useContext, useState } from "react";
import { productsContext } from "../../../contexts/ProductsContext/ProductsContext";

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
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Category"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Price"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image"
      />
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
  return <div></div>;
};

export default ProductsAdd;
