import React from 'react';
// import '../styles/HomePage.scss';
import '../components/Directory';
import Directory from '../components/Directory';

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="directory-menu">
				<Directory />
			</div>
		</div>
	);
};

export default HomePage;
