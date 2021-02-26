import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import NaviBar from "../../components/NaviBar";
import { Container, Button, Card, Form, Row, Col } from "react-bootstrap";
import { API } from "../../helpers/constatns";
import Pagination from "react-bootstrap/Pagination";
import { CardDeck, Image } from "react-bootstrap";
import { IoLogoWindows } from "react-icons/io";
import { FaPlaystation, FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../../components/Footer";
const ProductList = () => {
  const { products, getProducts, limit, count, addFavorites } = useContext(
    productsContext
  );
  const { postCart } = useContext(cartContext);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [productCount, setProductCount] = useState(1);
  const [filter, setFilter] = useState("none");

  function handleFilter(e) {
    setPage(1);
    if (e.target.value == "none") {
      setFilter(e.target.value);
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
      );
    }
    setFilter(e.target.value);
    setPage(1);
  }

  useEffect(() => {
    if (filter == "none") {
      return getProducts(
        `${API}/products?_page=${page}&_limit=${limit}&q=${searchValue}`
      ).then(() => {});
    }
    getProducts(
      `${API}/products?category=${filter}&_page=${page}&_limit=${limit}&q=${searchValue}`
    ).then(() => {});
    console.log(filter);
  }, [page, searchValue, filter]);

  const onPaginationChange = (e, value) => {
    setPage(+e.target.textContent);
  };

  function handleClickCart(item) {
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
      <NaviBar />
      <Image
        src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-desktop-block-01-en-15jun20?$native$"
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <Container>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label style={{ color: "white" }}>Filter by Category</Form.Label>
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
                      <Button
                        variant="outline-danger"
                        className="rounded-pill mr-2"
                      >
                        <AiOutlineHeart />
                      </Button>
                    </Form>
                  </Card.Footer>
                </Card>
              </div>
            </CardDeck>
          ))}
        </Container>
        <Pagination onClick={onPaginationChange}>{items}</Pagination>
      </Container>
      <Footer />
    </>
  );
};
export default ProductList;
