import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import NaviBar from "../../components/NaviBar";
import { Container, Button, Card, Form, Row, Col } from "react-bootstrap";
import { API } from "../../helpers/constatns";
import Pagination from "react-bootstrap/Pagination";
import { CardDeck } from "react-bootstrap";
import { IoLogoWindows } from "react-icons/io";
import { FaPlaystation, FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const ProductList = () => {
  const { products, getProducts, limit, count} = useContext(
    productsContext
  );
  const { postCart } = useContext(cartContext);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [productCount, setProductCount] = useState(1);
  const [filter, setFilter] = useState("none");


  function handleFilter(e) {
    setPage(1)
    if (e.target.value == "none") {
      setFilter(e.target.value);
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
        );
      }
      setFilter(e.target.value);
      setPage(1)
  }

  useEffect(() => {
    if (filter == "none") {
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
      )
    }
    getProducts(
      `${API}/products?category=${filter}&_page=${page}&_limit=${limit}&q=${searchValue}`,filter
    );
  }, [page, searchValue, filter]);

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
      <Container>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Filter by Category</Form.Label>
          <Form.Control as="select" defaultValue onChange={handleFilter}>
            <option>none</option>
            <option>Action</option>
            <option>Shooter</option>
            <option>Quest</option>
            <option>Strategy</option>
            <option>Simulator</option>
          </Form.Control>
        </Form.Group>
        <input
          style={{ maxWidth: "80%", margin: "0 auto", display: "block" }}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
        />
        <Container
          className="text-center"
          style={{
            margin: "50px ",
            minHeight: "80vh",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {products?.map((item, index) => (
            <CardDeck
              key={index}
              className="mr-5"
              style={{ width: "20rem", marginBottom: "50px" }}
            >
              <div>
                <Card style={{ maxHeight: "100vh" }}>
                  <Card.Img
                    variant="top"
                    src="holder.js/100px160"
                    src={item.image[0]}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>
                      <strong>{item.name} </strong>
                    </Card.Title>
                    <Card.Text>
                      <li>
                        <strong>Category: </strong>
                        {item.category}
                      </li>
                      <li>
                        <strong>Price: </strong>
                        {item.price} USD
                      </li>
                      <li>
                        <strong>Platform: </strong>
                        <IoLogoWindows className="mr-1" />
                        <FaPlaystation />
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
                        <FaCartPlus />
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
                        <AiOutlineHeart />
                      </Button>
                      <Button
                        // onClick={() => handleClickFavorites(item)}
                        variant="outline-primary"
                        className="rounded-pill mr-2"
                      >
                        Add to Favorites
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill mr-2"
                                          >
                        like
                      </Button >
                    </Form>
                  </Card.Footer>
                </Card>
              </div>
            </CardDeck>
          ))}
          <Pagination onClick={onPaginationChange}>{items} </Pagination>
        </Container>
      </Container>
    </>
  );
};
export default ProductList;

{
  /* <div style={{ 
      width: "100%", 
      height: 'auto',
      backgroundColor:'#1f1f1f' 
          }}></div> */
}
