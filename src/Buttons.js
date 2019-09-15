import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
	render() {
		return (
			<div className="btn-group btn-group-toggle buttonMode" data-toggle="buttons">
				<label className="btn btn-outline-secondary">
					<input type="radio" name="options" id="option1" autocomplete="off" checked />
					Splash
				</label>
				<label className="btn btn-outline-secondary">
					<input type="radio" name="options" id="option2" autocomplete="off" />
					Flow
				</label>
			</div>
		);
	}
}

export default Buttons;
