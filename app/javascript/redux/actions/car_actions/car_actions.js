import { ActionTypes } from "../../constants/actionTypes";

export const setCars = (cars) => {
  return {
    type: ActionTypes.SET_CARS,
    payload: cars,
  };
};

export const selectedCar = (car) => {
  return {
    type: ActionTypes.SELECTED_CAR,
    payload: car,
  };
};


