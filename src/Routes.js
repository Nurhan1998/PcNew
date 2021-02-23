import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/ProductsAdd/ProductsAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
<<<<<<< HEAD
import List from "./pages/Products/List";
import ProductList from "./pages/Admin/ProductList/ProductList";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
=======
import ProductList from "./pages/Products/ProductList";
import AdminList from "./pages/Admin/ProductList/AdminList";
>>>>>>> 4263711299699487f057bd86d451c7ec6f3e2f4b

const Routes = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={ProductList} />

          <Route exact path="/admin-add" component={ProductsAdd} />
          <Route exact path="/admin-list" component={AdminList} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default Routes;
