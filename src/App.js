import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Films from './components/Films';
import Film from './components/Film';
import People from './components/People';
import Person from './components/Person';
import Planets from './components/Planets';
import Planet from './components/Planet';
import AllSpecies from './components/AllSpecies';
import Species from './components/Species';
import Starships from './components/Starships';
import Starship from './components/Starship';
import Vehicles from './components/Vehicles';
import Vehicle from './components/Vehicle';
import NotFound from './components/NotFound';

import './App.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Star Wars</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/planets">Planets</Link></li>
            <li><Link to="/species">Species</Link></li>
            <li><Link to="/starships">Starships</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/some-broken-link">Broken Link</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact render={Home} />
            <Route path="/films" exact component={Films} />
            <Route path="/films/:id" component={Film} />
            <Route path="/people" exact component={People} />
            <Route path="/people/:id" component={Person} />
            <Route path="/planets" exact component={Planets} />
            <Route path="/planets/:id"  component={Planet} />
            <Route path="/species" exact component={AllSpecies} />
            <Route path="/species/:id" component={Species} />
            <Route path="/starships" exact component={Starships} />
            <Route path="/starships/:id" component={Starship} />
            <Route path="/vehicles" exact component={Vehicles} />
            <Route path="/vehicles/:id" component={Vehicle} />
            <Route path="*" render={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
