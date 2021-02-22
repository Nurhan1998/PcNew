import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
=======

import Auth from "./pages/Auth/Auth";
>>>>>>> f449b7e8410b1b4e588064209104df49231ac71d
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/ProductsAdd/ProductsAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
import List from "./pages/Products/List";
import ProductList from "./pages/Admin/ProductList/ProductList";

const Routes = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
=======
    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Auth} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={List} />

          <Route exact path='/admin-add' component={ProductsAdd} />
          <Route exact path='/admin-list' component={ProductList} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
>>>>>>> f449b7e8410b1b4e588064209104df49231ac71d
  );
};

export default Routes;
