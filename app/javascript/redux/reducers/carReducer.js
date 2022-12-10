import ActionTypes from '../constants/actionTypes';

const initialState = {
  cars: [],
};

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CARS:
      return { ...state, cars: payload };
    default:
      return state;
  }
};

export default carReducer;
