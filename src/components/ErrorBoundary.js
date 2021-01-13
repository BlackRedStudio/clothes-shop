import React, { Component } from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from '../styles/ErrorBoundaryStyles'

class ErrorBoundary extends Component {
	state = {
		hasErrored: false,
	};

	static getDerivedStateFromError(err) {
		return { hasErrored: true };
	}
	componentDidCatch(err, info) {
		console.log(err);
	}

	render() {
		if (this.state.hasErrored) {
			return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
                    <ErrorImageText> Sorry this page is broken </ErrorImageText>
                </ErrorImageOverlay>
            );
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
