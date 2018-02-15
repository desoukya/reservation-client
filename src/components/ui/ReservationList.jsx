import React, { Component } from 'react';
import ReservationItem from '../containers/ReservationItem';

export default class ReservationList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.reservations.map((item, key) => <ReservationItem item={item} key={key} />)}
      </ul>);
  }
}
