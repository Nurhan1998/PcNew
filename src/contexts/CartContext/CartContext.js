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
  const postCart = async (item) => {
    let { data } = await axios(`${API}/carts`);
    let res = data.find((elem) => item.id === elem.id);

    if (res) {
      res.quantity += 1;
      await axios.patch(`${API}/carts/${res.id}`, res);
    } else {
      await axios.post(`${API}/carts`, item);
    }
  };

  return (
    <cartContext.Provider
      value={{
        carts: state.carts,
        getCarts,
        postCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;