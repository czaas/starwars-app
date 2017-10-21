import React from 'react';
import swapiModule from '../swapi.js';

const swapi = new swapiModule();

class Starships extends React.Component {

  state = {
    ships: [],
    currentSearch: ''
  }

  componentDidMount() {
    const that = this;
    
    swapi.getStarships(res => {
      console.log(res);
      that.setState({
        ships: [...that.state.ships, ...res.results]
      })
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
            this.state.ships.map( (ship, index) => {
               if ( ship.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) !== -1 ) {
                 return <li key={`starship${index}`}>{ship.name}</li> 
               }
             })            
          }
          
        </ul>
        <button>Prev</button>
        <button>Next</button>
      </div>
    );
  }
}

export default Starships;