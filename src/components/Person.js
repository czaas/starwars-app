import React from 'react';
import swapiModule from './swapi.js';

const swapi = new swapiModule();

class Person extends React.Component {
	
	state = {
		person: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getPerson( this.props.match.params.id, res => {
			that.setState({
				person: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.person.name}</h1>
			</div>
		);
	}

}

export default Person;