import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../firebase/firebase-utils';

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

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
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
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
