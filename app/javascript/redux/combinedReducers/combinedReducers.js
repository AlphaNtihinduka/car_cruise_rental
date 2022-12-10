import { combineReducers } from '@reduxjs/toolkit';
import carReducer from '../reducers/carReducer';
import reservationReducer from '../reducers/reservationReducer';

const reducers = combineReducers({
  allcars: carReducer,
  // car: selectedCarReducer,
  allreservations: reservationReducer,
});

export default reducers;
