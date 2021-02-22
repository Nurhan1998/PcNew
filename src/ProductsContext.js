import React, { useReducer } from 'react';
import axios from 'axios';

export const productsContext =React.createContext()

const INIT_STATE ={
    products:[]
}

const reducer =(state = INIT_STATE,action) =>{
    switch (action.type){
        case 'GET_DATA':
            return{...state,
                products: action.payload
            }
            default: return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,INIT_STATE)

const getProducts = async () =>{
    const {data} = await axios.get (`${API}/products`)
    dispatch ({
        type : 'GET_PRODUCTS',
        payload: data
    })
}

const addProduct = async (newProd) =>{
    await axios.post(`${API}/products`,newProd)
}    
    return (
        <productsContext.Provider value ={{
            products : state.products,
            addProduct
        }}> 
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;