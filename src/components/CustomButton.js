import React from 'react';

import { CustomButtonContainer } from '../styles/CustomButtonStyles';

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
