import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { productsContext } from "../../../contexts/ProductsContext/ProductsContext";

const ProductEdit = () => {
    const {id} = useParams();
  const history = useHistory();
  const { productToEdit, editSave } = useContext(productsContext)
  const [newProduct, setNewProduct] = useState(productToEdit)
  console.log(productToEdit)
  useEffect(() => {
      setNewProduct(productToEdit)
  }, [productToEdit])

  function createNewProduct(e) {
      let editObj = {
          ...newProduct,
          [e.target.name]: e.target.value
      }
      setNewProduct(editObj)
  }
  function handleClickSave() {
      let newProd = newProduct;
      editSave(newProd)
      history.push('/admin-list')
  }
  return (
      <div>
            <h4>Edit</h4>
            <input value = {newProduct?.name} onChange ={(e) => createNewProduct(e)} type ='text' name = 'name' placeholder = 'Name'/>
            <input value = {newProduct?.category} onChange ={(e) =>createNewProduct(e)} type ='text' name = 'category' placeholder = 'Category' />
            <input value = {newProduct?.price} onChange ={(e) =>createNewProduct(e)} type ='number' name = 'price' placeholder = 'Price' />
            <input value = {newProduct?.description} onChange ={(e) => createNewProduct(e)} type ='text' name = 'description' placeholder = 'Description' />
            <input value = {newProduct?.image} onChange ={(e) => createNewProduct(e)} type ='text' name = 'image' placeholder = 'Image' />
            <button onClick = {handleClickSave}>Save</button>  
      </div>
  )
};

export default ProductEdit;
