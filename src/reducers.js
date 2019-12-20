import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants.js'

const initialStateSearch = {
  searchField: ''
}

//The 3 principles rule:
//1. single source of truth
//2. State is read only
//3. Changes using pure funtion. 
//   It alway get and input and returns an output. It doesn't modify anithing

//This function always receives a state and an action
export const searchRobots = (state=initialStateSearch, action={}) => {
  //console.log(action.type);

  switch(action.type) {
    case CHANGE_SEARCH_FIELD: 
      //We want to return a new state
      return { ...state, searchField: action.payload }
      //return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;

  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default: 
      return state;
  }
}
