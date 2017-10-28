import React from 'react';
import swapiModule from './swapi.js';

const swapi = new swapiModule();

class Film extends React.Component {
	
	state = {
		film: {}
	}

	componentDidMount() {
		const that = this;
		swapi.getFilm( this.props.match.params.id, res => {
			that.setState({
				film: res
			});
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.film.title}</h1>
				<p>{this.state.film.opening_crawl}</p>
			</div>
		);
	}

}

export default Film;