import React, { Component } from 'react';

export default class ReservationDetails extends Component {
  render() {
    const item = this.props.reservation;
    return (<div className="card m-b-30">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.hotelName}</h6>
        <a className="card-link">Arrival: {item.arrivalDate}</a>
        <a className="card-link">Dep: {item.departureDate}</a>
      </div>
    </div>);
  }
}
