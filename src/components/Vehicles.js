import React from 'react';
import { Link } from 'react-router-dom';

import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class Vehicles extends React.Component {
	_isMounted = false;

	state = {
		vehicles: [],
		page: 1,
		currentSearch: ''
	}

	componentDidMount() {
    this.displayItems();
    this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	displayItems = () => {
		const that = this;
		swapi.getVehicles(that.state.page, res => {
			if (this._isMounted) {
				that.setState({
					page: getUrlParams(res.next)['page'],
					vehicles: [...that.state.vehicles, ...res.results]
				});

				if ( that.state.page !== undefined && that.state.page !== null ) {
					that.displayItems();
				}
			}			
		});

	}

	updateSearch = (e) => {
		this.setState({
			currentSearch: e.target.value
		})

	}

	render() {
		return (
			<div>
				<h2>Vehicles</h2>
				<input type="text" name="search" onChange={this.updateSearch}/>
				<ul>
					{
						this.state.vehicles.map((vehicle, index) => {
							if ( vehicle.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`vehicle${index}`}><Link to={vehicle.url.replace('https://swapi.co/api', '')}>{vehicle.name}</Link></li>;
							} else {
								return null;
							}
						})
					}
				</ul>
			</div>
		);
	}
}

export default Vehicles;