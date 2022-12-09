import { ActionTypes } from '../constants/actionTypes';

export const setReservations = (reservations) => ({
  type: ActionTypes.SET_RESERVATIONS,
  payload: reservations,
});
