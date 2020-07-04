import React from 'react';
import '../components/Directory';
import Directory from '../components/Directory';

import { HomePageContainer } from '../styles/HomePageStyles';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
