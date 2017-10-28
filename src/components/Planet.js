import React from 'react';
import swapiModule from './swapi.js';

const swapi = new swapiModule();

class Planet extends React.Component {
	
	state = {
		planet: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getPlanet( this.props.match.params.id, res => {
			that.setState({
				planet: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.planet.name}</h1>				
			</div>
		);
	}

}

export default Planet;