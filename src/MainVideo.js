import React, { Component } from 'react';
import Switch from './Switch';

class MainVideo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: true,
			videoUrl: 'https://fast.wistia.com/embed/medias/zejsug121b',
		};
	}

	toggleVideo = () => {
		this.setState({
			isCHecked: !this.state.isChecked,
			flyerUrl: 'https://i.imgur.com/TWe8DYz.png',
		});
	};

	render() {
		return (
			<div>
				<Switch />
				<div id="background-video">
					<iframe
						title="Background Video"
						src={this.state.videoUrl}
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
			</div>
		);
	}
}

export default MainVideo;
