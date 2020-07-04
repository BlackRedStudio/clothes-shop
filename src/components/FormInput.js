import React from 'react'
import {FormInputContainer,
FormInputLabelContainer,
GroupContainer} from '../styles/FormInputStyles'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            { label ? <FormInputLabelContainer shrink={otherProps.value.length}>{label}</FormInputLabelContainer> : null }
        </GroupContainer>
    )
}

export default FormInput
