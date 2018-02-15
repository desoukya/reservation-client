import React from 'react';
import ReservationList from './containers/ReservationList';
import ReservationForm from './containers/ReservationForm';

export const App = ({ children }) => {
  return (<div className="container">
    <h3 className="text-center m-b-30">Reservations</h3>
    <div className="row">
      <div className="col-sm-6">
        {children}
        <ReservationList />
      </div>
      <div className="offset-1 col-sm-5">
        <ReservationForm />
      </div>
    </div>
  </div>);
};
