import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/pedidos"} component={Pedidos} />
      </Switch>
    </Router>
  );
}

export default Routes;
