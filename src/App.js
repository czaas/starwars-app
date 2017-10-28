import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Starship from './components/Starship';
import Vehicles from './components/Vehicles';
import Vehicle from './components/Vehicle';
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
            <li><Link to="/planets">Planets</Link></li>
            <li><Link to="/starships">Starships</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/some-broken-link">Broken Link</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact render={Home} />
            <Route path="/planets" exact component={Planets} />
            <Route path="/starships" exact component={Starships} />
            <Route path="/starships/:id" component={Starship} />
            <Route path="/vehicles" exact component={Vehicles} />
            <Route path="/vehicles/:id" exact component={Vehicle} />
            <Route path="*" render={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
