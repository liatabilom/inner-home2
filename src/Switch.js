import React, { Component } from 'react';

class Switch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			switchOn: false,
		};
	}

	switchBackground = () => {};

	render() {
		return (
			<div>
				<div className="custom-control custom-switch" onClick={this.switchBackground}>
					<input type="checkbox" className="custom-control-input" id="customSwitch1" />
					<label className="custom-control-label" for="customSwitch1"></label>
				</div>
			</div>
		);
	}
}

export default Switch;
