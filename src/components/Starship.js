import React from 'react';
import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class Starship extends React.Component {
	
	state = {
		ship: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getStarship( this.props.match.params.id, res => {
			that.setState({
				ship: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.ship.name}</h1>
			</div>
		);
	}

}

export default Starship;