import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  reservations: [],
};

export const reservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RESERVATIONS:
      return { ...state, reservations: payload };
    default:
      return state;
  }
};
