import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/ProductsAdd/ProductsAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
import List from "./pages/Products/List";
import ProductList from "./pages/Admin/ProductList/ProductList";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";

const Routes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/list" component={List} />

            <Route exact path="/admin-add" component={ProductsAdd} />
            <Route exact path="/admin-list" component={ProductList} />
          </Switch>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
