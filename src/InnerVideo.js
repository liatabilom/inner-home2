import React, { Component } from 'react';
import AppVideo from './AppVideo';
import MainVideo from './MainVideo';
import Intro from './Intro';
import Selector from './Selector';
import './InnerVideo.css';

class InnerVideo extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</div>
				<br />
				<div className="container videoContainer">
					<div className="row">
						<div className="card-body p-0 col-md-8">
							<h1>
								<MainVideo />
								<AppVideo />
							</h1>
							<br />
							<Selector />
						</div>
						<div className="card-body p-0 col-md-4">
							<Intro />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InnerVideo;
