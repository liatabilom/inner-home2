import React, { Component } from 'react';
import Switch from './Switch';
import Intro from './Intro';
import Buttons from './Buttons';
import './InnerVideo.css';

class InnerVideo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoUrl: '',
			password: 'portfolio',
		};
	}
	render() {
		return (
			<div>
				<h1>
					<header className="header">
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</h1>
				<h2 id="background-video">
					<Switch />
					<iframe
						title="Background Video"
						src="https://fast.wistia.com/embed/medias/zejsug121b"
						allowtransparency="true"
						frameborder="0"
						scrolling="no"
						className="wistia_embed"
						name="wistia_embed"
						allowfullscreen
						mozallowfullscreen
						webkitallowfullscreen
						oallowfullscreen
						msallowfullscreen
						width="620"
						height="349"
					></iframe>
					<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
					<Buttons />
				</h2>
				<h3>
					<Intro />
				</h3>
			</div>
		);
	}
}

export default InnerVideo;
