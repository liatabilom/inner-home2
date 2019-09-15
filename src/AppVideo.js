import React, { Component } from 'react';

class AppVideo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVideoOn: true,
			videoUrl2: 'https://fast.wistia.com/embed/medias/q8j6tskhcq',
		};
	}
	render() {
		return (
			<div className="clearfix .d-inline" id="mobile-video">
				<iframe
					title="Mobile Video"
					src={this.state.videoUrl2}
					allowtransparency="true"
					frameborder="0"
					scrolling="no"
					className="wistia_embed"
					name="wistia_embed"
					width="170"
					height="339"
					allowfullscreen
					mozallowfullscreen
					webkitallowfullscreen
					oallowfullscreen
					msallowfullscreen
				></iframe>
				<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
			</div>
		);
	}
}

export default AppVideo;
