import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../redux/actions/user-actions';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import { TitleContainer, SignUpContainer } from '../styles/SignUpStyles';

const SignUp = ({signUpStart}) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const {displayName, email, password, confirmPassword} = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();


		if (password !== confirmPassword) {
			alert('password don`t match');
			return;
		}

		signUpStart({ displayName, email, password });
	};

	const handleChange = e => {
		const { name, value } = e.target;

		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

		return (
			<SignUpContainer>
				<TitleContainer>I do not have a account</TitleContainer>
				<span>Sign up with your email and password</span>
				<form onSubmit={handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						label="Confirm password"
						required
					/>
					<CustomButton type="submit">Sign up</CustomButton>
				</form>
			</SignUpContainer>
		);
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
