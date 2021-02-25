import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import NaviBar from "../../components/NaviBar";
import {
  Container,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { API } from "../../helpers/constatns";
import Pagination from "react-bootstrap/Pagination";
import { CardDeck } from "react-bootstrap";
import { IoLogoWindows } from 'react-icons/io';
import { FaPlaystation,FaCartPlus } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'


const ProductList = () => {
  const { products, getProducts, limit, count } = useContext(productsContext);
  const { postCart } = useContext(cartContext);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [productCount, setProductCount] = useState(1);
  const [filter, setFilter] = useState("none");
  

  function handleFilter(e) {
    if (e.target.value == "none") {
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
      );
    }
    setFilter(e.target.value);
  }

  useEffect(() => {
    if (filter == "none") {
      
      console.log("filter");
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
      );
    }
    getProducts(
      `${API}/products?category=${filter}&_page=${page}&_limit=${limit}&q=${searchValue}`
    ).then(() => {});
  }, [page, searchValue, filter]);

  useEffect(() => {
    getProducts(`${API}/products/?search=${searchValue}`);
  }, [searchValue]);

  const onPaginationChange = (e, value) => {
    setPage(+e.target.textContent);
  };

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
    <>
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
    <Container
    style={{ margin: "50px auto", minHeight: "80vh", display:"flex" , flexWrap:"wrap"}}
    >
      
        {products?.map((item, index) => (
        <CardDeck className='mr-5' style={{width: '20rem', marginBottom:"50px"}} >
          <div key={index}>
            <Card style={{maxHeight: "100vh"}}>
              <Card.Img 
                variant="top"
                src="holder.js/100px160"
                src={item.image[0]}
                fluid
                
              />
              <Card.Body style={{textAlign: 'center'}}>
                <Card.Title ><strong>{item.name} </strong></Card.Title>
                <Card.Text>
                  <li>
                    <strong>Category:  </strong>
                    {item.category}
                  </li>
                  <li>
                    <strong>Price: </strong>
                    {item.price} USD
                  </li>
                  <li>
                    <strong>Platform: </strong>
                    <IoLogoWindows className='mr-1'/>
                    <FaPlaystation/>
                  </li>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  to={`products/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button className="rounded-pill mt-3" block>
                    Details
                  </Button>
                </Link>
                <Form className="text-center mt-2 mb-2 ">
                  <Button
                    onClick={() => handleClickCart(item)}
                    variant="outline-primary"
                    className="rounded-pill mr-2"
                  >
                    <FaCartPlus/>
                  </Button>
                  {/* <input
                    type="number"
                    min="1"
                    style={{ width: "50px" }}
                    onChange={(e) => {
                      handleInp(e.target.value);
                    }}
                  /> */}
                  <Button
                    variant="outline-danger"
                    className="rounded-pill mr-2"
                  >
                    <AiOutlineHeart/>
                  </Button>
                </Form>
              </Card.Footer>
            </Card>
          </div>
        </CardDeck>))}
      
    </Container>
    </>
  );
};

export default ProductList;
