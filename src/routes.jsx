import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import ReservationDetails from './components/containers/ReservationDetails';

import { App} from './components';

const routes = (
    <Router>
      <App>
          <Switch>
            <Route path="/view/:id" component={ReservationDetails} />
          </Switch>
      </App>
    </Router>
);

export default routes;
