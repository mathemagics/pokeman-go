import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import logger from 'redux-logger';

import MainNav from 'nav/mainNav';

// Reducers
import mainReducer from './mainDuck';
import navReducer from './navDuck';

const reducers = combineReducers({
  main: mainReducer,
  nav: navReducer,
});

const middleware = () => applyMiddleware(logger);

const store = createStore(reducers, middleware());

export default () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
);
