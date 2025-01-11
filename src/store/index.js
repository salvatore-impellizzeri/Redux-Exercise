import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    // reducer: { counter: counterSlice.reducer } Se dovessimo avere più reducer con un nome a nostra scelta
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;