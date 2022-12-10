import ActionTypes from '../constants/actionTypes';

const initialState = {
  reservations: [],
};

const reservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RESERVATIONS:
      return { ...state, reservations: payload };
    default:
      return state;
  }
};

export default reservationReducer;
