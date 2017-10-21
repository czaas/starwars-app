import React, { Component } from 'react';
import Starships from './components/Starships';

import './App.scss';

class App extends Component {
	state = {
		counter: 0,
		loading: true
	}


	componentWillMount(){
    
	}

	componentDidMount(){
		const that = this;
		setTimeout(function (){
			that.setState({
				loading: false
			})
		}, 1500)
	}

	componentWillReceiveProps(){

	}

	logHello = () => {
		console.log("Hello world!");
	}

	multiply = () => {
		this.setState({
			counter: this.state.counter + 2,
		})
	}

	clickHandler = () => {
		this.logHello();
		this.multiply();
	}

  render() {
    return (
      <div>
      {this.state.loading ? "Is loading" : "Loading complete" }
        <h1 onClick={this.clickHandler}>Star Wars</h1>
        <h2>{this.state.counter}</h2>

        <Starships />
      </div>
    );
  }
}

export default App;
