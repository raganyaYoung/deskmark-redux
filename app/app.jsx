/*
 * @file app main file
 */

import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deskmark from './components/Deskmark';
import rootReducer from './reducers';
import * as actionCreators from './actions';

// create a store with middleware
const store = applyMiddleware(
  thunkMiddleware
)(createStore)(rootReducer);

const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

// create dom container
const container = document.body.appendChild(
  document.createElement('div')
);

// render root component with store to dom container
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<Deskmark />, app);
