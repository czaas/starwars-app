import React from 'react';
import swapiModule from './swapi.js';

const swapi = new swapiModule();

class Species extends React.Component {
	
	state = {
		species: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getSpecies( this.props.match.params.id, res => {
			that.setState({
				species: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.species.name}</h1>
			</div>
		);
	}

}

export default Species;