import React, { Component } from 'react';
import './MainVideo.css';

class MainVideo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoDisplay: false,
			video1: this.showVideo(),
		};
	}

	displayVideo() {
		this.setState(prevState => ({
			videoDisplay: !prevState.videoDisplay,
			video2: this.showImage(),
		}));
	}

	showImage() {
		return (
			<div>
				<img id="background-image" src="https://i.imgur.com/TWe8DYz.png" />
			</div>
		);
	}

	showVideo() {
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
				<label class="custom-control-label" for="customSwitch1" onClick={() => this.displayVideo()} />
				{!this.state.videoDisplay ? this.state.video1 : this.state.video2}
			</div>
		);
	}
}

export default MainVideo;
