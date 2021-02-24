import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext/ProductsContext";
import { API } from "../../helpers/constatns";

const ProductList = () => {
const{products,getProducts,getProductDetail} = useContext(productsContext)
const [searchValue, setSearchValue] = useState("");

useEffect(() =>{
  getProducts()
},[])

useEffect(() => {
  getProducts(`${API}/products/?search=${searchValue}`)
}, [searchValue]);




  return (
    <ul>ProductList
     	<input
							fullWidth={true}
							variant={'outlined'}
							style={{maxWidth: '80%', margin: '0 auto', display: 'block'}}
							placeholder="Search"
							value={searchValue}
							onChange={(e) => {
								e.preventDefault();	
								setSearchValue(e.target.value)
							}}
						/>
    {products?.map(item => (
        <li key={item.id}>
            <span >{item.name}</span>
            <span >{item.price}</span>
            <span >{item.description}</span>
            <img src = {item.image[0]}/>
            <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }}>
                <button>Detail</button>
            </Link>
        </li>
    ))}
</ul>
  )
};

export default ProductList;
