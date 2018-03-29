import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';


// Redux store on the top level of our app
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(reduxThunk)
  ));

// any time the redux store gets some new state produced inside of it
// the provider will inform and update all the children components with new state!!!
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);