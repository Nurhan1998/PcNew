import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import { API } from "../../helpers/constatns";
import Pagination from "react-bootstrap/Pagination";
import Form from 'react-bootstrap/Form'



const ProductList = () => {
  const { products, getProducts, limit, count } = useContext(productsContext);
  const { postCart } = useContext(cartContext);
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [productCount, setProductCount] = useState(1);
  const [filter, setFilter] = useState("none")

  function handleFilter(e) {
    if (e.target.value == "none") {
      return getProducts(`${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`)
    }
    setFilter(e.target.value)

  }

  useEffect(() => {
    if (filter == "none") {
      console.log("filter")
      return getProducts(`${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`)
    }
    (getProducts(`${API}/products?category=${filter}&_page=${page}&_limit=${limit}&q=${searchValue}`).then(() => {
    }))
  }, [page, searchValue, filter]);


  const onPaginationChange = (e, value) => {
    setPage(+e.target.textContent)
  }

  function handleClickCart(item) {
    item.quantity = productCount;
    postCart(item);
  }
  const handleInp = (e) => {
    setProductCount(e);
  };

  let active = page;
  let items = [];
  for (let page = 1; page <= Math.ceil(count / limit); page++) {
    items.push(
      <Pagination.Item key={page} active={page === active}>
        {page}
      </Pagination.Item>
    );
  }

  return (
    <div style={{ margin: '50px auto', minHeight: '80vh', position: 'relative' }}>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control as="select" defaultValue onChange={handleFilter} >
          <option>none</option>
          <option>action</option>
          <option>shooter</option>
          <option>quest</option>
          <option>strategy</option>
          <option>simulator</option>
        </Form.Control>
      </Form.Group>

      <Pagination onClick={onPaginationChange}>{items}</Pagination>
      <input
        style={{ maxWidth: '80%', margin: '0 auto', display: 'block' }}
        placeholder='Search'
        value={searchValue}
        onChange={(e) => {
          e.preventDefault();
          setSearchValue(e.target.value)
        }}
      />

      <ul>
        ProductList
      {products?.map((item, index) => (
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
