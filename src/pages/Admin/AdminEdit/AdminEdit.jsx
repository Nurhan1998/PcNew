import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { productsContext } from "../../../contexts/ProductsContext/ProductsContext";
import {Container,FormControl,Button} from 'react-bootstrap'

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
           <Container 
        style={{
        width:"400px",
        marginTop:"120px"
  }}> 
            <h1>Edit</h1>
            <FormControl  className="mt-2" value = {newProduct?.name} onChange ={(e) => createNewProduct(e)} type ='text' name = 'name' placeholder = 'Name'/>
            <FormControl  className="mt-2" value = {newProduct?.category} onChange ={(e) =>createNewProduct(e)} type ='text' name = 'category' placeholder = 'Category' />
            <FormControl  className="mt-2" value = {newProduct?.price} onChange ={(e) =>createNewProduct(e)} type ='number' name = 'price' placeholder = 'Price' />
            <FormControl  className="mt-2" value = {newProduct?.description} onChange ={(e) => createNewProduct(e)} type ='text' name = 'description' placeholder = 'Description' />
            <FormControl  className="mt-2" value = {newProduct?.image} onChange ={(e) => createNewProduct(e)} type ='text' name = 'image' placeholder = 'Image URL' />
            <Button block className="mt-2" onClick = {handleClickSave}>Save</Button>  
     </Container>
      </div>
  )
};

export default ProductEdit;
