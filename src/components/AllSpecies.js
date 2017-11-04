import React from 'react';
import { Link } from 'react-router-dom';

import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class AllSpecies extends React.Component {
  _isMounted = false;

  state = {
    allSpecies: [],
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
    swapi.getAllSpecies(that.state.page, res => {
      if (this._isMounted) {
        that.setState({
          page: getUrlParams(res.next)['page'],
          allSpecies: [...that.state.allSpecies, ...res.results]
        });

        if ( that.state.page !== undefined && that.state.page !== null ) {
          that.displayItems();
        }
      }
      console.log(res);
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
        <h2>Species</h2>
        <input type="text" name="search" onChange={this.updateSearch}/>
        <ul>
          {
            this.state.allSpecies.map((species, index) => {
               if ( species.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`species${index}`}><Link to={species.url.replace('https://swapi.co/api', '')}>{species.name}</Link></li>;
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

export default AllSpecies;