import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";

const ProductList = () => {
const{products,getProducts,getProductDetail} = useContext(productsContext)

useEffect(() =>{
  getProducts()
},[])




  return (
    <ul>ProductList
    {products?.map(item => (
        <span key={item.id}>
            <li >{item.name}</li>
            <li >{item.category}</li>
            <li >{item.price}</li>
            <li >{item.description}</li>
            <img src = {item.image[0]}/>
            <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }}>
                <button>Detail</button>
            </Link>
        </span>
    ))}
</ul>
  )
};

export default ProductList;
