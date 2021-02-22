import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
