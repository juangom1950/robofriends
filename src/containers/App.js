import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

//An action is just a function the retuns an object
import { setSearchField } from  '../components/actions';

//It said tell be what peace of state I need to listen to and then send it to the props
const mapStateToProps = (state, ownProps) => {
  return {
    //this "state.searchRobots.searchField" comes from our reducer
    searchField: state.searchField
  }
}

//It says tell be what props I need to listen to that are actions that need to be dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //Here we dispatch an action. setSearchField is in actions.js
   onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  //We need to add this to add a state
  //State use to live in the app component
  constructor() {
    super();
    this.state = {
      robots: [],
      //searchfield: ""
    };
  }

  componentDidMount() {
    console.log(this.props.store);
    //fetch is an object that comes with the browser that is going to allow us to do api calls
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  //We can remove this method now, because it is comming as a prop from Redux.
  //everytime that onChange changes we got an event
  //You should use arrow functions everytime that you want to add a method into a component
  // so you can have the right value of "this" refers to this context
  // onSearchChange = event => {
  //   //Everytime that we render the state the "render" will be triger again, because the compoent is going to be re-render
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      //This searchfield is comming as props through Redux
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    //We check if we get the information yet.
    // ErrorBoundry shows a nice error to the end customer
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
/*connect is a higher order function. It is a function that returns another function, then that other 
function is going to run with the "App" parameter. This is going to take this props into the App*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
