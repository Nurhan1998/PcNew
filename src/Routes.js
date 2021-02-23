import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
<<<<<<< HEAD
import FormPage from "./pages/FormPage/FormPage";
import Payment from "./pages/Payment/Payment"
=======
>>>>>>> 874ff5cd95e3ea2c4067efdbe3f19ac30a4231c5
import Home from "./pages/Home/Home";
import ProductsAdd from "./pages/Admin/AdminAdd/AdminAdd";
import ProductsContextProvider from "./contexts/ProductsContext/ProductsContext";
import ProductList from "./pages/Products/ProductList";
import AdminList from "./pages/Admin/AdminList/AdminList";
import ProductDetails from "./pages/Products/ProductDetails";
import ProductEdit from "./pages/Admin/AdminEdit/AdminEdit";

const Routes = () => {
  return (
<<<<<<< HEAD
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/list" component={ProductList} />
            <Route exact path="/formpage" component={FormPage}/>
            <Route exact path="/payment" component={Payment}/>
=======
    <ProductsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/list" component={ProductList} />
>>>>>>> 874ff5cd95e3ea2c4067efdbe3f19ac30a4231c5

          <Route exact path="/admin-add" component={ProductsAdd} />
          <Route exact path="/admin-list" component={AdminList} />
          <Route exact path="/admin-edit" component={ProductEdit} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default Routes;
