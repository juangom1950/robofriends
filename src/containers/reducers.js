import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
  searchField: ''
}

//The 3 principles rule:
//1. single source of truth
//2. State is read only
//3. Changes using pure funtion. 
//   It alway get and input and returns an output. It doesn't modify anithing

//This function always receives a state and an action
export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD: 
      //We want to return a new state
      return { ...state, searchField: action.payload }
      //return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;

  }
}