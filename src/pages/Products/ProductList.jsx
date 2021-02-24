import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/CartContext/CartContext";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
import NaviBar from "../../components/NaviBar";
import {Container,Button,Image,Col,Row,item,Card} from "react-bootstrap"

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
    
    
    
    <div > 
      
      <Container style={{ width: '15rem' , marginTop:"30px"}}>
      {/* <ul > */}
      {products?.map((item) => (
        <div key={item.id}>
          <Image src={item.image[0]} fluid className="border border-primary"/>
          <h5 className="text-center">{item.name}</h5>
          <li><strong>Category: </strong>{item.category}</li>
          <li><strong>Price: </strong>{item.price} USD</li>
          <li><strong>Platform: </strong>{item.description}</li>
          <Link to={`products/${item.id}`} style={{ textDecoration: "none" }}>
            <Button  className="rounded-pill mt-3" block>Details</Button>
          </Link>
          <form className="text-center mt-2 mb-2 ">
          <Button onClick={() => handleClickCart(item)} variant="outline-primary" className="rounded-pill mr-2">Add to cart</Button>
          <input
            type="number"
            min="1"
            style={{width:"50px"}}
            onChange={(e) => {
              handleInp(e.target.value);
            }}
          />
          </form>
        </div>
      ))}
    {/* </ul> */}
      </Container>
      </div>
  );
};

export default ProductList;
