import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './countries/countries';

const reducer = combineReducers({
  data: countryReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
