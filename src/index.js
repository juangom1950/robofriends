import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
//Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible. https://tachyons.io/
import 'tachyons';

const logger = createLogger();
//In this case we are interested in the "logger" middleware
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  /* The "Provider" component is going to take care of passing down the store to all the components down the component 
  tree from the "app" and we use something called Connect which we talked about to finish this connection.*/
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
