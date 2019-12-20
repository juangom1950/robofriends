import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants.js'

export const setSearchField = (text) => {
  //console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

//This is a high order function. This is a function that returns a function
//Redux-Thunk is listening to actions and It is going to act because it sees that this is a 
//function that returns a function and not an object
//The 1st function is going to execute and then return a function that trigers redux-thunk
//Tutorial: https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
//https://stackoverflow.com/questions/55905677/how-to-call-a-function-that-returns-another-function-in-javascript
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // data is the data that we received from the API
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}