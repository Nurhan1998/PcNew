import React, { useReducer, useState } from "react";
import axios from "axios";
import { API } from "../../helpers/constatns";

export const cartContext = React.createContext();

const INIT_STATE = {
  carts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARTS":
      return { ...state, carts: action.payload };
    default:
      return state;
  }
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCarts = async () => {
    const { data } = await axios.get(`${API}/carts`);
    dispatch({
      type: "GET_CARTS",
      payload: data,
    });
  };
  const [quantity, setQuantity] = useState(0);
  //   const addToCart = async (id) => {};

  const handleInp = (e) => {
    console.log(e);
  };

  return (
    <cartContext.Provider
      value={{
        carts: state.carts,
        getCarts,
        handleInp,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
