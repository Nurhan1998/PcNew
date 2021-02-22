import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import FormPage from "./pages/FormPage/FormPage";
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/ProductsAdd/ProductsAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
import List from "./pages/Products/List";
import ProductList from "./pages/Admin/ProductList/ProductList";

const Routes = () => {
  return(

    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Auth} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/formpage" component={FormPage}/> 

          <Route exact path='/admin-add' component={ProductsAdd} />
          <Route exact path='/admin-list' component={ProductList} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default Routes;
