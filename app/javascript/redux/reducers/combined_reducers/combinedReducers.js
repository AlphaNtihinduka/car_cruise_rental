import { combineReducers } from "@reduxjs/toolkit";
import { carReducer, selectedCarReducer } from "./carReducer";
const reducers = combineReducers({
  allcars: carReducer,
  car: selectedCarReducer,
});

export default reducers;
