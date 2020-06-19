import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import '../styles/LoginRegisterPage.scss'

const LoginRegisterPage = () => {
    return (
        <div className="login-register">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default LoginRegisterPage
