import axios from "axios";
import React, { useReducer } from "react";

import { API } from "../../helpers/constatns";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  productDetail: null,
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "GET_PRODUCT_TO_EDIT":
      return {
        ...state,
        productToEdit: action.payload,
      };
    default:
      return state;
  }
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const isAdmin = true;
  const getProducts = async () => {
    const { data } = await axios.get(`${API}/products`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const getProductDetail = async (id) => {
    const { data } = await axios.get(`${API}/products/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: data,
    });
  };
  const productDelete = async (id) => {
    await axios.delete(`${API}/products/${id}`);
  };

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

  const editSave = async (newProd) => {
    await axios.patch(`${API}/products/${newProd.id}`, newProd);
  };
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productDetail: state.productDetail,
        productToEdit: state.productToEdit,
        isAdmin: isAdmin,
        addProduct,
        getProducts,
        getProductDetail,
        productDelete,
        productEdit,
        editSave,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider; 
