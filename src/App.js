import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Starships from './components/Starships';
import NotFound from './components/NotFound';

import './App.scss';

class App extends Component {
	state = {
		counter: 0,
		loading: true
	}

  render() {
    return (
      <Router>
        <div>
          <h1>Star Wars</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/starships">Starships</Link></li>
            <li><Link to="/some-broken-link">Broken Link</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact render={Home} />
            <Route path="/starships" component={Starships} />
            <Route path="*" render={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
