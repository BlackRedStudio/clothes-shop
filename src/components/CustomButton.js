import React from 'react'
import '../styles/CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
         {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
