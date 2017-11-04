import React from 'react';
import swapiModule from './swapi.js';

const swapi = new swapiModule();

class Vehicle extends React.Component {
	
	state = {
		vehicle: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getVehicle( this.props.match.params.id, res => {
			that.setState({
				vehicle: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.vehicle.name}</h1>
			</div>
		);
	}

}

export default Vehicle;