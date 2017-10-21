import React, { Component } from 'react';
import Starships from './components/Starships';

//styles
import './App.scss';
class App extends Component {
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
