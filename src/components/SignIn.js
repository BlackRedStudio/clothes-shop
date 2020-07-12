import React, { Component } from 'react';
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../redux/actions/user-actions';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import {
	TitleContainer,
	ButtonsContainer,
	SignInContainer,
} from '../styles/SignInStyles';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart(email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const {googleSignInStart} = this.props;
		return (
			<SignInContainer>
				<TitleContainer>I already have an account</TitleContainer>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<ButtonsContainer>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
