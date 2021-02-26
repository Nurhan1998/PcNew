import classes from "./Products.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import {Image} from "react-bootstrap"

const ProductDetails = () => {
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
  }
  function handleClickEdit(id) {
    productEdit(id);
  }

  return (
    <>
    <Image src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-desktop-block-01-en-15jun20?$native$" style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1",
      
  }}/>
    <div className={classes.product_detail_content}>
      <h4>Detail</h4>
      <div>
        {productDetail?.name}

        {productDetail?.image.map((item, index) => (
          <div className={classes.imgWrapper} key={index}>
            <img src={item} alt={`product image ${index + 1}`} />
          </div>
        ))}

        {!isAdmin ? (
          <> {productDetail?.description}</>
        ) : (
          <>
            {productDetail?.description}

            <Link onClick={() => handleClickEdit(id)} to={"/admin-edit"}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleClickDelete(id)}>Delete</button>

            <Link to="/admin-list">
              <button>Exit</button>
            </Link>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
