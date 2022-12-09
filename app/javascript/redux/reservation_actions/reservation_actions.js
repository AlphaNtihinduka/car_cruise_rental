import { ActionTypes } from '../constants/actionTypes';

const setReservations = (reservations) => ({
  type: ActionTypes.SET_RESERVATIONS,
  payload: reservations,
});

export default setReservations;
