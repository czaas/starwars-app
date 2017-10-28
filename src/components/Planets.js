import React from 'react';
import { Link } from 'react-router-dom';

import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class Planets extends React.Component {
	_isMounted = false;

	state = {
		planets: [],
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
    swapi.getPlanets(that.state.page, res => {
      if (this._isMounted) {
        that.setState({
          page: getUrlParams(res.next)['page'],
          planets: [...that.state.planets, ...res.results]
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
  			<h2>Planets</h2>
  			<input type="text" name="search" onChange={this.updateSearch}/>
  			<ul>
  				{
  					this.state.planets.map((planet, index) => {
               if ( planet.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`planet${index}`}><Link to={planet.url.replace('https://swapi.co/api', '')}>{planet.name}</Link></li>;
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

export default Planets;