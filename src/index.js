import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
// nuestros componentes de React para la App y las vistas
import ContainerWelcome from './containers/ContainerWelcome';
//import ContainerTable from './containers/ContainerTable';

// sincronizamos el browserHistory de React Router con el Store
//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

/*
ReactDOM.render(
  <Provider store = {store}>
  {/*le decimos al Router que use nuestro history sincronizado*/
   /* <Router history={browserHistory}>
    {/*armamos las rutas de nuestra aplicación*/
    /*  <Route component={ContainerWelcome}>
        <Route path="/" component={ContainerTable} />
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();

*/


