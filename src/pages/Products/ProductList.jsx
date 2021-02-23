import React, { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";

const ProductList = () => {
  const { products, getProducts } = useContext(productsContext);
  const { addToCart, handleInp } = useContext(cartContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul>
      ProductList
      {products?.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <img src={item.image[0]} />
          <input
            type="number"
            min="1"
            onChange={(e) => {
              handleInp(e.target.value);
            }}
          />
          <button onClick={() => addToCart(item.id)}>в корзину</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
