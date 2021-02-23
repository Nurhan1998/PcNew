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
        <li key={item.id}>
            <span >{item.name}</span>
            <span >{item.price}</span>
            <span >{item.description}</span>
            <img src = {item.image[0]}/>
<<<<<<< HEAD
            <button>Detail</button>
            
        </li>
=======
            <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }}>
                <button>Detail</button>
            </Link>
        </span>
>>>>>>> 874ff5cd95e3ea2c4067efdbe3f19ac30a4231c5
    ))}
</ul>
  )
};

export default ProductList;
