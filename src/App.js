import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={LoginRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
