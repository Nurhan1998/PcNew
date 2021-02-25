import axios from "axios";
import React, { useReducer } from "react";

import { API } from "../../helpers/constatns";

export const productsContext = React.createContext();

const INIT_STATE ={
    products:[],
    productDetail:null,
    productToEdit: null,
    count:0,
    favorites:[]
}

const reducer =(state = INIT_STATE,action) =>{
    switch (action.type){
        case 'GET_PRODUCTS':
            return{...state,
                products: action.payload.products,
                count: action.payload.count
            }
        case 'GET_PRODUCT_DETAIL':
            return{
                ...state,
                productDetail: action.payload
            }
        case 'GET_PRODUCT_TO_EDIT':
            return{
                ...state,
                productToEdit: action.payload
            }
        case 'GET_FAVORITES': 
            return {
                ...state,
                favorites: action.payload           
            }
            default: return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,INIT_STATE)
    const isAdmin = true;
    const limit = 3;

const getProducts = async (url) =>{
    const countProducts = await axios.get (`${API}/products`)
    const {data} = await axios.get (url)
    dispatch ({
        type : 'GET_PRODUCTS',
        payload: {
            products: data,
            count: countProducts.data.length
        }
    })
}
const getProductDetail = async (id) =>{
    const {data} = await axios.get (`${API}/products/${id}`)
    dispatch ({
        type : 'GET_PRODUCT_DETAIL',
        payload: data
    })
}
const productDelete = async (id) =>{
    await axios.delete(`${API}/products/${id}`)
}

  const addProduct = async (newProd) => {
    await axios.post(`${API}/products`, newProd);
  };

  const productEdit = async (id) => {
    const { data } = await axios.get(`${API}/products/${id}`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCT_TO_EDIT",
      payload: data,
    });
  };

const editSave = async(newProd) =>{
    await axios.patch(`${API}/products/${newProd.id}`,newProd)
}

const addFavorites = async (newFav) => {
    await axios.post(`${API}/favorites`, newFav);
  };

const getFavorites = async () =>{
    const {data} = await axios(`${API}/favorites`)
    console.log(data)
    dispatch({
        type: "GET_FAVORITES",
        payload: data
    })
}
    return (
        <productsContext.Provider value ={{
            products : state.products,
            productDetail : state.productDetail,
            productToEdit: state.productToEdit,
            isAdmin: isAdmin,
            count: state.count,
            limit: limit,
            favorites: state.favorites,
            addProduct,
            getProducts,
            getProductDetail,
            productDelete,
            productEdit,
            editSave,
            getFavorites,
            addFavorites
        }}> 
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider; 
