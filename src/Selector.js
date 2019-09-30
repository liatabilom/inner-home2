import React, { Component } from 'react';
import './Selector.css';

class Selector extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
		console.log('Click happened');
	};

	// toggleVideo = () => {
	// 	if (this.state.isLoaded === true) {
	// 		return (
	// 			<div id="background-video">
	// 				<iframe
	// 					title="Background Video"
	// 					src={this.state.videoUrl}
	// 					allowtransparency="true"
	// 					frameBorder="0"
	// 					scrolling="no"
	// 					className="wistia_embed"
	// 					name="wistia_embed"
	// 					width="570"
	// 					height="529"
	// 					allowFullScreen
	// 					mozallowfullscreen="true"
	// 					webkitallowfullscreen="true"
	// 					oallowfullscreen="true"
	// 					msallowfullscreen="true"
	// 				></iframe>
	// 				<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
	// 			</div>
	// 		);
	// 	} else {
	// 		return this.state.flyerUrl;
	// 	}
	// };

	render() {
		return <button onClick={this.handleClick}>Click Me</button>;
	}
}

export default Selector;
