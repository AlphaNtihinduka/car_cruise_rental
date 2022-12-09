import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  cars: [],
};

export const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CARS:
      return { ...state, cars: payload };
    default:
      return state;
  }
};

export const selectedCarReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CAR:
      return { ...state, ...payload };
    default:
      return state;
  }
};
