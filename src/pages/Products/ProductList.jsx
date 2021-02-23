import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import { API } from "../../helpers/constatns";
const ProductList = () => {
  const { products, getProducts,limit } = useContext(productsContext);
  const { postCart } = useContext(cartContext);
  const [page,setPage] =useState(1)
  const [searchValue,setSearchValue] =useState('')
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    getProducts(`${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`).then(()=>{
    })
  }, [page,searchValue]);

  const onPaginationChange = (e,value) =>{
      setPage(+e.target.textContent)
    }

  function handleClickCart(item) {
    item.quantity = productCount;
    postCart(item);
  }
  const handleInp = (e) => {
    setProductCount(e);
  };

  return (

  <div style={{ margin: '50px auto', minHeight: '80vh', position: 'relative' }}>
    <input 
    style={{ maxWidth: '80%', margin: '0 auto', display: 'block' }} 
    placeholder ='Search' 
    value = {searchValue}
    onChange ={(e) => {
      e.preventDefault();
      setSearchValue(e.target.value)}}
    />

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
  </div>
  );
};

export default ProductList;
