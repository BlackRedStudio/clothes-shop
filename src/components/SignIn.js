import React, { useState } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../redux/actions/user-actions';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import { TitleContainer, ButtonsContainer, SignInContainer } from '../styles/SignInStyles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = userCredentials;

		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;

		setCredentials({
			...userCredentials,
			[name]: value,
		});
	};
	return (
		<SignInContainer>
			<TitleContainer>I already have an account</TitleContainer>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput type="email" name="email" value={email} handleChange={handleChange} label="email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
