import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { auth } from './firebase/firebase-utils'

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={LoginRegisterPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
