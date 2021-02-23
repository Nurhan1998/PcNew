import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";

const ProductList = () => {
const{products,getProducts} = useContext(productsContext)

useEffect(() =>{
  getProducts()
},[])
console.log(products)


  return (
    <ul>ProductList
    {products?.map(item => (
        <span key={item.id}>
            <li >{item.name}</li>
            <li >{item.price}</li>
            <li >{item.description}</li>
            <img src = {item.image[0]}/>
            
        </span>
    ))}
</ul>
  )
};

export default ProductList;
