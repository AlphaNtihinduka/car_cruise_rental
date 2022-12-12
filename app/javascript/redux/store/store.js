import { configureStore } from '@reduxjs/toolkit';
import reducers from '../combinedReducers/combinedReducers';

const store = configureStore({ reducer: reducers });

export default store;
