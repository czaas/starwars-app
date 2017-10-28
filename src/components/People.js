import React from 'react';
import { Link } from 'react-router-dom';

import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class People extends React.Component {
  _isMounted = false;

  state = {
    people: [],
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
    swapi.getPeople(that.state.page, res => {
      if (this._isMounted) {
        that.setState({
          page: getUrlParams(res.next)['page'],
          people: [...that.state.people, ...res.results]
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
        <h2>People</h2>
        <input type="text" name="search" onChange={this.updateSearch}/>
        <ul>
          {
            this.state.people.map((person, index) => {
               if ( person.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`person${index}`}><Link to={person.url.replace('https://swapi.co/api', '')}>{person.name}</Link></li>;
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

export default People;