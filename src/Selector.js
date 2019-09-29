import React, { Component } from 'react';
import './Selector.css';

class Buttons extends Component {
	SplashVideo = () => {
		return (
			<div>
				<iframe
					title="Background Video"
					src="https://fast.wistia.com/embed/medias/zejsug121b"
					allowtransparency="true"
					frameBorder="0"
					scrolling="no"
					className="wistia_embed"
					name="wistia_embed"
					width="570"
					height="529"
					allowFullScreen
					mozallowfullscreen="true"
					webkitallowfullscreen="true"
					oallowfullscreen="true"
					msallowfullscreen="true"
				></iframe>
				<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
			</div>
		);
	};

	FlowChart = () => {
		return (
			<div>
				<img src="https://i.imgur.com/TWe8DYz.png" alt="Flow Flyer" />
			</div>
		);
	};

	render() {
		return (
			<div>
				<button className="btn btn-secondary border-0" onClick={this.SplashVideo}>
					Splash
				</button>
				<button onClick={this.FlowChart}>Flow</button>
			</div>
		);
	}
}

export default Buttons;
