import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { LoginRegisterPageContainer } from '../styles/LoginRegisterPageStyles';

const LoginRegisterPage = () => {
	return (
		<LoginRegisterPageContainer>
			<SignIn />
			<SignUp />
		</LoginRegisterPageContainer>
	);
};

export default LoginRegisterPage;
