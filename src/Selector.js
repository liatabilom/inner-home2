import React, { Component } from 'react';
import './Selector.css';

class Selector extends Component {
	state = {
		image: 'https://i.imgur.com/TWe8DYz.png',
	};

	handleClick = () => {
		this.setState({
			image: !this.state.image,
		});
	};

	render() {
		return <button onClick={this.handleClick()}>Click Me</button>;
	}
}

export default Selector;
