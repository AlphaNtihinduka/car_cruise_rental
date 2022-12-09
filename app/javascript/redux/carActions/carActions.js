import { ActionTypes } from '../constants/actionTypes';

export const setCars = (cars) => ({
  type: ActionTypes.SET_CARS,
  payload: cars,
});

export const selectedCar = (car) => ({
  type: ActionTypes.SELECTED_CAR,
  payload: car,
});
