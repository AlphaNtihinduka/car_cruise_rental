import { configureStore } from '@reduxjs/toolkit';
import reducers from '../combined_reducers/combinedReducers';

const store = configureStore({ reducer: reducers });

export default store;
