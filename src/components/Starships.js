import React from 'react';
import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class Starships extends React.Component {
  _isMounted = false;

  state = {
    ships: [],
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
    swapi.getStarships(that.state.page, res => {
      if (this._isMounted) {
        that.setState({
          page: getUrlParams(res.next)['page'],
          ships: [...that.state.ships, ...res.results]
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
        <h2>Starships</h2>
        <input type="text" name="search" onChange={this.updateSearch}/>
        <ul>
          {
            this.state.ships.map((ship, index) => {
               if ( ship.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`starship${index}`}>{ship.name}</li>;
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

export default Starships;