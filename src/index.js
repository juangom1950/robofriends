import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
//Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible. https://tachyons.io/
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
  /* The "Provider" component is going to take care of passing down the store to all the components down the component 
  tree from the "app" and we use something called Connect which we talked about to finish this connection.*/
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
