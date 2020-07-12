import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../redux/actions/user-actions';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import { TitleContainer, SignUpContainer } from '../styles/SignUpStyles';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = async e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;

		if (password !== confirmPassword) {
			alert('password don`t match');
			return;
		}

		signUpStart({ displayName, email, password });
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<SignUpContainer>
				<TitleContainer>I do not have a account</TitleContainer>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm password"
						required
					/>
					<CustomButton type="submit">Sign up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
