import React, { Component } from 'react';
import './AppVideo.css';

class AppVideo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVideoOn: true,
			videoUrl2: 'https://fast.wistia.com/embed/medias/q8j6tskhcq?transparent=0',
		};
	}
	render() {
		return (
			<div style={{ height: 450 }}>
				<div id="mobile-video">
					<iframe
						title="Mobile Video"
						src={this.state.videoUrl2}
						allowtransparency="true"
						frameBorder="0"
						scrolling="no"
						className="app-video"
						name="wistia_embed"
						width="166"
						height="339"
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

export default AppVideo;
