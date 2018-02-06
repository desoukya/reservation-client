import C from './constants';
import fetch from 'isomorphic-fetch';
import request from 'request';

export const addReservation = reservation => dispatch => {
    fetch('http://localhost:3000/api/v1/reservation/', {
        method: 'post',
        body: JSON.stringify(reservation),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}).then(response => response.json())
        .then(reservation => {
        dispatch({
            type: C.ADD_RESERVATION,
            payload: reservation
        });
    });
}

export const fetchReservations = () => dispatch => {

    fetch('http://localhost:3000/api/v1/reservations/', {})
        .then(response => {
            return response.json();
        })
        .then(reservations => {
            dispatch({
                type: C.SET_RESERVATIONS,
                payload: reservations
            });
        })
        .catch(error => {
            console.log(error);
        });

};

export const setReservation = reservationId => dispatch => {

    fetch(`http://localhost:3000/api/v1/reservation/${reservationId}`, {})
        .then(response => {
            return response.json();
        })
        .then(reservation => {
            dispatch({
                type: C.SET_RESERVATION,
                payload: reservation
            });
        })
        .catch(error => {
            console.log(error);
        });

};
