import React, { useEffect } from 'react';
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

import { GlobalStyle } from './styles/GlobalStyles'

const App = ({checkUserSession, currentUser }) => {

	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

		return (
			<div>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? (
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
