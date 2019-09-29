import React, { Component } from 'react';

class Test extends Component {
	constructor() {
		super();
		this.state = {
			showMe: true,
		};
	}

	operation = () => {
		this.setState({
			showMe: !this.state.showMe,
		});
	};
	render() {
		return (
			<div>
				<h1>Hide and Show Element</h1>
				{this.state.showMe ? <div>Please Hide me</div> : null}

				<button onClick={() => this.operation()}>Click me</button>
			</div>
		);
	}
}

export default Test;
