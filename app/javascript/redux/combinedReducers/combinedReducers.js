import { combineReducers } from '@reduxjs/toolkit';
import { carReducer } from '../reducers/carReducer';
import { reservationReducer } from '../reducers/reservation_reducer';

const reducers = combineReducers({
  allcars: carReducer,
  // car: selectedCarReducer,
  allreservations: reservationReducer
});

export default reducers;
