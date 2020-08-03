import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import App from './App';
import CarsNew from './containers/cars_new';

import carsReducer from './reducers/cars_reducer';

const reducers = combineReducers({
  cars: carsReducer,
  // form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(reduxPromise, logger);

const initialState = {
  cars: []
}

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, composeEnhancers(middlewares))}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cars/new" exact component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
