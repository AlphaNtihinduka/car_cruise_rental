import { configureStore } from "@reduxjs/toolkit";
import reducers from "./combinedReducer";

const store = configureStore({ reducer: reducers });

export default store;
