import React, { Component } from 'react';
import './MainVideo.css';

class MainVideo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		};
	}

	toggleVideo = () => {
		this.setState(prevState => ({
			isPlaying: !prevState.isPlaying,
			video: this.displayVideo(),
		}));
	};

	displayVideo() {
		return (
			<div id="background-video">
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
	}

	render() {
		return (
			<div class="custom-control custom-switch switchBtn">
				<input type="checkbox" class="custom-control-input" id="customSwitch1" />
				<label class="custom-control-label" for="customSwitch1" onClick={() => this.toggleVideo()} />
				{this.state.isPlaying ? this.state.video : null}
			</div>
		);
	}
}

export default MainVideo;
