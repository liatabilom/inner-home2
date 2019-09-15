import React, { Component } from 'react';
import Switch from './Switch';
import AppVideo from './AppVideo';
import Intro from './Intro';
import Buttons from './Buttons';
import './InnerVideo.css';

class InnerVideo extends Component {
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
				<h2>
					<Switch />
					<AppVideo />
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
