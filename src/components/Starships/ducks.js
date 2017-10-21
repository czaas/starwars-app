import swapiModule from '../swapi';
import 'whatwg-fetch';
const GET_STAR_SHIPS_REQUEST = 'GET_STAR_SHIPS_REQUEST';
const GET_STAR_SHIPS_REQUEST_SUCCESS = 'GET_STAR_SHIPS_REQUEST_SUCCESS';
const GET_STAR_SHIPS_REQUEST_ERROR = 'GET_STAR_SHIPS_REQUEST_ERROR';

const swapi = new swapiModule();

const fetchHeaders = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};


export default function reducer(state = {
  errorMsg: '',
  requestingShips: false,
}, action = {}) {
  switch(action.type) {
    case GET_STAR_SHIPS_REQUEST: 
      return {
        ...state,
        requestingShips: true,
      };
    case GET_STAR_SHIPS_REQUEST_SUCCESS:
      return {
        ...state,
        requestingShips: false,
      };
    case GET_STAR_SHIPS_REQUEST_ERROR:
      return {
        ...state,
        requestingShips: false,
        errorMsg: '',
      };
    default: return state;
  }
}

export function requestStarships() {

}

export function fetchShips(shipID) {
  console.log(shipID, 'here');
  swapi.getStarships(res => {
    console.log(res);
  });
  // fetch(`https://swapi.co/api/starships${ shipID ? '/' + shipID : ''}`, fetchHeaders)
  //     .then(
  //       res => res.json(),
  //       err => console.error(err),
  //     )
  //     .then( json => {
  //       console.log(json);
  //     });
}