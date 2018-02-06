import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/rdt.css';
import './styles/index.css';
import storeFactory from './store';
import {fetchReservations} from './actions';
import routes from './routes';

const store = storeFactory({reservations: [], reservation: {}});
store.dispatch(fetchReservations());

ReactDOM.render(
	<Provider store={store}>
	   {routes}
	</Provider>,
    document.getElementById('root')
);
