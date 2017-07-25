import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainNav from 'nav/mainNav';

// Reducers
import mainReducer from './mainDuck';
import secondaryReducer from './secondDuck';
import navReducer from './navDuck';

const reducers = combineReducers({
  secondary: secondaryReducer,
  main: mainReducer,
  nav: navReducer,
});

const middleware = () => applyMiddleware(logger, thunk);

const store = createStore(reducers, middleware());

export default () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
);
