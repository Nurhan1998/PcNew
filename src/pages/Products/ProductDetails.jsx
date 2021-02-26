import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Media } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProductDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    getProductDetail,
    productDetail,
    productDelete,
    productEdit,
  } = useContext(productsContext);

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

  return (
    <div className="m-5">
      <Media>
        {productDetail?.image.map((item, index) => (
          <div key={index}>
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
              <p>{productDetail?.description}</p>
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
  );
};

export default ProductDetails;
