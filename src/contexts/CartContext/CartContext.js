import React, { useReducer, useState } from "react";
import axios from "axios";
import { API } from "../../helpers/constatns";

export const cartContext = React.createContext();

const INIT_STATE = {
  carts: [],
  favorites: [],
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
      item.quantity += 1;
      await axios.post(`${API}/carts`, item);
    }
  };
  const deleteCart = async (item) => {
    let { data } = await axios(`${API}/carts`);
    let res = data.find((elem) => item.id === elem.id);
    console.log(res);

    if (res) {
      if (res.quantity <= 1) {
        await axios.delete(`${API}/carts/${res.id}`);
      } else {
        res.quantity -= 1;
        await axios.patch(`${API}/carts/${res.id}`, res);
      }
    }
    getCarts();
  };
  let count = 0;

  state.carts.map((item) => {
    console.log(item);
    count += item.price * item.quantity;
  });
  const trashCart = async () => {
    const { data } = await axios.get(`${API}/carts`);
    data.forEach((item) => {
      axios.delete(`${API}/carts/${item.id}`);
    });
  };

  return (
    <cartContext.Provider
      value={{
        carts: state.carts,
        getCarts,
        postCart,
        deleteCart,
        count,
        trashCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
