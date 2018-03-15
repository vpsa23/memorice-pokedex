import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';


export default createStore(combineReducers({
  routing: routerReducer,
  })
);