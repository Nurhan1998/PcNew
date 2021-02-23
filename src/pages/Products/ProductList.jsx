import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { products, getProducts } = useContext(productsContext);
  const { postCart } = useContext(cartContext);
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  function handleClickCart(item) {
    item.quantity = productCount;
    postCart(item);
  }
  const handleInp = (e) => {
    setProductCount(e);
  };

  return (
    <ul>
      ProductList
      {products?.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
          <li>{item.category}</li>
          <li>{item.price}</li>
          <li>{item.description}</li>
          <img src={item.image[0]} />
          <input
            type="number"
            min="1"
            onChange={(e) => {
              handleInp(e.target.value);
            }}
          />
          <button onClick={() => handleClickCart(item)}>в корзину</button>

          <Link to={`products/${item.id}`} style={{ textDecoration: "none" }}>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
