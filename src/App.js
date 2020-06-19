import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { auth, createUserProfileDocument } from './firebase/firebase-utils'

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
        this.setState({ currentUser: null})
      }
        
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
