import React from 'react';

const ProductsAdd = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDesription] = useState('')
    const [image,setImage] = useState([])
    const{addProduct} = useContext(contactContext)
    
    function handleClick () {
        let newObj = {
            name,
            price,
            description,
            image:[image]
            
        }
        addProduct(newObj)
        setInpName('')
        setInpSurname('')
        setInpPhone('')
        setInpDetail('')
        }
        return (
        <div>
            
            <input value = {name} onChange ={(e) => setName(e.target.value)} type ='text' placeholder = 'Name'/>
            <input value = {price} onChange ={(e) => setPrice(e.target.value)} type ='text' placeholder = 'Price' />
            <input value = {description} onChange ={(e) => setDesription(e.target.value)} type ='number' placeholder = 'Description' />
            <input value = {image} onChange ={(e) => setImage(e.target.value)} type ='text' placeholder = 'Image' />
            <button onClick = {handleClick}>Add Product</button>
        </div>
    );
    return (
        <div>
            
        </div>
    );
};


export default ProductsAdd;