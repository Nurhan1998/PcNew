import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Media, Image } from "react-bootstrap";
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
      <div>
        <Media>
          {productDetail?.image.map((item, index) => (
            <div className="m-4" key={index}>
              <img
                src={item}
                alt={`product image ${index + 1}`}
                width={400}
                height={400}
                className="mr-5"
              />
            </div>
          ))}
          <Media.Body>
            <h5>{productDetail?.name}</h5>
            {!isAdmin ? (
              <>
                <p style={{ color: "white" }}>{productDetail?.description}</p>
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
          </Media.Body>
        </Media>
      </div>
    </>
  );
};

export default ProductDetails;
