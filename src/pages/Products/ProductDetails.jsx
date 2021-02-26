import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Media, Image, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { FaCartPlus } from "react-icons/fa";
import NaviBar from "../../components/NaviBar";

const ProductDetails = () => {
  const { postCart } = useContext(cartContext);
  const history = useHistory();
  const { id } = useParams();
  const {
    getProductDetail,
    productDetail,
    productDelete,
    productEdit,
  } = useContext(productsContext);

  function handleClickCart() {
    postCart(productDetail);
  }
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("role");
    if (admin) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    getProductDetail(id);
  }, []);

  function handleClickDelete(id) {
    productDelete(id);
    history.push("/list");
  }
  function handleClickEdit(id) {
    productEdit(id);
  }
  console.log("askat");

  return (
    <>
      <NaviBar />

      <Container>
        <Row>
          <Col>
            {productDetail?.image.map((item, index) => (
              <div className="m-4" key={index}>
                <img
                  src={item}
                  alt={`product image ${index + 1}`}
                  width={250}
                  height={300}
                  className="mr-5"
                />
              </div>
            ))}
          </Col>
          <Col>
            <h5>{productDetail?.name}</h5>
            {!isAdmin ? (
              <>
                <p>{productDetail?.description}</p>
                <Link to="/list">
                  <Button>Exit</Button>
                </Link>
                <Button
                  onClick={() => handleClickCart()}
                  variant="outline-primary"
                  className="rounded-pill mr-2 ml-2"
                >
                  <FaCartPlus />
                </Button>
              </>
            ) : (
              <>
                <p>{productDetail?.description}</p>

                <Link onClick={() => handleClickEdit(id)} to={"/admin-edit"}>
                  <Button className="mr-3">Edit</Button>
                </Link>
                <Button className="mr-3" onClick={() => handleClickDelete(id)}>
                  Delete
                </Button>

                <Link to="/admin-list">
                  <Button>Exit</Button>
                </Link>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
