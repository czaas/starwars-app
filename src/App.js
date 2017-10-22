import React, { Component } from 'react';
import Starships from './components/Starships';

import './App.scss';

class App extends Component {
	state = {
		counter: 0,
		loading: true
	}

  render() {
    return (
      <div>
        <h1>Star Wars</h1>

        <Starships />
      </div>
    );
  }
}

export default App;
