import C from '../constants';
import { combineReducers } from 'redux';

export const reservations = (state = [], action) => {

  switch (action.type) {

    case C.ADD_RESERVATION:
      return [...state, action.payload];

    case C.SET_RESERVATIONS:
      return action.payload;

    default:
      return state;
  }

};

export const reservation = (state = [], action) => {

  switch (action.type) {

    case C.SET_RESERVATION:
      return action.payload;

    default:
      return state;
  }

};

export default combineReducers({
  reservations,
  reservation
});
