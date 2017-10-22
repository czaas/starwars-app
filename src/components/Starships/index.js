import React from 'react';
import swapiModule from '../swapi.js';

const swapi = new swapiModule();

class Starships extends React.Component {

  state = {
    ships: [],
    page: 1,
    currentSearch: ''
  }

  componentDidMount() {
    const that = this;

//    do {
      swapi.getStarships(that.state.page, res => {                
        var next = that.getUrlParams(res.next)['page'];      
        that.setState({
          page: next
        })

        that.setState({
          ships: [...that.state.ships, ...res.results]
        })

      });
//    } while ( that.state.page != null )


  }

  updateSearch = (e) => {
    this.setState({
      currentSearch: e.target.value
    })
  }

  getUrlParams = (url) => {
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
      queryString = queryString.split('#')[0];
      var arr = queryString.split('&');

      for (var i=0; i<arr.length; i++) {      
        var a = arr[i].split('=');
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
          paramNum = v.slice(1,-1);
          return '';
        });

        var paramValue = typeof(a[1])==='undefined' ? true : a[1];

        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();
      
        if (obj[paramName]) {
          if (typeof obj[paramName] === 'string') {
            obj[paramName] = [obj[paramName]];
          }
          if (typeof paramNum === 'undefined') {          
            obj[paramName].push(paramValue);
          }
          else {          
            obj[paramName][paramNum] = paramValue;
          }
        }      
        else {
        obj[paramName] = paramValue;
        }
      }
    }
  return obj;
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