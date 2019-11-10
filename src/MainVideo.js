import React, { Component } from 'react';
import Switch from './Switch';

class MainVideo extends Component {
	Video = document.getElementById('background-video');

	constructor(props) {
		super(props);

		this.state = {
			isChecked: true,
			Playing: true,
		};
	}

	toggleVideo = () => {
		this.setState({
			isCHecked: !this.state.isChecked,
			Playing: false,
		});
	};

	displayVideo = () => {
		if (this.state.isChecked) {
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
	};

	render() {
		return <div>{this.displayVideo()}</div>;
	}
}

export default MainVideo;
