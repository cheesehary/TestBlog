import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import routes from './routes';

ReactDom.render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
, document.querySelector('#container'));