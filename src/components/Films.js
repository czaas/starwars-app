import React from 'react';
import { Link } from 'react-router-dom';

import swapiModule from './swapi.js';
import { getUrlParams } from '../util.js';

const swapi = new swapiModule();

class Films extends React.Component {
  _isMounted = false;

  state = {
    films: [],
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
    swapi.getFilms(that.state.page, res => {
      if (this._isMounted) {
        that.setState({
          page: getUrlParams(res.next)['page'],
          films: [...that.state.films, ...res.results]
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
        <h2>Films</h2>
        <input type="text" name="search" onChange={this.updateSearch}/>
        <ul>
          {
            this.state.films.map((film, index) => {
               if ( film.title.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                return <li key={`film${index}`}><Link to={film.url.replace('https://swapi.co/api', '')}>{film.title}</Link></li>;
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

export default Films;