import { SET_CARS, SELECTED_CAR } from '../constants/actionTypes';

export const setCars = (cars) => ({
  type: SET_CARS,
  payload: cars,
});

export const selectedCar = (car) => ({
  type: SELECTED_CAR,
  payload: car,
});
