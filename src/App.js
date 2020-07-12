import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import LoginRegisterPage from './pages/LoginRegisterPage';
import CheckoutPage from './pages/CheckoutPage';

import { selectCurrentUser } from './redux/selectors/user-selectors';
import { checkUserSession } from './redux/actions/user-actions';

import './styles/App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<LoginRegisterPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
