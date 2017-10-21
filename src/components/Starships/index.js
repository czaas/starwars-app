import React from 'react';
import {
  fetchShips,
} from './ducks.js';

class Starships extends React.Component {
  componentDidMount() {
    fetchShips();
  }
  render() {
    return (
      <div>
        <h2>Starships</h2>
      </div>
    );
  }
}

export default Starships;