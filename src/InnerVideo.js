import React, { Component } from 'react';
import AppVideo from './AppVideo';
import MainVideo from './MainVideo';
import Intro from './Intro';
import './InnerVideo.css';

class InnerVideo extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: '#80848F' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
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
