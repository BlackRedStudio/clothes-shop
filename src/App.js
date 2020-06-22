import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user-actions'

import "./styles/App.scss";

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(null);
      }
        
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? 
          (<Redirect to="/" />) : (<LoginRegisterPage />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
