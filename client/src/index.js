import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';


// Redux store on the top level of our app
const store = createStore(reducers, {}, applyMiddleware());

// any time the redux store gets some new state produced inside of it
// the provider will inform and update all the children components with new state!!!
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);