import React, {  useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext/ProductsContext';

const Details = () => {
    const {id} = useParams
    const {getProductDetail,productDetail} = useContext(productsContext)

    useEffect(()=>{
        getProductDetail(id)
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default Details;