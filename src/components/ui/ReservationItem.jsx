import React, {Component}  from 'react';
import {withRouter} from 'react-router';

const handleClick = ({history, item, onSetReservation}) => {
    onSetReservation(item._id);
    history.push(`/view/${item._id}`);
};

const ReservationItem = (props) => (
    <li className="list-group-item">
        {props.item.name}
        <button className="btn btn-primary float-right"
                onClick={() => handleClick(props)}>view</button>
    </li>
);

export default withRouter(ReservationItem);
