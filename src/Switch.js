import React, { Component } from 'react';

class Switch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true,
			videoUrl1: 'https://fast.wistia.com/embed/medias/zejsug121b',
		};
	}

	toggleVideo = () => {
		if (this.state.isLoaded === true) {
			return (
				<div className="clearfix .d-inline" id="background-video">
					<iframe
						title="Background Video"
						src={this.state.videoUrl1}
						allowtransparency="true"
						frameborder="0"
						scrolling="no"
						className="wistia_embed"
						name="wistia_embed"
						width="380"
						height="349"
						allowfullscreen
						mozallowfullscreen
						webkitallowfullscreen
						oallowfullscreen
						msallowfullscreen
					></iframe>
					<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
				</div>
			);
		} else {
			return;
		}
	};
	render() {
		return this.toggleVideo();
	}
}

export default Switch;
