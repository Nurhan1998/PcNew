import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/AdminAdd/AdminAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
import ProductList from "./pages/Products/ProductList";
import AdminList from "./pages/Admin/AdminList/AdminList";
import ProductDetails from "./pages/Products/ProductDetails";
import ProductEdit from "./pages/Admin/AdminEdit/AdminEdit";

const Routes = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/list" component={ProductList} />

          <Route exact path="/admin-add" component={ProductsAdd} />
          <Route exact path="/admin-list" component={AdminList} />
          <Route exact path="/admin-edit" component={ProductEdit} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default Routes;
