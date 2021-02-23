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
        <li key={item.id}>
            <span >{item.name}</span>
            <span >{item.price}</span>
            <span >{item.description}</span>
            <img src = {item.image[0]}/>
            <button>Detail</button>
            
        </li>
    ))}
</ul>
  )
};

export default ProductList;
